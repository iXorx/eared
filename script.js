document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("video1");
  const tracks = video.textTracks;
  
  // Show the first track (if available) by default
  if (tracks[0]) {
    tracks[0].mode = "showing";
  }
  
  // Toggle subtitles when button is clicked
  const toggleBtn = document.getElementById("toggleSubsBtn1");
  toggleBtn.addEventListener("click", () => {
    for (let i = 0; i < tracks.length; i++) {
      tracks[i].mode = tracks[i].mode === "showing" ? "hidden" : "showing";
    }
  });
  
  const video2 = document.getElementById("video2");
  const tracks2 = video2.textTracks;
  
  // Show the first track (if available) by default
  if (tracks2[0]) {
    tracks2[0].mode = "showing";
  }
  
  // Toggle subtitles when button is clicked
  const toggleBtn2 = document.getElementById("toggleSubsBtn2");
  toggleBtn2.addEventListener("click", () => {
    for (let i = 0; i < tracks2.length; i++) {
      tracks2[i].mode = tracks2[i].mode === "showing" ? "hidden" : "showing";
    }
  });
});
