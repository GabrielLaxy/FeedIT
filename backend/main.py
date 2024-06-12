from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from services.image_service import process_image_service
from services.db_service import register_user_service, add_character_name_service, login_user_service
from status import Status

app = FastAPI()

class ImageData(BaseModel):
    image_base64: str

class User(BaseModel):
    nome: str
    email: str
    senha: str

class Character(BaseModel):
    idPaciente: int
    nome: str

status = Status()

@app.post("/process-image")
async def process_image(data: ImageData):
    try:
        classification, status_data = process_image_service(data.image_base64, status)
        return {"classification": classification, "status": status_data}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.post("/register")
async def register_user(user: User):
    try:
        result = register_user_service(user)
        return result
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.post("/add-character-name")
async def add_character_name(character: Character):
    try:
        print(f"Recebido idPaciente: {character.idPaciente}, nome: {character.nome}") 
        result = add_character_name_service(character)
        return result
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

class LoginData(BaseModel):
    email: str
    senha: str

@app.post("/login")
async def login_user(user: LoginData):
    try:
        result = login_user_service(user.email, user.senha)
        return result
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
