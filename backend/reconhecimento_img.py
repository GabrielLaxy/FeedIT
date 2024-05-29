from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import google.generativeai as genai
import dotenv
import os
from PIL import Image
import io
import base64

dotenv.load_dotenv()

genai.configure(api_key=os.getenv("API_KEY"))

app = FastAPI()

class ImageData(BaseModel):
    image_base64: str

@app.post("/process-image")
async def process_image(data: ImageData):
    try:
        # Decode base64 string to bytes
        image_bytes = base64.b64decode(data.image_base64)

        # Load image from bytes
        image = Image.open(io.BytesIO(image_bytes))

        model = genai.GenerativeModel('gemini-pro-vision')
        resposta = model.generate_content([
            "Write the classification of the food in the image(Carbohydrates,Fruits,candy, Vegetables, Dairy, Proteins, Nuts, Sweets, Sausages), just 1 word, if there are no food in the image just write nfound, and if there are If there is more than one food in the photo, classify (in 1 word) based on the predominant food, the anwser has to be just one word.",
            image
        ])
        teste = resposta.text
        print("Funcionou", teste)


        return {"classification": resposta.text}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
