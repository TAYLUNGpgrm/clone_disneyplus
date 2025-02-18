document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const tabs = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);

            // Remove a classe 'active' de todos os botões
            removeBotaoAtivo();
            // Adiciona a classe 'active' ao botão clicado
            botao.target.classList.add('shows__list--is-active');

            console.log(botao.target.dataset.tabButton);
            escondeTodasAbas();
            
            if (aba) {
                aba.classList.add('shows__list--is-active');
            }
        });
    }
});

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__list--is-active');
    }
}

function escondeTodasAbas() {
    const tabs = document.querySelectorAll('[data-tab-id]');
    
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('shows__list--is-active');
    }
}