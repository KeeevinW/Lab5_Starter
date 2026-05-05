// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const textArea = document.getElementById('text-to-speak');
  const talkButton = document.querySelector('button');
  const faceImage = document.querySelector('#explore > img');

  let voices = [];

  function populateVoices() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';
    voices.forEach((voice, i) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.setAttribute('data-index', i);
      voiceSelect.appendChild(option);
    });
  }

  populateVoices();
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoices;
  }

  talkButton.addEventListener('click', () => {
    if (voiceSelect.value === 'select') return;
    const text = textArea.value;
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    const selectedIndex = voiceSelect.selectedOptions[0].getAttribute('data-index');
    utterance.voice = voices[selectedIndex];

    utterance.addEventListener('start', () => {
      faceImage.src = 'assets/images/smiling-open.png';
    });
    utterance.addEventListener('end', () => {
      faceImage.src = 'assets/images/smiling.png';
    });

    synth.speak(utterance);
  });
}
