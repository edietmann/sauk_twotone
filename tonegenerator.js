function playTone(freq, duration) {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime);

    oscillator.connect(audioCtx.destination);
    oscillator.start();

    setTimeout(() => {
        oscillator.stop();
    }, duration);
}

function playTones() {
    const toneA = parseFloat(document.getElementById("toneA").value);
    const toneB = parseFloat(document.getElementById("toneB").value);

    playTone(toneA, 1000);

    setTimeout(() => {
        playTone(toneB, 3000);
    }, 1000);
}