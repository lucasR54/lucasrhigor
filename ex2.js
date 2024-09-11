let idade=parseFloat(prompt("Digite a sua idade:"));

if(idade<=0){
    alert("Você não existe.");
} else if(idade<=12){
    alert("Você é criança.");
} else if(idade<=17){
    alert("Você é adolescente.");
} else if(idade<=64){
    alert("Você é adulto.");
} else if(idade>=65){
    alert("Você é idoso.");
} else if(idade!==0){
    alert("Coloque apenas números");
}