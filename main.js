// OUR VARIABLES
// buttons
let btnPlay = document.getElementById('btn_play');
let btnPickup = document.getElementById('btn__choice--pickup');
let btnStrip = document.getElementById('btn__choice--strip');
// sounds
let soundStrip = document.getElementById('sound_strip');
let soundSlideIn = document.getElementById('sound_slidein');
// frames
let frameOne = document.getElementById('frame1');
let frameTwo = document.getElementById('frame2');
// characters
let johnnyOne = document.getElementById('johnny1');
let johnnyTwo = document.getElementById('johnny2');

// FRAMES
// frame1
btnPlay.addEventListener('click', function(){
  frameOne.style.display = 'none';
  frameTwo.style.display = 'initial';
  johnnyOne.classList.add('anim-slide_in');
  soundSlideIn.play();

})
// frame2
  btnStrip.addEventListener('click', function(){
    johnnyOne.classList.add('anim-strip');
    soundStrip.play();
    btnStrip.style.display='none';
})

johnnyOne.addEventListener('animationend', function(){
johnnyOne.style.display= 'none';
johnnyTwo.style.display= 'initial';
})
