class Status {
	constructor(data) {
		this.energia = data.energia || 0;
		this.forca = data.forca || 0;
		this.felicidade = data.felicidade || 0;
		this.alimentacao = data.alimentacao || 0;
		this.xp = data.xp || 0;
		this.classificacao = data.classificacao || '';
		this.nome = data.nome || '';
	}

	update(data) {
		this.energia = data.energia;
		this.forca = data.forca;
		this.felicidade = data.felicidade;
		this.alimentacao = data.alimentacao;
		this.xp = data.xp;
		this.classificacao = data.classificacao || this.classificacao;
		this.nome = data.nome || this.nome;
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
}

export default Status;
