document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os cards de personagem
    const cards = document.querySelectorAll('.personagem-card');
    
    // Seleciona os elementos do modal de informações
    const infoModal = document.getElementById('InfoPersonagem');
    const nomePersonagem = document.getElementById('NomePersonagem');
    const descricaoPersonagem = document.getElementById('DescricaoPersonagem');
    const btnFechar = document.getElementById('btn-fechar');

    // Seleciona o botão da agenda e a seção da turma
    const btnAgenda = document.getElementById('btn-agenda');
    const turmaDoBob = document.getElementById('TurmadoBob');    

    // Adiciona um evento de clique para cada card
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Pega os dados do card clicado
            const nome = card.getAttribute('data-nome');
            const descricao = card.getAttribute('data-descricao');

            // Preenche o modal com as informações
            nomePersonagem.textContent = nome;
            descricaoPersonagem.textContent = descricao;

            // Mostra o modal
            infoModal.classList.remove('hidden');
        });
    });

    // Função para fechar o modal
    function fecharModal() {
        infoModal.classList.add('hidden');
    }

    // Adiciona o evento de clique ao botão de fechar
    btnFechar.addEventListener('click', fecharModal);

    // Adiciona evento para mostrar/esconder a turma do Bob
    btnAgenda.addEventListener('click', () => {
        turmaDoBob.classList.toggle('hidden');
    });

   
});
