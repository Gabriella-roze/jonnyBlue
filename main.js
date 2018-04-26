// OUR VARIABLES
// buttons
const btnPlay = document.getElementById('btn_play');
const btnPickup = document.getElementById('btn__choice--pickup');
const btnStrip = document.getElementById('btn__choice--strip');
// sounds
const soundStrip = document.getElementById('sound_strip');
const soundSlideIn = document.getElementById('sound_slidein');
// frames
const frameOne = document.getElementById('frame1');
const frameTwo = document.getElementById('frame2');
// characters
const johnnyOne = document.getElementById('johnny1');
const johnnyTwo = document.getElementById('johnny2');

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
