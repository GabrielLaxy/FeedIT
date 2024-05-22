import google.generativeai as genai
import PIL.Image
import dotenv
import os
import base64
import binascii
from io import BytesIO
from fastapi import FastAPI, Request
import httpx

app = FastAPI()

dotenv.load_dotenv(dotenv.find_dotenv())
genai.configure(api_key=os.getenv("API_KEY"))

def redimensiona_img(img):
    larg, alt = img.size
    nova_larg = larg // 2
    nova_alt = alt // 2
    imagem_redimensionada = img.resize((nova_larg, nova_alt))
    return imagem_redimensionada

def verifica_e_redimensiona(img):
    larg, alt = img.size
    if larg >= 3600 or alt >= 2000:
        return redimensiona_img(img)
    else:
        return img

async def enviar_resposta_para_servidor(resposta):
    url = "/receber-resposta" 
    dados = {"resposta": resposta}
    async with httpx.AsyncClient() as client:
        try:
            response = await client.post(url, json=dados)
            response.raise_for_status()
            print("Resposta enviada com sucesso para o servidor.")
        except httpx.HTTPStatusError as http_err:
            print(f"HTTP error occurred: {http_err.response.status_code} - {http_err.response.text}")
        except Exception as err:
            print(f"Other error occurred: {err}")

@app.post("/enviar-imagem")
async def receber_imagem(request: Request):
    dados = await request.json()
    imagem_base64 = dados.get('imagem')

    if isinstance(imagem_base64, str) and imagem_base64.startswith('data:image'):
        print("Imagem recebida e validada.")
        try:
            header, imagem_base64 = imagem_base64.split(',', 1)
            imagem_decodificada = base64.b64decode(imagem_base64)
            
            imagem = PIL.Image.open(BytesIO(imagem_decodificada))

            img_processada = verifica_e_redimensiona(imagem)

            buffered = BytesIO()
            img_processada.save(buffered, format="PNG")
            img_processada_base64 = base64.b64encode(buffered.getvalue()).decode('utf-8')

            model = genai.GenerativeModel('gemini-pro-vision')
            resposta = model.generate_content(["Write the classification of the food in the image(Carbohydrates,Fruits,candy, Vegetables, Dairy, Proteins, Nuts, Sweets, Sausages), just 1 word, if there are no food in the image just write nfound", img_processada_base64])
            
            resposta_string = resposta.text
            
            await enviar_resposta_para_servidor(resposta_string)
            
            return resposta_string
        
        except binascii.Error as e:
            print(e)
            return {"erro": "Erro ao decodificar a imagem base64"}
        except Exception as e:
            print(e)
            return {"erro": str(e)}
    else:
        return {"erro": "Formato de imagem inválido"}
