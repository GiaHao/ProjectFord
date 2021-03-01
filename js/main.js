// Nút play trong Message
document.getElementById("play-video").addEventListener("click", play);

function play() {
  var video = document.getElementById("message__video");
  video.play();
  this.style.display = "none";
  video.controls = true;
}