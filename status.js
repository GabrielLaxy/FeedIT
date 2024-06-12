class Status {
	constructor(data) {
		this.energia = data.energia || 0;
		this.forca = data.forca || 0;
		this.felicidade = data.felicidade || 0;
		this.alimentacao = data.alimentacao || 0;
		this.xp = data.xp || 0;
		this.classificacao = data.classificacao || '';
		this.nome = data.nome || '';
		this.id = data.id || 0;
	}

	update(data) {
		this.energia = data.energia;
		this.forca = data.forca;
		this.felicidade = data.felicidade;
		this.alimentacao = data.alimentacao;
		this.xp = data.xp;
		this.classificacao = data.classificacao || this.classificacao;
		this.nome = data.nome || this.nome;
		this.id = data.id = this.id;
	}

	traduzirClassificacao() {
		const traducao = {
			Carbohydrates: 'Carboidratos',
			Fruits: 'Frutas',
			Vegetables: 'Vegetais',
			Dairy: 'Laticínios',
			Proteins: 'Proteínas',
			Nuts: 'Oleaginosas',
			Sweets: 'Doces',
			Sausages: 'Embutidos',
			candy: 'Doces',
			nfound: 'Não encontrado',
		};
		return traducao[this.classificacao] || this.classificacao;
	}
	
	imprimirAtributos() {
		console.log(`Energia: ${this.energia}`);
		console.log(`Força: ${this.forca}`);
		console.log(`Felicidade: ${this.felicidade}`);
		console.log(`Alimentação: ${this.alimentacao}`);
		console.log(`XP: ${this.xp}`);
		console.log(`Classificação: ${this.traduzirClassificacao()}`);
		console.log(`Nome: ${this.nome}`);
		console.log(`ID: ${this.id}`);
	}
}

export default Status;
