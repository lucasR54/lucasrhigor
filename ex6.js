let ramdom = Math.floor(Math.random() * 10) + 1;
let nume

do{
    nume = parseInt(prompt("Advinhe o número de 1 a 10:"))

} while(nume !== ramdom);

alert("Você acertou! O número era: "+ramdom)