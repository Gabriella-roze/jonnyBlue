// OUR VARIABLES
// buttons
let btnPlay = document.getElementById('btn_play');

// frames
let frameOne = document.getElementById('frame1');
let frameTwo = document.getElementById('frame2');

// FRAMES
// frame1
btnPlay.addEventListener('click', function(){
  frameOne.style.display = 'none';
  frameTwo.style.display = 'initial';
  
})
