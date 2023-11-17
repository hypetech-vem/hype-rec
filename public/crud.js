

import { db } from './firebase.js';
const btnEnviar = document.querySelector('#btn-enviar');
const loader = document.querySelector('.loader')
loader.style.display = 'none'

const ArrayElements = []

btnEnviar.addEventListener('click', () => {
    loader.style.display = 'block'

    const hitDoAno = obterValorSelecionado('hitDoAnoOpcoes');
    const gcServe = obterValorSelecionado('gcServeOpcoes');
    const gcInstagramavel = obterValorSelecionado('gcInstagramavelOpcoes');
    const gcAtrativo = obterValorSelecionado('gcAtrativoOpcoes');
    const triboEstilosa = obterValorSelecionado('triboEstilosaOpcoes');
    const gcConvida = obterValorSelecionado('gcConvidaOpcoes');
    const triboGalera = obterValorSelecionado('triboGaleraOpcoes')

    ArrayElements.push(...[hitDoAno, gcServe, gcInstagramavel, gcAtrativo, triboEstilosa, gcConvida, triboGalera])

    const validacao = CheckValiditySelects();
    if (!validacao) {
        loader.style.display = 'none'
        alert("Por favor, preencha os campos corretamente! ")
        return;
    }
        
    const dadosVotos = {
        HitDoAno: hitDoAno.value,
        GcServe: gcServe.value,
        GcInstagramavel: gcInstagramavel.value,
        GcAtrativo: gcAtrativo.value,
        TriboGalera: triboGalera.value,
        TriboEstilosa: triboEstilosa.value,
        GcConvida: gcConvida.value
    };
    EnviarParaOFireBase(dadosVotos);
})

function CheckValiditySelects(){
    let validado = true;
    ArrayElements.forEach(element => {
        if(!element.checkValidity()){
            validado = false
        }
    });
    return validado;
}

function EnviarParaOFireBase(dadosVotos){
    db.collection('votos').add(dadosVotos)
    .then(function(docRef) {
        console.log('Votos enviados com sucesso! Documento ID:', docRef.id);
        loader.style.display = 'none'
        
        // Redirecione para a página desejada
        window.location.href = 'obrigada.html';
    })
    .catch(function(error) {
        loader.style.display = 'none'

        console.error('Erro ao enviar votos:', error);
    });
}
// Função auxiliar para obter o valor selecionado em um elemento de seleção
function obterValorSelecionado(id) {
    const elemento = document.getElementById(id);
    return elemento;
}