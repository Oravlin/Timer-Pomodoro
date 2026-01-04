let tempo = 1500; //esse mano vai ser em segundos
let pausado = true;
let tempoFoco = document.getElementById('inputFoco').value;
let tempoPausa = document.getElementById('inputPausa').value;
let modoFoco = true;

function formatarTempo(t) {
    let min = Math.floor(t / 60);
    let seg = t % 60;
    return `${min}:${seg < 10 ? '0' : ''}${seg}`;
}

function alternarCiclo(){
    modoFoco = !modoFoco;
    tempo = modoFoco ? tempoFoco : tempoPausa;
    document.getElementById('timerText').textContent = formatarTempo(tempo);
    timer();
}

function timer() {
    foco = setInterval(() =>{
        if (tempo > 0){
            tempo--;
            document.getElementById('timerText').textContent = formatarTempo(tempo);
        }
        else{
            clearInterval(foco);
            alternarCiclo();
        }
    }, 1000)
}

async function pausarPomodoro(){
    if(pausado == false){
        clearInterval(foco);
        pausado = true;
        document.getElementById('btn-play').classList.remove('hide');
        document.getElementById('btn-pause').classList.add('hide');
    }

}


async function resetPomodoro() {
    document.getElementById('btn-play').classList.remove('hide')
    document.getElementById('btn-pause').classList.add('hide');
    document.getElementById('btn-reset').classList.add('hide');
    pausado = true;
    modoFoco = true;
    tempo = tempoFoco;
    document.getElementById('timerText').textContent = formatarTempo(tempo);
    clearInterval(foco);
}

async function pomodoro() {
    if (pausado) {
        pausado = false;
        document.getElementById('btn-play').classList.add('hide');
        document.getElementById('btn-pause').classList.remove('hide');
        document.getElementById('btn-reset').classList.remove('hide');
        timer();
    }
}

//ajustes de timer

async function atualizarInput(){
    tempoFoco = document.getElementById('inputFoco').value * 60;
    tempoPausa = document.getElementById('inputPausa').value * 60;
    resetPomodoro();
    document.getElementById('textFoco').textContent = document.getElementById('inputFoco').value + ' min';
    document.getElementById('textPausa').textContent = document.getElementById('inputPausa').value + ' min';
}