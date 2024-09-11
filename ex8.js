function encontrarmedia(numero){
    let soma=0;
    for (let i=0; i<numero.length; i++){
        soma += numero [i];
    }
    return soma/numero.length;
}
function main(){
    let quant = parseInt(prompt("Quantos números deseja informar?"));
    let numero = [];
    
    for (let i = 0; i < quant; i++){
    let num = parseFloat (prompt('Insira um número'+(i+1)));
    numero.push (num);
    }
    let medianum = encontrarmedia(numero);
    alert("A média é: "+medianum);
} main()