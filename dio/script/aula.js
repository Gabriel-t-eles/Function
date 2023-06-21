/*
function calcularImc(peso, altura){
    return peso/ Math.pow(altura, 2);
}

function classificarImc(imc){
    if(imc>18,5){
        return 'abaixo do peso';
    }else if(imc>=18.5 && imc<25){
        return 'peso normal';
    }else if(imc>=25 && imc<30){
        return 'acima do peso';
    }else  if(imc>=30 && imc<40){
        return 'obeso' ;
    }else{
        return('obesidade grave');
    }
}


(function main(){
const peso = 68;
const altura = 1.78

const imc = calcularImc(peso, altura);
console.log(classificarImc(imc),imc)
})();
*/

/*
function escreverNome(nome){
return 'Meu nome é ' + nome ;
}


function maiorDeIdade(idade){
    if(idade >= 18){
        console.log(escreverNome('Teles') + ' Você é maior de idade');
    }else{
        console.log('Você é menor de idade');
    }
}

maiorDeIdade(18)
maiorDeIdade(15);
*/

function aplicarDesconto(valor, desconto){
    return (valor - (valor * (desconto/100)));
}
function aplicarJuros(valor, juros){
    return (valor + (valor * (juros/100)));
}



const x = 100;
const formaDePagamento = '4';

if(formaDePagamento === '1'){
    console.log(aplicarDesconto(x,10));
}else if(formaDePagamento === '2'){
    console.log(aplicarDesconto(x,15));
}else if(formaDePagamento === '3'){
    console.log(x);
}else if(formaDePagamento === '4'){
    console.log(aplicarJuros(x,10));
}else{
    console.log('Informe a Forma de Pagamento')
}

