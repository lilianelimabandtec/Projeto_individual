function validar (){

mensagem.innerHTML ='';

var valor_email = email.value;
var valor_senha = Number(senha.value);
var cor;
console.log(valor_email);
console.log(valor_senha);


if ( valor_email == "teste@email.com.br" && valor_senha == 123){
    
mensagem.innerHTML += 'Guia Enviado!';
cor = 'beige';


}else{

    mensagem.innerHTML += 'E-mail/Senha incorretos.Tente Novamente!';
    cor = 'darkred';

}
mensagem.style.color = cor;

}