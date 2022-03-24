/*PRINCIPAIS OBJETIVOS
1. Criar nova tarefa
    a. Capturar conteúdo adicionado pelo usuário - OK
    b. Criar nova tarefa - OK
    c. Adicionar nova terefa na página - OK
    Obs: esses passos vão ocorrer a partir do click no botão "Adicionar" 

2. Marcar tarefa como concluída

3. Remover uma tarefa
    a. Capturar todas as tarefas
    b. Identificar a tarefa clicada
    c. Remover a tarefa

*/

const buttonAddTarefa = document.querySelector('.formulariotarefa button');
const campoAddTarefa = document.getElementById('inputNovaTarefa');

const listaTarefas = document.querySelector('ul');

buttonAddTarefa.addEventListener('click', adicionarNovaTarefa);

function adicionarNovaTarefa(){
    const conteudoCampo = campoAddTarefa.value;
    const tarefa = document.createElement('li');
    const h2 = document.createElement('h2');
    const div = document.createElement('div');
    const buttonFinalizarTarefa = document.createElement('button');
    const buttonRemoverTarefa = document.createElement('button');
    const img = document.createElement('img');

    h2.innerText = conteudoCampo;

    buttonFinalizarTarefa.classList.add("botaoFinalizarTarefa");

    buttonFinalizarTarefa.addEventListener('click', finalizarTarefa);

    buttonRemoverTarefa.addEventListener('click', removerTarefa);
    img.src = "/lixeira.png";
    img.alt = "ImagemBotaoRemoverTarefa";

    buttonRemoverTarefa.appendChild(img);

   div.appendChild(buttonFinalizarTarefa);
   div.appendChild(buttonRemoverTarefa);

   tarefa.appendChild(h2);
   tarefa.appendChild(div);
 /*  li.appendChild(h2);
   li.appendChild(div);*/

   // segunda forma

   /*const li = `
    <h2>${conteudoCampo}</h2>

    <div>
        <button class="botaoFinalizarTarefa"></button>
        <button><img src="/Projeto/lixeira.png" alt="ImagemBotaoRemoverTarefa"></button>
    </div>`;*/
    
    //tarefa.innerHTML = li;
    
    listaTarefas.appendChild(tarefa);

    /*const listaBotoesRemover = document.querySelectorAll('.botaoFinalizarTarefa ~ button');
    console.log(listaBotoesRemover);

    adicionarEventHandler(listaBotoesRemover);*/
}

/*function adicionarEventHandler (listaBotoesRemover){
    for(let i = 0; i < listaBotoesRemover.length; i++){
        const buttonRemover = listaBotoesRemover[i];

        buttonRemover.addEventListener('click', removerTarefa)
    }
}*/

function removerTarefa(evento){
    const buttonClicado = evento.currentTarget;
    const tarefaClicada = buttonClicado.closest('li');

    tarefaClicada.remove();
}

function finalizarTarefa(evento) {
    const buttonClicado = evento.currentTarget;
    const tarefaClicada = buttonClicado.closest('li');

    tarefaClicada.classList.toggle('tarefaFinalizada');
}

const inputNoturno = document.getElementById('inputModonoturno'); 
const main = document.querySelector('main');

inputNoturno.addEventListener('click', ativarModoNoturno);

function ativarModoNoturno (){
    main.classList.toggle('modoNoturno')
}