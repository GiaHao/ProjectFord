// Nút play trong Message
document.getElementById("play-video").addEventListener("click", play);

function play() {
  var video = document.getElementById("message__video");
  video.play();
  this.style.display = "none";
  video.controls = true;
}

// Hình nền khi nhấn dropdown menu


function clickDropdownMenu() {
    var container = document.getElementById("container-bg");

    container.classList.add("container-background");
    
}

window.onclick = function (e) {
    var container = document.getElementById("container-bg");
    if (!e.target.matches('.nav-item')) {
          if (container.classList.contains('container-background')) {
            container.classList.remove('container-background');
          }
      }
}