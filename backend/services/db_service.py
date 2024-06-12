import mysql.connector
from mysql.connector import errorcode
from pydantic import BaseModel
import os
from fastapi import HTTPException

class User(BaseModel):
    nome: str
    email: str
    senha: str

class Character(BaseModel):
    idPaciente: int
    nome: str

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

        id_paciente = cursor.lastrowid

        cursor.close()
        cnx.close()

        return {"success": True, "message": "Usuário registrado com sucesso", "idPaciente": id_paciente}

    except mysql.connector.Error as err:
        raise HTTPException(status_code=400, detail=str(err))

def add_character_name_service(character: Character):
    try:
        cnx = get_db_connection()
        cursor = cnx.cursor()

        add_personagem = ("INSERT INTO Personagem (idPaciente, Nome) VALUES (%s, %s)")
        personagem_data = (character.idPaciente, character.nome)

        cursor.execute(add_personagem, personagem_data)
        cnx.commit()
        

        cursor.close()
        cnx.close()

        return {"success": True, "message": "Nome do personagem adicionado com sucesso", "nome" : character.nome}

    except mysql.connector.Error as err:
        raise HTTPException(status_code=400, detail=str(err))

paciente_ids = []

def login_user_service(email: str, senha: str):
    try:
        cnx = get_db_connection()
        cursor = cnx.cursor()

        query = ("SELECT idPaciente, nome FROM Paciente WHERE email = %s AND senha = %s")
        cursor.execute(query, (email, senha))

        user = cursor.fetchone()
        cursor.close()
        cnx.close()

        if user:
            return {"success": True, "message": "Login bem-sucedido", "user": {"id": user[0], "nome": user[1]}}
        else:
            raise HTTPException(status_code=400, detail="Email ou senha incorretos")

    except mysql.connector.Error as err:
        raise HTTPException(status_code=400, detail=str(err))

