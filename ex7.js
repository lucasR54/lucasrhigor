let number=Array();
for(let x=0;x<5;x++){
    number[x]= prompt("digite um número inteiro");
 
}
number.sort(function (a,b){
    return a-b;
 
})
alert("o maior número é "+number[4]+" e o menor número é "+number[0]);