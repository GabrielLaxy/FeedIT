import base64
import requests

def encode_image_to_base64(image_path):
    with open(image_path, "rb") as image_file:
        encoded_string = base64.b64encode(image_file.read()).decode('utf-8')
    return encoded_string

url = 'https://e3fa-177-73-181-130.ngrok-free.app/process-image' 
image_base64 = encode_image_to_base64('baixados.png')

# Corrigir padding da string base64, se necessário
image_base64 += "=" * ((4 - len(image_base64) % 4) % 4)

data = {
    "image_base64": image_base64
}
headers = {
    "Content-Type": "application/json"
}

response = requests.post(url, json=data, headers=headers)

if response.ok:
    print("Funcionou")
else:
    print("Não Funcionou")
    print("Resposta:", response.text)
