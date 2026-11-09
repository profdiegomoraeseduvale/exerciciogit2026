const botao = document.getElementById('meuBotao');
const body = document.body; // Adicionado para referenciar o elemento body corretamente

botao.addEventListener('click', () => {
    body.style.backgroundColor = '#' + Math.floor(Math.random() * 1677215).toString(16);
});