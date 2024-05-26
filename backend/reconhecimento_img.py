# import base64
# import io
# from fastapi import FastAPI, HTTPException
# from pydantic import BaseModel
# from PIL import Image
# import google.generativeai as genai
# import dotenv
# import os

# from fastapi.middleware.cors import CORSMiddleware

# # Carregar variáveis de ambiente
# dotenv.load_dotenv()

# # Configurar a chave da API do Google
# genai.configure(api_key=os.getenv("API_KEY"))

# app = FastAPI()

# # Configurar middleware CORS
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],  # Ajuste conforme necessário
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# class ImageData(BaseModel):
#     image_base64: str

# def redimensiona_img(img):
#     larg, alt = img.size
#     nova_larg = larg // 2
#     nova_alt = alt // 2
#     imagem_redimensionada = img.resize((nova_larg, nova_alt))
#     return imagem_redimensionada

# def verifica_e_redimensiona(img):
#     larg, alt = img.size
#     if larg >= 3600 or alt >= 2000:
#         return redimensiona_img(img)
#     else:
#         return img

# @app.post("/process-image")
# async def process_image(data: ImageData):
#     try:
#         # Decodificar a imagem base64
#         image_data = data.image_base64
#         img = Image.open(io.BytesIO(base64.b64decode(image_data)))  # Decodificação e abertura da imagem

#         # Verificar e redimensionar a imagem se necessário
#         img_processada = verifica_e_redimensiona(img)

#         # Salvar a imagem processada em um buffer
#         buffer = io.BytesIO()
#         img_processada.save(buffer, format="JPEG")
#         buffer.seek(0)

#         # Integrar com a API do Google
#         model = genai.GenerativeModel('gemini-pro-vision')
#         resposta = model.generate_content([
#             "Write the classification of the food in the image(carbo,protein,candy, fruit or vegetable), just 1 word, if there ar no food in the image just write nfound",
#             buffer.getvalue()  # Obter os bytes da imagem processada
#         ])

#         return {"classification": resposta.text}
#     except Exception as e:
#         raise HTTPException(status_code=400, detail=str(e))

# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run(app, host="127.0.0.1", port=8000)
