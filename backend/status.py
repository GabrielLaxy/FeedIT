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

    def adiciona_carboidratos(self, energia, alimentação, felicidade):
        self.dados['energia'] += 3
        self.dados['alimentação'] += 2
        self.dados['felicidade'] += 1

    def adiciona_frutas(self, energia, alimentação, felicidade):
        self.dados['energia'] += 2
        self.dados['alimentação'] += 2
        self.dados['felicidade'] += 1

    def adiciona_legumes(self, alimentação, felicidade):
        self.dados['alimentação'] += 3
        self.dados['felicidade'] += 1

    def adiciona_leite_e_derivados(self, energia, alimentação, felicidade, força):
        self.dados['energia'] += 1
        self.dados['alimentação'] += 2
        self.dados['felicidade'] += 1
        self.dados['força'] += 2

    def adiciona_carnes(self, alimentação, felicidade, força):
        self.dados['alimentação'] += 2
        self.dados['felicidade'] += 1
        self.dados['força'] += 3

    def adiciona_leguminosas(self, alimentação, felicidade, força):
        self.dados['alimentação'] += 2
        self.dados['felicidade'] += 1
        self.dados['força'] += 3

    def adiciona_oleaginosas(self, alimentação, felicidade, força):
        self.dados['alimentação'] += 2
        self.dados['felicidade'] += 1
        self.dados['força'] += 3

    def adiciona_doces(self, energia, alimentação, felicidade):
        self.dados['energia'] += 2
        self.dados['alimentação'] -= 2
        self.dados['felicidade'] += 2

    def adiciona_salgados(self, energia, alimentação, felicidade):
        self.dados['energia'] += 1
        self.dados['alimentação'] -= 1
        self.dados['felicidade'] += 2
        
    def adiciona_bebidas(self, energia, alimentação):
        self.dados['energia'] += 1
        self.dados['alimentação'] -= 3

    def adiciona_suco_natural(self, energia, alimentação, felicidade):
        self.dados['energia'] += 2
        self.dados['alimentação'] += 1
        self.dados['felicidade'] += 1

    def adiciona_embutidos(self, energia, força):
        self.dados['energia'] += 1
        self.dados['força'] += 1
