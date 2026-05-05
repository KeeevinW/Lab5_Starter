// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose > img');
  const audio = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls > img');
  const playButton = document.querySelector('button');
  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener('change', () => {
    const value = hornSelect.value;
    if (value === 'select') return;
    hornImage.src = `assets/images/${value}.svg`;
    hornImage.alt = value;
    audio.src = `assets/audio/${value}.mp3`;
  });

  volumeSlider.addEventListener('input', () => {
    const v = Number(volumeSlider.value);
    audio.volume = v / 100;
    let level;
    if (v === 0) level = 0;
    else if (v < 33) level = 1;
    else if (v < 67) level = 2;
    else level = 3;
    volumeIcon.src = `assets/icons/volume-level-${level}.svg`;
    volumeIcon.alt = `Volume level ${level}`;
  });

  playButton.addEventListener('click', () => {
    if (!audio.src) return;
    audio.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}
