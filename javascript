function performClap() {
    const audio = document.getElementById('shrine-clap-audio');
    const btn = document.getElementById('action-btn');
    const guide = document.getElementById('guide-status');
    const decree = document.getElementById('decree-box');

    clapCount++;

    audio.currentTime = 0;
    audio.play();

    switch (clapCount) {
        case 1:
            guide.innerText = "【一拍手。次の一打で宇宙の門が開く】";
            btn.innerText = "二拍手目を打つ";
            break;

        case 2:
            guide.innerText = "【一礼。宇宙哲学の御神体が顕現せり】";
            btn.remove();
            decree.classList.add('manifested');
            break;
    }
}
