const botao = document.getElementById('meuBotao');

botao.addEventListener('click', () => {
    body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
});