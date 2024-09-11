function contador(palavra, pespecifico){
    let contagem = 0;

    for(let i = 0; i < palavra.length;i++){
        if(palavra[i]===pespecifico){
            contagem ++;
        }
    }
    return contagem;
} 
    let quantidade = parseInt(prompt("Quantas palavras deseja informar?"));
    let palavra = [];

    for (let i = 0; i < quantidade; i++) {
        let letra = prompt("Insira a palavra:"+(i+1));
        palavra.push(letra);
    }

    let pespecifico = prompt("Informe a palavra específica para contagem:");

    let contagem = contador(palavra, pespecifico);

    alert("A palavra "+pespecifico+" aparece "+contagem+" vezes no vetor.");