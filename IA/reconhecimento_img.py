import google.generativeai as genai
import PIL.Image
import dotenv
import os

dotenv.load_dotenv(dotenv.find_dotenv())

genai.configure(api_key=os.getenv("chave_api_gemini"))

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
source = 'Captura de tela 2024-04-29 195956.png'
img_original = PIL.Image.open(source)
img_processada = verifica_e_redimensiona(img_original)

model = genai.GenerativeModel('gemini-pro-vision')
resposta = model.generate_content(["Write the classification of the food in the image(carbo,protein,candy, fruit or vegetable), just 1 word, if there ar no food in the image just write nfound",img_processada])

print(resposta.text)