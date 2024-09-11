function filtro(vespecifico, num){
    let newvetor = [];
    for (let i = 0; i < num.length;i++){
        if(num[i] > vespecifico){
            newvetor.push (num[i]);
        }
    }
    return newvetor;
}
    let quant = parseInt(prompt("Quantos números deseja informar?"));
    let num = [];

    for (let i = 0; i < quant;i++){
        let nume = parseFloat(prompt("Insira um número "+(i+1)));
        num.push(nume);
    }

    let vespecifico = parseFloat(prompt("Informe o valor específico para o vetor "));
    let numfiltro = filtro(vespecifico, num);
    alert("Os número maiores que "+vespecifico+" são: "+numfiltro.join(", "))