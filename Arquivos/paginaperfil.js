function validarLogin(){
    var caixas = document.getElementsByClassName("input-padrao");

  for (var i = 0; i < caixas.length; i++) {
    if (caixas[i].value == "") {
      alert("Por favor, preencha todas as caixas.");
      return false;
    }
}




}