// let entrada = prompt("Falaa ai");
// window.alert("ce falou isso cara:"+entrada);
// console.log("falando escondido agr se liga:"+entrada)

for(let i=0;i<100;i++){
    if((i%2)!=0){
        console.log(i+"\n");

    }
}

console.log("O outro agr")

for(let i=0;i<500;i++){
    if((i%5)==0){
        console.log(i+"\n");

    }
}


let numero = prompt("bota o numero ai: ")

while(numero>=0){
    console.log(numero+"\n");
    numero--;
}

let numero2 = prompt("faz fatorial desse trem:")
let aux = 1
while(numero2>0){
    
    aux = aux*numero2;
    numero2--;

}
console.log("aaa:"+aux)

let totalSalario = 0;
let quantidadePessoas = 0;
let maiorIdade = -Infinity;
let menorIdade = Infinity;
let mulheresComSalarioAte5000 = 0;

while (true) {
    let idade = parseInt(prompt("Digite a idade (ou uma idade negativa para encerrar):"));

    if (idade < 0) {
        break; 
    }

    let sexo = prompt("Digite o sexo (M/F):").toUpperCase();
    let salario = parseFloat(prompt("Digite o salário:"));

    totalSalario += salario;
    quantidadePessoas++;

    if (idade > maiorIdade) {
        maiorIdade = idade;
    }
    if (idade < menorIdade) {
        menorIdade = idade;
    }

    if (sexo === 'F' && salario <= 5000) {
        mulheresComSalarioAte5000++;
    }
}

if (quantidadePessoas > 0) {
    let mediaSalario = totalSalario / quantidadePessoas;

    console.log("Média de salário do grupo: R$", mediaSalario.toFixed(2));
    console.log("Maior idade do grupo:", maiorIdade);
    console.log("Menor idade do grupo:", menorIdade);
    console.log("Quantidade de mulheres com salário até R$5000,00:", mulheresComSalarioAte5000);
} else {
    console.log("Nenhuma pessoa foi cadastrada.");
}