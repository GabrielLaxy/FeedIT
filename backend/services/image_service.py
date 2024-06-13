import google.generativeai as genai
from PIL import Image
import io
import base64
import os
import dotenv

dotenv.load_dotenv()

genai.configure(api_key=os.getenv("API_KEY"))

classification_functions = {
    "Carbohydrates": lambda status: status.adicionar_carboidratos(),
    "carbohydrates": lambda status: status.adicionar_carboidratos(),
    "Carbs": lambda status: status.adicionar_carboidratos(),
    "carbs": lambda status: status.adicionar_carboidratos(),
    "Fruits": lambda status: status.adicionar_frutas(),
    "Fruit": lambda status: status.adicionar_frutas(),
    "fruits": lambda status: status.adicionar_frutas(),
    "fruit": lambda status: status.adicionar_frutas(),
    "Vegetables": lambda status: status.adicionar_legumes(),
    "vegetables": lambda status: status.adicionar_legumes(),
    "Veggies": lambda status: status.adicionar_legumes(),
    "veggies": lambda status: status.adicionar_legumes(),
    "Dairy": lambda status: status.adicionar_leite_e_derivados(),
    "dairy": lambda status: status.adicionar_leite_e_derivados(),
    "Milk": lambda status: status.adicionar_leite_e_derivados(),
    "milk": lambda status: status.adicionar_leite_e_derivados(),
    "Proteins": lambda status: status.adicionar_carnes(),
    "proteins": lambda status: status.adicionar_carnes(),
    "Protein": lambda status: status.adicionar_carnes(),
    "protein": lambda status: status.adicionar_carnes(),
    "Meat": lambda status: status.adicionar_carnes(),
    "meat": lambda status: status.adicionar_carnes(),
    "Nuts": lambda status: status.adicionar_oleaginosas(),
    "nuts": lambda status: status.adicionar_oleaginosas(),
    "Sweets": lambda status: status.adicionar_doces(),
    "sweets": lambda status: status.adicionar_doces(),
    "Candy": lambda status: status.adicionar_doces(),
    "candy": lambda status: status.adicionar_doces(),
    "Sausages": lambda status: status.adicionar_embutidos(),
    "sausages": lambda status: status.adicionar_embutidos(),
    "Sausage": lambda status: status.adicionar_embutidos(),
    "sausage": lambda status: status.adicionar_embutidos(),
}

def process_image_service(image_base64: str, status):
    image_bytes = base64.b64decode(image_base64)
    image = Image.open(io.BytesIO(image_bytes))

    model = genai.GenerativeModel('gemini-pro-vision')
    resposta = model.generate_content([
        "Write the classification of the food in the image(Carbohydrates,Fruits,candy, Vegetables, Dairy, Proteins, Nuts, Sweets, Sausages), just 1 word, if there are no food in the image just write nfound, and if there are If there is more than one food in the photo, classify (in 1 word) based on the predominant food, the anwser has to be just one word.",
        image
    ])
    classification = resposta.text.strip()

    if classification in classification_functions:
        classification_functions[classification](status)
        return classification, status.dados
    else:
        return "nfound", status.dados
