let tempo //esse mano vai ser em segundos
let pausado = true;

function formatarTempo(t) {
    let min = Math.floor(t / 60);
    let seg = t % 60;
    return `${min}:${seg < 10 ? '0' : ''}${seg}`;
}

function timerFoco() {
    return new Promise((resolve) => {
        if (pausado == false) {
            document.getElementById('timerText').textContent = formatarTempo(tempo);
            foco = setInterval(() => {
                if (tempo > 0) {
                    tempo--;
                    document.getElementById('timerText').textContent = formatarTempo(tempo);
                }
                else {
                    clearInterval(foco);
                    resolve();
                }
            }, 1000);
        }
        else {
            resolve()
            return;
        }
    })
}

function timerPausa() {
    return new Promise((resolve) => {
        if (pausado == false) {
            document.getElementById('timerText').textContent = formatarTempo(tempo);
            pausa = setInterval(() => {
                if (tempo > 0) {
                    tempo--;
                    document.getElementById('timerText').textContent = formatarTempo(tempo);
                }
                else {
                    clearInterval(pausa);
                    resolve();
                }
            }, 1000);
        }
        else {
            resolve()
            return;
        }
    })
}

async function resetPomodoro() {
    document.getElementById('btn-play').classList.remove('hide')
    document.getElementById('btn-pause').classList.add('hide');
    document.getElementById('btn-reset').classList.add('hide');
    pausado = true;
    tempo = 1500;
    i = 0;
    document.getElementById('timerText').textContent = formatarTempo(tempo);
    clearInterval(foco);
    clearInterval(pausa);
}

async function pomodoro() {
    if (pausado) {
        document.getElementById('btn-play').classList.add('hide');
        document.getElementById('btn-reset').classList.remove('hide')
        document.getElementById('btn-pause').classList.remove('hide')
        pausado = false;
        let i = 0;
        while (i < 4 && pausado == false) {
            tempo = 1500;
            await timerFoco();
            tempo = 300;
            await timerPausa();
            i++
        }
        pausado = true;
        document.getElementById('btn-play').classList.remove('hide');
        document.getElementById('btn-pause').classList.add('hide');
        document.getElementById('btn-reset').classList.add('hide');
    }
}