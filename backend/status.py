class Status:
    def __init__(self):
        self.dados = {
            'energia': 0,
            'força': 0,
            'felicidade': 0,
            'alimentação': 0,
            'nivel': 0
        }
    
    def aumentar_status(self):
        for chave in self.dados:
            self.dados[chave] += 1
