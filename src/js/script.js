// vou tentar fazer algo aqui
let tempo = 1500; //coloquei o tempo em segundos pq é mais facíl :)
let minutosTimer = 0;
let segundosTimer = 0;
let timer;
let pausado = true;

function pausarPomo() {
    pausado = true;
}

function iniciarPomo() {
    pausado = false;
}

function formatarTempo(tempo) {
    let min = Math.floor(tempo / 60);
    let seg = tempo % 60;
    return `${min}:${seg}`
}

function iniciarTimerFoco() {
    timer = setInterval(() => {
        if (tempo > 0) {
            tempo--;
            document.getElementById('timerText').textContent = formatarTempo(tempo);
        }
        else {
            clearInterval(timer);
            tempo = 300;
            iniciarTimerPausa();
        }
    }, 1000);
}
function iniciarTimerPausa() {
    clearInterval(timer);
    timer = setInterval(() => {
        if (tempo > 0) {
            tempo--;
            document.getElementById('timerText').textContent = formatarTempo(tempo);
        }
        else {
            clearInterval(timer);
        }
        if(pausado){
            Pomodoro();
        }
    }, 1000);
    return tempo = 'oi';
}

function Pomodoro() {
    if (pausado) {
        pausado = false;
        let i = 0;
        tempo = 10;
        iniciarTimerFoco();
        let intervaloPomodoro = setInterval(() => {
            if (i < 4) {
                if (tempo == 'oi') {
                    tempo = 1500;
                    iniciarTimerFoco();
                    i++
                }
            }
            else {
                clearInterval(intervaloPomodoro);
            }
        }, 1000);
    }
}

function resetTimer(){
    tempo = 1500;
    clearInterval(intervaloPomodoro);
    clearInterval(timer);
    document.getElementById('timerText').textContent = formatarTempo(tempo);
    pausado = true;
}
