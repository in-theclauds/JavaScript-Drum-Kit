window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key= "${e.keyCode}"]`);
  if(!audio) return; //stops the function from running all together
  audio.currentTime = 0; //rewinds sound to beggining
  audio.play();
  
  })