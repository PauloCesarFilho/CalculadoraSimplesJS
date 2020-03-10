function calcular() {
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    var operacao = document.getElementById('operacao').value;
    var resultado = '';
        
        
    switch (operacao) {
        case '1':
            resultado = num1 + num2;
            break;
        case '2':
            resultado = num1 - num2;
            break;
        case '3':
            resultado = num1 / num2;
            break;
        case '4':
            resultado = num1 * num2;
            break;
        default :
            alert('Selecione uma Operação !');
            return false;    
    }   
    document.getElementById('resultado').value = resultado;
}