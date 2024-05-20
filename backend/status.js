class Status {
    constructor() {
        this.dados = {
            'energia': 0,
            'força': 0,
            'felicidade': 0,
            'alimentação': 0,
            'xp': 0
        };
    };

    aumentar_status() {
        for (let chave in this.dados) {
            this.dados[chave] += 1;
        }
    };

    adiciona_carboidratos() {
        this.dados['energia'] += 3;
        this.dados['alimentação'] += 2;
        this.dados['felicidade'] += 1;
        this.xp['xp'] += 6;
    };

    adiciona_frutas() {
        this.dados['energia'] += 2;
        this.dados['alimentação'] += 2;
        this.dados['felicidade'] += 1;
        this.xp['xp'] += 7;
    };

    adiciona_legumes() {
        this.dados['alimentação'] += 3;
        this.dados['felicidade'] += 1;
        this.xp['xp'] += 8;
    };

    adiciona_leite_e_derivados() {
        this.dados['energia'] += 1;
        this.dados['alimentação'] += 2;
        this.dados['felicidade'] += 1;
        this.dados['força'] += 2;
        this.xp['xp'] += 7;
    };

    adiciona_carnes() {
        this.dados['alimentação'] += 2;
        this.dados['felicidade'] += 1;
        this.dados['força'] += 3;
        this.xp['xp'] += 9;
    };

    adiciona_leguminosas() {
        this.dados['alimentação'] += 2;
        this.dados['felicidade'] += 1;
        this.dados['força'] += 3;
        this.xp['xp'] += 8;
    };

    adiciona_oleaginosas() {
        this.dados['alimentação'] += 2;
        this.dados['felicidade'] += 1;
        this.dados['força'] += 3;
        this.xp['xp'] += 7;
    };

    adiciona_doces() {
        this.dados['energia'] += 2;
        this.dados['alimentação'] -= 2;
        this.dados['felicidade'] += 2;
        this.xp['xp'] += 4;
    };

    adiciona_salgados() {
        this.dados['energia'] += 1;
        this.dados['alimentação'] -= 1;
        this.dados['felicidade'] += 2;
        this.xp['xp'] += 3;
    };

    adiciona_embutidos() {
        this.dados['energia'] += 1;
        this.dados['força'] += 1;
        this.xp['xp'] += 5;
    };
};