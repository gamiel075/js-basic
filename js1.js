
'treino'

function soma(nome, sobrenome) {
    return nome +  ' ' + sobrenome;
  }
  var nome = 'gabriel';
 var sobrenome  = 'bezerra';
  var resultado = soma(nome, sobrenome);
  console.log(resultado);

 
 function calculo(){a,b}
 
 var a = prompt("digite a")
 var b = prompt ("digite b")
  var resultado = Number(a) + Number(b);
  alert(resultado); 
 
  return resultado
 
 
 
 var dado = function (a,b) {
 return a + b;
 }
  console.log(dado(2,5))
 
 
 function mudarcor() {
 var area = document.getElementById('area');
 area.style.backgroundColor = "red"  ; }
 
 
 
 const pessoa = {
   nome: 'João',
   saudacao: function() {
     console.log('Olá, ' + this.nome + '!');
   }
 };
 pessoa.saudacao();
 
 
 
 
 
 function entrar() {
   var area = document.getElementById('area');
   var texto = prompt('digite seu nome');
 
   if (texto == '' || texto == null) {
     alert('Digite seu nome novamente');
     area.innerHTML = 'Bem-vindo...';
   } else {
     area.innerHTML = 'Bem-vindo, ' + texto;
   }
 }
 
 