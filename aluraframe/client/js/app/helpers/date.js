class dateHelper {

  textoParaData(texto) {
    return new Date (texto);
  }

  dataParaTexto(data){
    data.getDate()
      + '/' + (data.getMonth() + 1) +
      + '/' + data.getFullYear();
  }

}