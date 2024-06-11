import mysql.connector
from mysql.connector import errorcode
from pydantic import BaseModel
import os
from fastapi import HTTPException

class User(BaseModel):
    nome: str
    email: str
    senha: str

config = {
    'user': os.getenv("DB_USER"),
    'password': os.getenv("DB_PASSWORD"),
    'host': os.getenv("DB_HOST"),
    'database': os.getenv("DB_NAME"),
    'raise_on_warnings': True
}

def get_db_connection():
    try:
        cnx = mysql.connector.connect(**config)
        return cnx
    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            raise HTTPException(status_code=400, detail="Erro de acesso ao banco de dados")
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            raise HTTPException(status_code=400, detail="Banco de dados não existe")
        else:
            raise HTTPException(status_code=400, detail=str(err))

def register_user_service(user: User):
    try:
        cnx = get_db_connection()
        cursor = cnx.cursor()

        add_paciente = ("INSERT INTO Paciente (nome, email, senha) VALUES (%s, %s, %s)")
        paciente_data = (user.nome, user.email, user.senha)

        cursor.execute(add_paciente, paciente_data)
        cnx.commit()

        cursor.close()
        cnx.close()

        return {"success": True, "message": "Usuário registrado com sucesso"}

    except mysql.connector.Error as err:
        raise HTTPException(status_code=400, detail=str(err))
