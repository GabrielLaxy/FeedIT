import google.generativeai as genai
import PIL.Image
import dotenv
import os
from fastapi import FastAPI

from fastapi import FastAPI, Request

app = FastAPI()

@app.post("/enviar-imagem")
async def receber_imagem(request: Request):
    dados = await request.json()
    imagem_base64 = dados.get('imagem')

    if isinstance(imagem_base64, str) and imagem_base64.startswith('data:image'):
        print("Imagem recebida e validada.")
        return {"mensagem": "Imagem recebida com sucesso"}
    else:
        return {"erro": "Formato de imagem inválido"}



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

#inserção de imagens de teste
source = 'baixados.png'
img_original = PIL.Image.open(source)
img_processada = verifica_e_redimensiona(img_original)

model = genai.GenerativeModel('gemini-pro-vision')
resposta = model.generate_content(["Write the classification of the food in the image(Carbohydrates,Fruits,candy, Vegetables, Dairy, Proteins, Nuts, Sweets, Sausages), just 1 word, if there ar no food in the image just write nfound",img_processada])

print(resposta.text)