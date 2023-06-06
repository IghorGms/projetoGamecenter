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
            jogo = 'Rainbow Six Siege '
            valor = '59,99';
            break;
        case 'Deluxe Edition':
            jogo = 'Rainbow Six Siege  '
            valor = '79,99';
            break;
        case 'Operator Edition':
            jogo = 'Rainbow Six Siege  '
            valor = '99,99';
            break;
        case 'Ultimate Edition':
            jogo = 'Rainbow Six Siege  '
            valor = '110,00'
            break;
        case 'Bundle':
            jogo = 'Rainbow Six Siege '
            valor ='150,99'
            break;          
        default:
            valor = '0';
            break;
    }
    alert (jogo +" " + versao +", otima escolha")
    window.location.href = "pagina_pagamento.html?versao="+ jogo +" " + versao + "&valor=" + valor;
}


