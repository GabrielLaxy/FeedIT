import threading
import time

class Status:
    def __init__(self):
        self.dados = {
            'energia': 0,
            'forca': 0,
            'felicidade': 0,
            'alimentacao': 0,
            'xp': 0,
        }
        self.decaimento_ativo = True
        self.iniciar_decaimento()

    def _verificar_limites(self):
        for key in self.dados:
            if self.dados[key] > 100:
                self.dados[key] = 100
            elif self.dados[key] < 0:
                self.dados[key] = 0

    def aumentar_status(self):
        for chave in self.dados:
            if chave != 'xp':
                self.dados[chave] += 1
        self._verificar_limites()

    def _print_dados(self):
        print(self.dados)

    def adicionar_carboidratos(self):
        self.dados['energia'] += 3
        self.dados['alimentacao'] += 2
        self.dados['felicidade'] += 1
        self.dados['xp'] += 6
        self._verificar_limites()

    def adicionar_frutas(self):
        self.dados['energia'] += 2
        self.dados['alimentacao'] += 2
        self.dados['felicidade'] += 1
        self.dados['xp'] += 7
        self._verificar_limites()

    def adicionar_legumes(self):
        self.dados['alimentacao'] += 3
        self.dados['felicidade'] += 1
        self.dados['xp'] += 8
        self._verificar_limites()

    def adicionar_leite_e_derivados(self):
        self.dados['energia'] += 1
        self.dados['alimentacao'] += 2
        self.dados['felicidade'] += 1
        self.dados['forca'] += 2
        self.dados['xp'] += 7
        self._verificar_limites()

    def adicionar_carnes(self):
        self.dados['alimentacao'] += 2
        self.dados['felicidade'] += 1
        self.dados['forca'] += 3
        self.dados['xp'] += 9
        self._verificar_limites()

    def adicionar_leguminosas(self):
        self.dados['alimentacao'] += 2
        self.dados['felicidade'] += 1
        self.dados['forca'] += 3
        self.dados['xp'] += 8
        self._verificar_limites()

    def adicionar_oleaginosas(self):
        self.dados['alimentacao'] += 2
        self.dados['felicidade'] += 1
        self.dados['forca'] += 3
        self.dados['xp'] += 7
        self._verificar_limites()

    def adicionar_doces(self):
        self.dados['energia'] += 2
        self.dados['alimentacao'] -= 2
        self.dados['felicidade'] += 2
        self.dados['xp'] += 4
        self._verificar_limites()

    def adicionar_salgados(self):
        self.dados['energia'] += 1
        self.dados['alimentacao'] -= 1
        self.dados['felicidade'] += 2
        self.dados['xp'] += 3
        self._verificar_limites()

    def adicionar_embutidos(self):
        self.dados['energia'] += 1
        self.dados['forca'] += 1
        self.dados['xp'] += 5
        self._verificar_limites()

    def decair_status(self):
        while self.decaimento_ativo:
            time.sleep(3600)
            for chave in self.dados:
                if chave != 'xp':
                    decaimento = self.dados[chave] * 0.05
                    self.dados[chave] = max(0, self.dados[chave] - decaimento)
            self._verificar_limites()
            print(self.dados)

    def iniciar_decaimento(self):
        t = threading.Thread(target=self.decair_status)
        t.start()

    def parar_decaimento(self):
        self.decaimento_ativo = False
