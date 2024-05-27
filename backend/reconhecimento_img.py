import base64
import io
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from PIL import Image
import google.generativeai as genai
import dotenv
import os

dotenv.load_dotenv()

genai.configure(api_key=os.getenv("API_KEY"))

app = FastAPI()

class ImageData(BaseModel):
    image_base64: str

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

@app.post("/process-image")
async def process_image(data: ImageData):
    try:
        image_data = data.image_base64
        img = Image.open(io.BytesIO(base64.b64decode(image_data)))

        img_processada = verifica_e_redimensiona(img)

        buffer = io.BytesIO()
        img_processada.save(buffer, format="JPEG")
        buffer.seek(0)

        model = genai.GenerativeModel('gemini-pro-vision')
        resposta = model.generate_content([
            "Write the classification of the food in the image(carbo,protein,candy, fruit or vegetable), just 1 word, if there ar no food in the image just write nfound",
            buffer.getvalue()
        ])

        return {"classification": resposta.text}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
