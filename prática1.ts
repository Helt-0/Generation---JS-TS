
// exercício 3:
interface IVeiculos{

    tipo: string,
    marca: string,
    ano: number

};

let veiculo1: IVeiculos = {

    tipo: "Avião",
    marca: "Boing",
    ano: 2024
};

let veiculo2: IVeiculos = {

    tipo: "Carro",
    marca: "Fiat",
    ano: 2024
};


console.log(`\nVeículo 1: \nO primeiro veículo é um ${veiculo1.tipo} \nA marca do veículo é ${veiculo1.marca}` + 
    `\nO ano do veículo é ${veiculo1.ano}\n`)

console.log("=====================================================================================================");

console.log(`\nVeículo 2: \nO segundo veículo é um ${veiculo2.tipo} \nA marca do veículo é ${veiculo2.marca}` + 
    `\nO ano do veículo é ${veiculo2.ano}\n`)