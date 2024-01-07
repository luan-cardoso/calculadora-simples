
function inserir(num) { 
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;}
    // 'numero' + valores que serão adicionados (inserir)


function limpar() {
    document.getElementById('resultado').innerHTML = "";}
    //deixando apenas vazio


function voltar() { 
    var total = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = total.substring(0, total.length -1)}
    // a var 'total' é o que tiver no innerHTML
    // lenght verifica o que tiver no innerHTMl(total) e diminiu 1.

function calcular() {
    var total = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(total);
    } 
    else 
    {
        document.getElementById('resultado').innerHTML = "";
    }
}


