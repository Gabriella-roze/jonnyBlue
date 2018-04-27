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
const frameThree = document.getElementById('frame3');
const frameFour = document.getElementById('frame4');

// characters
const johnnyOne = document.getElementById('johnny1');
const johnnyTwo = document.getElementById('johnny2');
//animations


// FRAMES
// frame1
makeButtonUnclickable(btnPickup);

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
  strip2();
  goaway();
  makeButtonUnclickable(btnStrip);
  makeButtonClickable(btnPickup);
})

function strip2() {
  setTimeout(function() {
    johnnyOne.style.display = 'none';
    johnnyTwo.style.display = 'initial';
    soundStrip.play();
    johnnyTwo.classList.add('anim-strip');
  }, 100);
};

function makeButtonUnclickable(btn) {
  btn.disabled = true;
  btn.style.opacity = '0.5';
}

function makeButtonClickable(btn) {
  btn.disabled = false;
  btn.style.opacity = '1';
}

function goaway() {
  setTimeout(function() {
    soundGoAway.play();
  }, 1200);
};

btnPickup.addEventListener('click', function() {
  soundPickUp.play();
  makeButtonUnclickable(btnPickup);
  frameThreePlay();
})

// frame3
function frameThreePlay(){
  setTimeout(function(){
    frameTwo.style.display = 'none';
    frameThree.style.display = 'initial';
    frameFourPlay();
  }, 3000)
}

//frame4
function frameFourPlay(){
  setTimeout(function(){
    frameThree.style.display = 'none';
    frameFour.style.display = 'initial';
  }, 3000)
}
