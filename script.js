// Get the audio player element
const audioPlayer = document.getElementById('audio-player');

// Get the file input element
const fileInput = document.getElementById('file-input');

// Get the play button element
const playButton = document.getElementById('play-button');

// Get the pause button element
const pauseButton = document.getElementById('pause-button');

// Add event listener for the file input to load the selected audio file
fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const fileURL = URL.createObjectURL(file);
    audioPlayer.src = fileURL;
    audioPlayer.load();
});

// Add event listener for the play button to play the audio
playButton.addEventListener('click', () => {
    audioPlayer.play();
});

// Add event listener for the pause button to pause the audio
pauseButton.addEventListener('click', () => {
    audioPlayer.pause();
});
