document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("video1");
  const tracks = video.textTracks;
  
  // Show the first track (if available) by default
  if (tracks[0]) {
    tracks[0].mode = "showing";
  }
  
  // Toggle subtitles when button is clicked
  const toggleBtn = document.getElementById("toggleSubsBtn");
  toggleBtn.addEventListener("click", () => {
    for (let i = 0; i < tracks.length; i++) {
      tracks[i].mode = tracks[i].mode === "showing" ? "hidden" : "showing";
    }
  });
});
