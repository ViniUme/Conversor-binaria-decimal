function calcular(){

    const numberBinario = window.document.getElementById('binarioText').value
    if (numberBinario === '') return alert('Digite um numero binario');
    numberBinario.split('').map((char) => {
        if (char !== '0' && char !== '1') return alert('Digite um numero binario');
    });

    const decimal = parseInt(numberBinario, 2)

    document.getElementById('decimalText').value = decimal;
    return true;
}