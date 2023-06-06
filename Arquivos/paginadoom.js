function mostrarInfo(versao) {
    var infoVersao = document.getElementById("info-" + versao);

    if (infoVersao.style.display === "block") {
        infoVersao.style.display = "none";
    } else {
        var infos = document.getElementsByClassName("info-versao");
        for (var i = 0; i < infos.length; i++) {
            infos[i].style.display = "none";
        }

        infoVersao.style.display = "block";
    }
}

function comprar(versao) {
    var valor;
    var jogo;
    switch (versao) {
        case 'Standard Edition':
            jogo ='Doom'
            valor = '149,00';
            break;
        case 'Eternal Year One Pass':
            jogo ='Doom'
            valor = '119,00';
            break;
        case 'Eternal The Ancient Gods':
            jogo ='Doom'
            valor = '79,00';
            break;
        case 'Eternal Year One Pass Edition':
            jogo ='Doom'
            valor = '249,00'
            break;
        case 'Bundle Edition':
            jogo ='Doom'
            valor = '440,00' 
            break;         
        default:
            valor = '0';
            break;
    }

    alert (jogo +" " + versao +", otima escolha")

    window.location.href = "pagina_pagamento.html?versao="+ jogo +" " + versao + "&valor=" + valor;
   
}


