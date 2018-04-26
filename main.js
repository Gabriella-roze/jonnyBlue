// OUR VARIABLES
// buttons
const btnPlay = document.getElementById('btn_play');
const btnPickup = document.getElementById('btn__choice--pickup');
const btnStrip = document.getElementById('btn__choice--strip');
// sounds
const soundStrip = document.getElementById('sound_strip');
const soundSlideIn = document.getElementById('sound_slidein');
const soundHeyMama = document.getElementById('sound_heymama');
const soundPickUp = document.getElementById('sound_pickup');
const soundGoAway = document.getElementById('sound_goaway');
// frames
const frameOne = document.getElementById('frame1');
const frameTwo = document.getElementById('frame2');
// characters
const johnnyOne = document.getElementById('johnny1');
const johnnyTwo = document.getElementById('johnny2');
//animations


// FRAMES
// frame1
btnPlay.addEventListener('click', function() {
  frameOne.style.display = 'none';
  frameTwo.style.display = 'initial';
  johnnyOne.classList.add('anim-slide_in');
  soundSlideIn.play();
  heymama();
})

function heymama() {
  setTimeout(function() {
    soundHeyMama.play();
  }, 600);
};

// frame2
btnStrip.addEventListener('click', function() {
  johnnyOne.classList.add('anim-strip');
  soundStrip.play();
  btnStrip.style.display = 'none';
  strip2();
  goaway();
})

function strip2() {
  setTimeout(function() {
    johnnyOne.style.display = 'none';
    johnnyTwo.style.display = 'initial';
    soundStrip.play();
    johnnyTwo.classList.add('anim-strip');
  }, 100);
};

function goaway() {
  setTimeout(function() {
    soundGoAway.play();
  }, 1200);
};

btnPickup.addEventListener('click', function() {
  soundPickUp.play();
  btnPickup.style.display = 'none';
})
