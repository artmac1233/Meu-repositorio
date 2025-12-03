function somarDoisNumeros(valor1, valor2) {
    return valor1 + valor2;
}

function calcularMediaDeDoisNumeros(valor1, valor2) { 
    const resultadoSomaDeDoisValores = somarDoisNumeros(valor1, valor2); 
    const resultadoDaMediaDeDoisValores = resultadoSomaDeDoisValores / 2; 
    return resultadoDaMediaDeDoisValores; 
}

module.exports = {
    somarDoisNumeros
}