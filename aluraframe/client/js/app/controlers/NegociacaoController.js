//interacao com o usuario - controller
class NegociacaoController {

	constructor(){
			let $ = document.querySelector.bind(document);

			this._inputData = $('#data');
			this._inputQuantidade = $('#quantidade');
			this._inputValor = $('#valor');
	}

	adiciona (event){
      event.preventDefault();
    
      let data = new dateHelper().textoParaData(this._inputData.value);
      console.log(data);
      

			let negociacao = new Negociacao(
				data,
				this._inputQuantidade.value,
				this._inputValor.value
      )

      let diaMesAno = negociacao.data.getDate() + 
                    '/' + (negociacao.data.getMonth() + 1) +  
                    '/' + negociacao.data.getFullYear();

      
      
  };	
}