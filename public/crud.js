// Função para enviar votos para o Firestore e redirecionar para outra página
function enviarVotos() {
    // Obtenha os valores selecionados nos campos do formulário
    var hitDoAno = obterValorSelecionado('hitDoAnoOpcoes');
    var gcServe = obterValorSelecionado('gcServeOpcoes');
    var gcInstagramavel = obterValorSelecionado('gcInstagramavelOpcoes');
    var gcAtrativo = obterValorSelecionado('gcAtrativoOpcoes');
    var triboGalera = obterValorSelecionado('triboGaleraOpcoes');
    var triboEstilosa = obterValorSelecionado('triboEstilosaOpcoes');
    var gcConvida = obterValorSelecionado('gcConvidaOpcoes');

    // Verifique se todos os campos foram preenchidos
    if (!hitDoAno || !gcServe || !gcInstagramavel || !gcAtrativo || !triboGalera || !triboEstilosa || !gcConvida) {
        alert('Por favor, preencha todos os campos antes de enviar os votos.');
        return;
    }

    // Crie um objeto com os dados a serem enviados para o Firestore
    var dadosVotos = {
        hitDoAno: hitDoAno,
        gcServe: gcServe,
        gcInstagramavel: gcInstagramavel,
        gcAtrativo: gcAtrativo,
        triboGalera: triboGalera,
        triboEstilosa: triboEstilosa,
        gcConvida: gcConvida
    };

    // Envie os dados para o Firestore
    var db = firebase.firestore();
    db.collection('votos').add(dadosVotos)
        .then(function(docRef) {
            console.log('Votos enviados com sucesso! Documento ID:', docRef.id);
            // Redirecione para a página desejada
            window.location.href = 'obrigada.html';
        })
        .catch(function(error) {
            console.error('Erro ao enviar votos:', error);
        });
}

// Função auxiliar para obter o valor selecionado em um elemento de seleção
function obterValorSelecionado(id) {
    var elemento = document.getElementById(id);
    return elemento ? elemento.value : null;
}