var clique = 0;

function myFunction() {
    document.getElementById("batatas").innerHTML = "Você clico >:O";
    document.getElementById("batatas").innerHTML = "You clicked >:O";
    clique = 1;
  }
function WhichButton(event){
    if(event.button  == 2){
        alert("Não inspeciona meu site >:o");
        alert("Do not inspect my site >:o");
    }
    else;
}
function Mudardentro(x){
    if(clique == 0){
        document.getElementById("batatas").style.fontSize="30px";
        document.getElementById("batatas").innerHTML="NÃO CLICA... >:(";
        document.getElementById("batatas").innerHTML="do NOT... >:(";
    }
    else;
}
function Mudarfora(x){
    if(clique == 0){
        document.getElementById("batatas").style.fontSize="20px";
        document.getElementById("batatas").innerHTML="Obrigado :)";
        document.getElementById("batatas").innerHTML="Thank you :)";
    }
    else;
}
function AumentarImagem(x){
    x.style.height="500px";
    x.style.width="500px";
}
/*function enviartabela(){
    var linhas = document.getElementById("linhas").value
    for (i=0; i < linhas; i++){
        document.getElementsByClassName("table")
    }

    var colunas = document.getElementById("colunas").value
}*/

/*

var aula = Number.parseInt(window.prompt('Digite o número da aula: \nAula 1 = tipo de resposta \nAula 2 = Soma de dois valores \nAula 3 = Contar, maiuscúlo / minúsculo em string \nAula 4 = Contagem monetária (dinheiro)'))
        if(aula==1){
            //typeof > identificar um valor (string, numero, etc)
            
            window.alert('Pokemon go é muito op :D') //Alertar (ok)
            window.confirm('Pokemon go é legal?') //Confirmar (ok/cancelar)
            var resposta = window.prompt('Qual pokemon é o mais legal?') //Digitar resposta
            window.alert('Tipo de resposta: ' + typeof resposta)
        }
        else if(aula==2){
            //STRING PARA NUMERO: Number.parseInt(var) // Number.parserFloat(var)  // Number(var)
            //NUMERO PARA STRING: var.toString // String(var)
            //JUNTAR DUAS STRINGS: string + string

            var resposta1 = Number.parseInt(window.prompt('Digite um número inteiro: '))
            var resposta2 = Number.parseInt(window.prompt('Digite outro número inteiro: '))
            var soma = resposta1 + resposta2
            //Modo com 'string' + var + 'string'
            window.alert('Soma dos dois números inteiros = ' + soma)
            //Modo com `string ${var} string`
            window.alert(`Soma de ${resposta1} + ${resposta2} é igual a ${soma}.`)
        }
        else if(aula==3){
            //STRING PARA MINUSCULO: var.toLowerCase()
            //STRING PARA MAIUSCULO: var.toUpperCase()
            //CONTAR CARACTERES DE UMA STRING: var.length
            
            var escolha = window.prompt('Escrever no documento ou alerta?')
            
            var frase = window.prompt('Digite uma frase / palavra: ')
            var frase_minusculo = frase.toLocaleLowerCase()
            var frase_maiusculo = frase.toUpperCase()
            var contar_caracteres = frase.length
            
            //document.write : escreve no texto html
            if(escolha == 'documento'){
                document.write('<h2> Frase inicial: ' + frase + '<p>Minusculo: ' + frase_minusculo + '<p>Maiusculo: ' + frase_maiusculo + '<p>Essa frase tem: ' + contar_caracteres + ' caracteres.</h2>')
            }
            else if(escolha == 'alerta'){
                window.alert(frase_minusculo + '\n' + frase_maiusculo + '\nA frase contém: ' + contar_caracteres + ' letras.')
            }
            else{
                window.alert('ERRO NA DIGITAÇÃO.')
            }
        }
        else if(aula==4){
            //var.toFixed(casas decimais)
            //var.toFixed(casas decimais).replace('a', 'b') [Troca A e B]
            //var.toLocateString('pt-BR', {style: 'currency', currency: 'BRL'}) [BRL ou USD ou EUR, etc]
            
            var dinheiro = Number.parseFloat(window.prompt('Digite um valor em dinheiro:'))

            window.alert('Número com ponto e vírgula trocados: ' + dinheiro.toFixed(2).replace('.', ','))
            window.alert('Dinheiro em casas monetárias: ' + dinheiro.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
        }
        else{
            window.alert('Essa aula não existe, recarregue a página.')
        }

*/