function validaCaracteres(valor) { // Valida os campos Nome e Cidade
    var caracteresNaoPermitidos = /[^a-zA-ZÁÁáàãâÉÊéêÍíÓÓóõôÚúç\s]/; // Qualquer caractere diferente de letras e espaço (\s)
    if (valor != "" && (caracteresNaoPermitidos.test(valor))) {
        alert("Esse campo aceita apenas letras e espaços.");
    }
}

function validaEspaco(valor) { // Valida o campo Nome
    var espaco = /[\s]/;
    if (valor != "" && !espaco.test(valor)) {
        alert("Esse campo deve conter pelo menos um espaço.");
    }
}

function validaCelulares(valor) { // Valida o campo Celular
    var caracteresNaoPermitidos = /[^0-9-\s]/; // Qualquer caractere diferente de números, traço ou espaço
    if (caracteresNaoPermitidos.test(valor)) {
        alert("Este campo aceita apenas números, espaços e traços.");
    }
}

function validaEmail() { // Valida o campo E-mail
    var arroba = /[@]/;
    var ponto = /[.]/;
    if (document.reserva.mail.value != "" && (!arroba.test(document.reserva.mail.value) || !ponto.test(document.reserva.mail.value))) {
        alert("O e-mail deve ter '@' e pelo menos um ponto.");
    }
}

function atualizaCriancasAte5Anos() { // Atualiza o campo "Até 5 anos"
    document.reserva.criancas_menores.max = document.reserva.criancas.value;
    if (document.reserva.criancas_menores.value > document.reserva.criancas.value) {
        document.reserva.criancas_menores.value = document.reserva.criancas.value;
    }
}

function calculaDiarias() { // Valida os campos Chegada e Partida e calcula a quantidade de diárias
    var chegada = document.reserva.chegada.value;
    var dia_chegada = chegada.substring(8);
    var mes_chegada = chegada.substring(5, 7);
    var ano_chegada = chegada.substring(0, 4);

    var partida = document.reserva.partida.value;
    var dia_partida = partida.substring(8);
    var mes_partida = partida.substring(5, 7);
    var ano_partida = partida.substring(0, 4);

    var data_chegada = new Date(ano_chegada, mes_chegada - 1, dia_chegada); // Os meses vão de 0 a 11
    var data_partida = new Date(ano_partida, mes_partida - 1, dia_partida);

    var miliseg = data_partida.getTime() - data_chegada.getTime();
    var diarias = miliseg / (24 * 60 * 60 * 1000);

    document.getElementById("resultado").innerHTML = "";

    if (diarias < 1) {
        document.reserva.partida.style.backgroundColor = "yellow";
        alert("A data de partida deve ser maior que a data de chegada.");
    } else {
        document.getElementById("resultado").innerHTML = "Sua reserva tem " + diarias + " diária(s).";
    }
}

function reinicializaCampoERemoveDestaque() { // Reinicializa o valor do campo Partida e remove o fundo amarelo
    document.reserva.partida.value = null;
    document.reserva.partida.style.backgroundColor = "white";
}