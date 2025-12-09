const { somarDoisNumeros } = require('../src/calculadora');
const { expect } = require('chai');

//teste de funçoes. Em resumo describe () (mocha) tem dois parametros onde um leva a descrição e outro a 
// funçao que definira quantos testes havera para essa função. Dentro da function() ultilizamos 
// o it() (mocha) que o primeiro parametro descreverá oque o teste vai fazer e a funçao anonima
describe('Testes da função de soma', function () { 
    it('Soma de dois numeros positivos', function () {
        const somaDeDoisNumeros = somarDoisNumeros(5,3)

        //agora ultuliamos o chai para fazer a comparação do resultado da funçao
        expect(somaDeDoisNumeros).to.equal(8)
    });

    it('Soma de um numero positivo e um negativo', function () {
        const somaDeDoisNumeros = somarDoisNumeros(5,-3)

        expect(somaDeDoisNumeros).to.equal(2)
    });
});


