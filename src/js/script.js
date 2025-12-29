// vou tentar fazer algo aqui
let tempo = 1500; //coloquei o tempo em segundos pq é mais facíl :)
let minutosTimer = 0;
let segundosTimer = 0;
let timer

function formatarTempo(tempo){
    let min = Math.floor(tempo / 60);
    let seg = tempo % 60;
    return `${min}:${seg}`
}

function iniciarTimerFoco() {
    tempo = 1500
    timer = setInterval(() =>{
        tempo--;
        document.getElementById('timerText').textContent = formatarTempo(tempo);
    }, 1000);
}
