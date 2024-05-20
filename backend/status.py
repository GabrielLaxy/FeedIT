class Status:
    def __init__(self):
        self.dados = {
            'energia': 0,
            'força': 0,
            'felicidade': 0,
            'alimentação': 0,
            'xp': 0,
        }
    
    def aumentar_status(self):
        for chave in self.dados:
            self.dados[chave] += 1

    def adiciona_carboidratos(self, energia, alimentação, felicidade,xp):
        self.dados['energia'] += 3
        self.dados['alimentação'] += 2
        self.dados['felicidade'] += 1
        self.dados['xp'] += 6

    def adiciona_frutas(self, energia, alimentação, felicidade,xp):
        self.dados['energia'] += 2
        self.dados['alimentação'] += 2
        self.dados['felicidade'] += 1
        self.dados['xp'] += 7

    def adiciona_legumes(self, alimentação, felicidade,xp):
        self.dados['alimentação'] += 3
        self.dados['felicidade'] += 1
        self.dados['xp'] += 8

    def adiciona_leite_e_derivados(self, energia, alimentação, felicidade, força,xp):
        self.dados['energia'] += 1
        self.dados['alimentação'] += 2
        self.dados['felicidade'] += 1
        self.dados['força'] += 2
        self.dados['xp'] += 7

    def adiciona_carnes(self, alimentação, felicidade, força,xp):
        self.dados['alimentação'] += 2
        self.dados['felicidade'] += 1
        self.dados['força'] += 3,
        self.dados['xp'] += 9

    def adiciona_leguminosas(self, alimentação, felicidade, força,xp):
        self.dados['alimentação'] += 2
        self.dados['felicidade'] += 1
        self.dados['força'] += 3
        self.dados['xp'] += 8

    def adiciona_oleaginosas(self, alimentação, felicidade, força,xp):
        self.dados['alimentação'] += 2
        self.dados['felicidade'] += 1
        self.dados['força'] += 3
        self.dados['xp'] += 7

    def adiciona_doces(self, energia, alimentação, felicidade,xp):
        self.dados['energia'] += 2
        self.dados['alimentação'] -= 2
        self.dados['felicidade'] += 2
        self.dados['xp'] += 4

    def adiciona_salgados(self, energia, alimentação, felicidade,xp):
        self.dados['energia'] += 1
        self.dados['alimentação'] -= 1
        self.dados['felicidade'] += 2
        self.dados['xp'] += 3
        

    def adiciona_embutidos(self, energia, força,xp):
        self.dados['energia'] += 1
        self.dados['força'] += 1
        self.dados['xp'] += 5
