//Variáveis utilizadas:
let salarioBruto= 2000.00;
let adicionalNoturno= 500.00;
let horaExtra= 100.00;
let descontos= 200.00;
// exercício 1:
console.log("\nExercício 1: ");


let somaSalario = (num1,num2,num3) => {return num1 + num2 + (num3*5);};
let salarioLiquido = (num1,num2, num3,num4) => {return somaSalario(num1,num2,num3) - num4;};

console.log(`Salário Líquido: ${salarioLiquido(salarioBruto,adicionalNoturno,horaExtra,descontos).toFixed(2)}\n`); // .toFixed() serve para ajustar a formatação de exibição.

console.log("=====================================================================================================");


// exercício 2:
console.log("\nExercício 2: ");

let diferencaProduto = (n1,n2,n3,n4) => {return ((n1*n2)-(n3*n4));};

console.log(`Diferença: ${diferencaProduto(5.0,6.0,7.0,8.0).toFixed(1)}`);
console.log(`Diferença: ${diferencaProduto(5.0,6.0,-7.0,8.0).toFixed(1)}`);