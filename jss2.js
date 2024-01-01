function escrever() {
  
 
    var nome = prompt('digite seu nome');
    document.getElementById('h2')  
  
   
   h2.innerHTML = 'meu nome é' + ' ' + nome;
  }
  
  
  function cor() {
  
  var pergunta = prompt('digite a cor que você quer ')
  var fundo = document.getElementById('fundo');

  }
  
  
  
  
  
  if(pergunta=== 'vermelho' ){
  fundo.style.backgroundColor = 'red' ; }
  
  
  
  else if(pergunta=== 'amarelo' ){
    fundo.style.backgroundColor = 'yellow'  ; }
  
  
    else if (pergunta=== 'preto' ){
      fundo.style.backgroundColor = "black"  ; }
  