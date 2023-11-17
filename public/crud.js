

import { db } from './firebase.js';
const btnEnviar = document.querySelector('#btn-enviar');

const ArrayElemens = []

btnEnviar.addEventListener('click', () => {
    const hitDoAno = obterValorSelecionado('hitDoAnoOpcoes');
    const gcServe = obterValorSelecionado('gcServeOpcoes');
    const gcInstagramavel = obterValorSelecionado('gcInstagramavelOpcoes');
    const gcAtrativo = obterValorSelecionado('gcAtrativoOpcoes');
    const triboEstilosa = obterValorSelecionado('triboEstilosaOpcoes');
    const gcConvida = obterValorSelecionado('gcConvidaOpcoes');
    const triboGalera = obterValorSelecionado('triboGaleraOpcoes')
    ArrayElemens.push([hitDoAno, gcServe, gcInstagramavel, gcAtrativo, triboEstilosa, gcConvida, triboGalera])

    const validacao = CheckValiditySelects();
    if (!validacao) 
        return;

    const dadosVotos = {
        hitDoAno: hitDoAno,
        gcServe: gcServe,
        gcInstagramavel: gcInstagramavel,
        gcAtrativo: gcAtrativo,
        triboGalera: triboGalera,
        triboEstilosa: triboEstilosa,
        gcConvida: gcConvida
    };
    EnviarParaOFireBase(dadosVotos);
})

function CheckValiditySelects(){
    let validado = true;
    ArrayElemens.forEach(element => {
        if(!element.validity){
            alert("Por favor, preencha os campos corretamente! ")
            validado = false
            return;
        }
        
    });
    return validado;
}

function EnviarParaOFireBase(dadosVotos){
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
    const elemento = document.getElementById(id);
    return elemento;
}