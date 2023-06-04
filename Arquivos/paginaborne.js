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
    switch (versao) {
        case 'standard':
            valor = '59,99';
            break;
        case 'deluxe':
            valor = '79,99';
            break;
        case 'gold':
            valor = '99,99';
            break;
        case 'seasonpass':
            valor = '110,00'
            break;
        case 'definitive':
            valor = '240,00' 
            break;         
        default:
            valor = '0';
            break;
    }

    window.location.href = "pagina_pagamento.html?versao=" + versao + "&valor=" + valor;
}


