function validarRegistro() {

    var dataNascimento = document.getElementById("idade").value;
    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();
    var mesAtual = dataAtual.getMonth() + 1;
    var diaAtual = dataAtual.getDate();
  
    var anoNascimento = parseInt(dataNascimento.split("-")[0]);
    var mesNascimento = parseInt(dataNascimento.split("-")[1]);
    var diaNascimento = parseInt(dataNascimento.split("-")[2]);
  
    var idade = anoAtual - anoNascimento;
  
    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--;
    }
  
    if(idade<18) {
        alert("Você é menor de idade.");
        return false
      }
    if(idade==""){
        return 
    }
  
    var caixas = document.getElementsByClassName("input-reg");
  
    for (var i = 0; i < caixas.length; i++) {
      if (caixas[i].value == "") {
        alert("Por favor, preencha todas as caixas.");
        return false;
      }
  }
  if(caixas!= ""){
  
    location.reload(); 84 
    alert("Voce foi resgistrado!")
    window.location.href="index.html"
  
  }
  
  }