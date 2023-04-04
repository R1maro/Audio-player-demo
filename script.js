const audioPlayer = document.getElementById('audio-player');
const playlistItems = document.querySelectorAll('#playlist-items li a');

// Load the first song in the playlist
audioPlayer.src = playlistItems[0].dataset.src;

// Add event listeners to playlist items
playlistItems.forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();

        // Update the audio player source
        audioPlayer.src = e.target.dataset.src;

        // Play the new song
        audioPlayer.play();
    });
});