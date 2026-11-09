const botao = document.getElementById('meuBotao');

if (botao) {
    botao.addEventListener('click', () => {
        const cor = '#' + Math.floor(Math.random() * 16777216)
            .toString(16)
            .padStart(6, '0');
        document.body.style.backgroundColor = cor;
    });
}