function insert(num){//função que pega o valor

    let  numero = document.getElementById('result').innerHTML;//pega o valor

    document.getElementById('result').innerHTML = numero + num;//adiciona mais numeros
}

document.querySelector("#clean").onclick = function clean(){//limpa a tela

    document.getElementById('result').innerHTML = "";//atribui nada na tela

}

document.querySelector("#back").onclick = function back(){//apaga um digito

    let result = document.getElementById('result').innerHTML;//pega os digitos

    document.getElementById('result').innerHTML = result.substring(0, result.length -1);//percorre os digitos e apaga um

} 

document.querySelector("#calcular").onclick = function calcular(){//faz o calculo

    let result = document.getElementById('result').innerHTML;  //pega os números para o calculo

if(result){//se tiver números digitados vai executar


    document.getElementById('result').innerHTML = eval(result).toFixed(2)//atribui a função eval para calcular os número da variavel result

    }

else{//se não houver números digitados

    document.getElementById('result').innerHTML = "error";//mostra uma mensagem de erro na tela da calculadora

    }

 }

document.querySelector("#num1").onclick = function(){insert(1);};
document.querySelector("#num2").onclick = function(){insert(2);};
document.querySelector("#num3").onclick = function(){insert(3);};
document.querySelector("#num4").onclick = function(){insert(4);};
document.querySelector("#num5").onclick = function(){insert(5);};
document.querySelector("#num6").onclick = function(){insert(6);};
document.querySelector("#num7").onclick = function(){insert(7);};
document.querySelector("#num8").onclick = function(){insert(8);};
document.querySelector("#num9").onclick = function(){insert(9);};
document.querySelector("#num0").onclick = function(){insert(0);};
//insere os respectivos números

document.querySelector("#mais").onclick = function(){insert('+');};
document.querySelector("#menos").onclick = function(){insert('-');};
document.querySelector("#multiplicar").onclick = function(){insert('*');};
document.querySelector("#dividir").onclick = function(){insert('/');};
document.querySelector("#ponto").onclick = function(){insert('.');};
//insere as operações matemáticas