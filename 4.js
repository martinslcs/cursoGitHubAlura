/* Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para 
determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.*/

const nome = prompt("Digite o seu nome: ");
alert(`Olá ${nome}`);
alert("Vamos saber se você passou de ano ou não!");

let nota = parseFloat(prompt("Digite a sua nota: "));

if (nota >= 7){
    alert(`Meus PARABÉNS, ${nome}`)
} else{
    alert(`Não foi desta vez, mas continue tentando, ${nome}`)
}