from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from services.image_service import process_image_service
from services.db_service import register_user_service
from status import Status

app = FastAPI()

class ImageData(BaseModel):
    image_base64: str

class User(BaseModel):
    nome: str
    email: str
    senha: str

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
