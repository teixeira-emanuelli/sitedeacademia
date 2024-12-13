// Função para alterar o texto do botão e exibir o formulário
function alterarPlano(plano, botao) {
    // Mudar o texto do botão
    botao.textContent = 'Quero esse plano';

    // Exibir o formulário correspondente
    const formulario = document.getElementById('form' + plano.replace(' ', ''));

    if (formulario) {
        formulario.style.display = 'block';
    }

    // Desabilitar o botão para evitar múltiplos cliques
    botao.setAttribute('disabled', true);
}

// Função para enviar o formulário (simulação)
function enviarFormulario(plano) {
    const nome = document.getElementById('nome' + plano.replace(' ', '')).value;
    const telefone = document.getElementById('telefone' + plano.replace(' ', '')).value;

    // Verificar se ambos os campos estão preenchidos
    if (nome && telefone) {
        // Exibir mensagem de sucesso
        const mensagem = document.getElementById('mensagem' + plano.replace(' ', ''));
        mensagem.style.display = 'block';

        // Limpar os campos após envio
        document.getElementById('nome' + plano.replace(' ', '')).value = '';
        document.getElementById('telefone' + plano.replace(' ', '')).value = '';

        // Ocultar o formulário
        document.getElementById('form' + plano.replace(' ', '')).style.display = 'none';

        // Resetar o botão para permitir nova inscrição
        const botao = document.querySelector('button[onclick="alterarPlano(\'' + plano + '\', this)"]');
        botao.textContent = 'Assine';
        botao.removeAttribute('disabled');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}
// Array com os caminhos das imagens
const imagens = ['imagem1.jpg', 'imagem2.jpg'];
let indiceAtual = 0; // Controla qual imagem está sendo exibida

// Referência ao elemento de imagem
const imagemElement = document.getElementById('imagem');

// Referência ao botão
const botao = document.getElementById('alterarImagemBtn');

// Função para alterar a imagem
function alterarImagem() {
    // Atualiza o índice da imagem
    indiceAtual = (indiceAtual + 1) % imagens.length;

    // Atualiza o atributo src da imagem
    imagemElement.src = imagens[indiceAtual];
}

// Adiciona o evento de clique ao botão
botao.addEventListener('click', alterarImagem);
