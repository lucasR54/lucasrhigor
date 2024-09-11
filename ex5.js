function somarNumeros()     {
    let soma = 0;
    let numero;

    do {
        numero = parseInt(prompt("Digite um número inteiro (ou 0 para sair):"), 10);

        if (!isNaN(numero)) {
            if (numero !== 0) {
                soma += numero;
            }
        } else {
            alert("Por favor, insira um número inteiro válido.");
        }
    } while (numero !== 0);


    alert('A soma de todos os números inseridos é:'+soma);
}


somarNumeros();
