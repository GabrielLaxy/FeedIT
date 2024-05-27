import threading
import time

class Status:
    def __init__(self):
        self.dados = {
            'energia': 50,
            'força': 50,
            'felicidade': 50,
            'alimentação': 50,
            'xp': 0,
        }
        self.decaimento_ativo = True
        self.iniciar_decaimento()

        #contar nivel

    def aumentar_status(self):
        for chave in self.dados:
            if chave != 'xp':
                self.dados[chave] += 1

    def adicionar_carboidratos(self):
        self.dados['energia'] += 3
        self.dados['alimentação'] += 2
        self.dados['felicidade'] += 1
        self.dados['xp'] += 6

    def adicionar_frutas(self):
        self.dados['energia'] += 2
        self.dados['alimentação'] += 2
        self.dados['felicidade'] += 1
        self.dados['xp'] += 7

    def adicionar_legumes(self):
        self.dados['alimentação'] += 3
        self.dados['felicidade'] += 1
        self.dados['xp'] += 8

    def adicionar_leite_e_derivados(self):
        self.dados['energia'] += 1
        self.dados['alimentação'] += 2
        self.dados['felicidade'] += 1
        self.dados['força'] += 2
        self.dados['xp'] += 7

    def adicionar_carnes(self):
        self.dados['alimentação'] += 2
        self.dados['felicidade'] += 1
        self.dados['força'] += 3
        self.dados['xp'] += 9

    def adicionar_leguminosas(self):
        self.dados['alimentação'] += 2
        self.dados['felicidade'] += 1
        self.dados['força'] += 3
        self.dados['xp'] += 8

    def adicionar_oleaginosas(self):
        self.dados['alimentação'] += 2
        self.dados['felicidade'] += 1
        self.dados['força'] += 3
        self.dados['xp'] += 7

    def adicionar_doces(self):
        self.dados['energia'] += 2
        self.dados['alimentação'] -= 2
        self.dados['felicidade'] += 2
        self.dados['xp'] += 4

    def adicionar_salgados(self):
        self.dados['energia'] += 1
        self.dados['alimentação'] -= 1
        self.dados['felicidade'] += 2
        self.dados['xp'] += 3

    def adicionar_embutidos(self):
        self.dados['energia'] += 1
        self.dados['força'] += 1
        self.dados['xp'] += 5

    def decair_status(self):
        while self.decaimento_ativo:
            time.sleep(60) 
            for chave in self.dados:
                if chave != 'xp':
                    decaimento = self.dados[chave] * 0.05  
                    self.dados[chave] = max(0, self.dados[chave] - decaimento)
            print(self.dados) 

    def iniciar_decaimento(self):
        t = threading.Thread(target=self.decair_status)
        t.start()

    def parar_decaimento(self):
        self.decaimento_ativo = False
