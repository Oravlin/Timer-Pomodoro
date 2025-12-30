let tempo //esse mano vai ser em segundos
let pausado = true;

function formatarTempo(t) {
    let min = Math.floor(t / 60);
    let seg = t % 60;
    return `${min}:${seg < 10 ? '0' : ''}${seg}`;
}

function timerFoco() {
    return new Promise((resolve) => {
        tempo = 10;
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
    })
}

function timerPausa() {
    return new Promise((resolve) => {
        tempo = 10;
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
    })
}

async function pomodoro() {
    if (pausado) {
        pausado = false;
        let i = 0;
        while (i < 4) {
            await timerFoco();
            await timerPausa();
            i++
        }
        pausado = true;
    }
}