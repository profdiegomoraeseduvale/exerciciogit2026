const botao = document.getElementById('meuBotao');

botao.addEventListener('click', () => {
    document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
});

// O método getElementById estava escrito com 'i' minúsculo, o correto é com 'I' maiúsculo
// E a referência ao body estava solta, o correto é usar document.body para acessar o estilo da página