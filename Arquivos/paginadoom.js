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
            valor = '149,00';
            break;
        case 'deluxe':
            valor = '119,00';
            break;
        case 'gold':
            valor = '79,00';
            break;
        case 'seasonpass':
            valor = '249,00'
            break;
        case 'definitive':
            valor = '440,00' 
            break;         
        default:
            valor = '0';
            break;
    }

    window.location.href = "pagina_pagamento.html?versao=" + versao + "&valor=" + valor;
}


