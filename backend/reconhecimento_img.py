from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import google.generativeai as genai
import dotenv
import os
from PIL import Image
import io
import base64

from status import Status

dotenv.load_dotenv()

genai.configure(api_key=os.getenv("API_KEY"))

app = FastAPI()

class ImageData(BaseModel):
    image_base64: str

status = Status()

classification_functions = {
    "Carbohydrates": status.adicionar_carboidratos,
    "Fruits": status.adicionar_frutas,
    "Fruit": status.adicionar_frutas,
    "Vegetables": status.adicionar_legumes,
    "Dairy": status.adicionar_leite_e_derivados,
    "Proteins": status.adicionar_carnes,
    "Nuts": status.adicionar_oleaginosas,
    "Sweets": status.adicionar_doces,
    "Sausages": status.adicionar_embutidos,
    "candy": status.adicionar_doces,
}

@app.post("/process-image")
async def process_image(data: ImageData):
    try:
        image_bytes = base64.b64decode(data.image_base64)

        image = Image.open(io.BytesIO(image_bytes))

        model = genai.GenerativeModel('gemini-pro-vision')
        resposta = model.generate_content([
            "Write the classification of the food in the image(Carbohydrates,Fruits,candy, Vegetables, Dairy, Proteins, Nuts, Sweets, Sausages), just 1 word, if there are no food in the image just write nfound, and if there are If there is more than one food in the photo, classify (in 1 word) based on the predominant food, the anwser has to be just one word.",
            image
        ])
        classification = resposta.text.strip()
        print("Funcionou", classification)

        if classification in classification_functions:
            classification_functions[classification]()
            print(f"Status atualizado para {classification}")
            status._print_dados()
        else:
            print("Classificação não reconhecida ou não há comida na imagem.")

        return {"classification": classification, "status": status.dados}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
