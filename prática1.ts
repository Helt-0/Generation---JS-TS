
// exercício 3:
interface IVeiculos{

    tipo: string,
    marca: string,
    ano: number

};

let veiculo1: IVeiculos = {

    tipo: "Avião",
    marca: "Boing",
    ano: 2004
};

let veiculo2: IVeiculos = {

    tipo: "Carro",
    marca: "Fiat",
    ano: 2024
};

console.log(" ");
console.log("Veículo 1: ");
console.log(`O veículo 1 é um ${veiculo1.tipo}`);
console.log(`A marca do veículo é ${veiculo1.marca}`);
console.log(`O ano do veículo é ${veiculo1.ano}`);
console.log(" ");

console.log("=====================================================================================================");

console.log(" ");
console.log("Veículo 2: ")
console.log(`O veículo 2 é um ${veiculo2.tipo}`);
console.log(`A marca do veículo é ${veiculo2.marca}`);
console.log(`O ano do veículo é ${veiculo2.ano}`);
console.log(" ");
