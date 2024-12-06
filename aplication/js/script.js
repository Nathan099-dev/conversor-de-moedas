function converterMoeda(){
    const entradaValor = document.querySelector('#valor_entrada_usuario');
    const selecionarMoeda = document.querySelector('option');
    const valorConvertido = document.querySelector('#resultado_valor_convertido');

    const valorDolar = 6.01;
    const valorEuro = 6.37;

    if (selecionarMoeda == 'Dolar') {
        let calculoDolar = entradaValor * valorDolar;
        valorConvertido.innerHTML = `O valor total em dolar é de ${calculoDolar}`;

    }else if (selecionarMoeda == 'Euro') {
        let calculoEuro = entradaValor * valorEuro;
        valorConvertido.innerHTML = `O valor total em euro é de ${calculoEuro}`;
    }
}