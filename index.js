const img = document.getElementById('img');

document.addEventListener('keyup', logKey);

document.addEventListener("keydown", function(e) {
    if (e.keyCode == 13) {
        console.log(e.keyCode)
      toggleFullScreen();
    }
  }, false);

  function toggleFullScreen(permiteSalir) {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen && !permiteSalir==true) {
        document.exitFullscreen();
      }
    }
  }
  

function logKey(e) {
/*     console.log(e.code)
    console.log(e.keyCode) */

    if (e.keyCode > 47 && e.keyCode < 58 || e.keyCode > 95 && e.keyCode < 105){
        while (img.classList.length > 1) {
            img.classList.remove(img.classList.item(1));
        }
        if (e.keyCode > 47 && e.keyCode < 58){
            img.classList.add("imagen" + (e.keyCode - 48))
            console.log("imagen" + (e.keyCode - 48))
        }
        if (e.keyCode > 95 && e.keyCode < 105){
            img.classList.add("imagen"  + (e.keyCode - 96))
            console.log("imagen"  + (e.keyCode - 96))
           }
           
           toggleFullScreen(true)
    }
}
