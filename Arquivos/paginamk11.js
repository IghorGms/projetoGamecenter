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
            jogo="Motal Kombat 11"
            valor = '229,99';
            break;
        case 'Ultimate':
            jogo="Motal Kombat 11"
            valor = '279,99';
            break;
        case 'Legendary Edition':
            jogo="Motal Kombat 11"
            valor = '479,00';
            break;
        case 'and X Bundle':
            jogo="Motal Kombat 11"
            valor = '319,98'
            break;
        case 'Legendary Pack':
            jogo="Motal Kombat 11"
            valor = '670,00' 
            break;         
        default:
            valor = '0';
            break;
    }

    alert (jogo +" " + versao +", otima escolha")
    window.location.href = "pagina_pagamento.html?versao="+ jogo +" " + versao + "&valor=" + valor;
   
}


