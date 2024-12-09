function converterMoeda(){
    const entradaValor = document.getElementById('valor_entrada_usuario');
    const moedaSelecionada = document.getElementById('moeda_saída_select');
    const valorConvertido = document.getElementById('resultado_valor_convertido');

    const valorInicial = parseFloat(entradaValor.value);
    const moedaConvertida = moedaSelecionada.value;

    const valorDolar = 6.01;
    const valorEuro = 6.37;

    console.log(valorInicial);
    console.log(moedaSelecionada.value);
 

    if (isNaN(valorInicial) || valorInicial <= 0) {
        alert('Por favor, insira um valor válido.');
        valorConvertido.style.border = '1px solid red';
        conversaoElement.innerHTML = ''; 
        return;

    } else {
        valorConvertido.style.border = ''; 
    }

    if (moedaConvertida === '2') {
        const conversaoParaDolar = (valorInicial * valorDolar).toFixed(2);
        console.log(conversaoParaDolar)
        valorConvertido.innerHTML = `O valor total em dolar é de $<strong>${conversaoParaDolar}</strong>`;

    }else if (moedaConvertida === '3') {
        const conversaoParaEuro = (valorInicial * valorEuro).toFixed(2);
        valorConvertido.innerHTML = `O valor total em euro é de $<strong>${conversaoParaEuro}</strong>`;

    }else{
        alert('Por favor, selecione uma moeda válida.');
        valorConvertido.style.border = '1px solid red';
        conversaoElement.innerHTML = '';
        return;
    }
}