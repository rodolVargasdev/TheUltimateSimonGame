function bolsasParaDulces(Ndulces, Kbolsillos, Mdulces)
{
    let totalDulcesBolsillo = Kbolsillos * Mdulces;
    let cantidadBolsas = Ndulces/totalDulcesBolsillo;
    return Math.ceil(cantidadBolsas);
}

console.log(bolsasParaDulces(6, 2, 3));
console.log(bolsasParaDulces(3, 1, 2));
console.log(bolsasParaDulces(8, 4, 1));
console.log(bolsasParaDulces(25, 4, 2));