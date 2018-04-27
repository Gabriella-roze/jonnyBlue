// OUR VARIABLES
// buttons
const btnPlay = document.getElementById('btn_play');
const btnPickup = document.getElementById('btn__choice--pickup');
const btnStrip = document.getElementById('btn__choice--strip');
const btnSoundPlay = document.getElementById('btn__sound--on');
// sounds
const soundStrip = document.getElementById('sound_strip');
const soundSlideIn = document.getElementById('sound_slidein');
const soundHeyMama = document.getElementById('sound_heymama');
const soundPickUp = document.getElementById('sound_pickup');
const soundGoAway = document.getElementById('sound_goaway');
const soundIntro = document.getElementById('sound_intro');
const soundHeartbreak = document.getElementById('sound_heartbreak');
// frames
const frameOne = document.getElementById('frame1');
const frameTwo = document.getElementById('frame2');
const frameThree = document.getElementById('frame3');
const frameFour = document.getElementById('frame4');
// characters
const johnnyOne = document.getElementById('johnny1');
const johnnyTwo = document.getElementById('johnny2');
const johnnyMusicianOne = document.getElementById('johnny1');
//animations


// FRAMES
// frame1
makeButtonUnclickable(btnPickup);
let music = false;

btnSoundPlay.addEventListener('click', function(){
  if (music == false){
    music = true;
    soundIntro.play();
    btnSoundPlay.innerHTML = '<i class="fas fa-volume-up"></i>';
  }
  else if (music == true){
    music = false;
    soundIntro.pause();
    btnSoundPlay.innerHTML = '<i class="fas fa-volume-off"></i>';
  }
})

btnPlay.addEventListener('click', function() {
  frameOne.style.display = 'none';
  frameTwo.style.display = 'initial';
  johnnyOne.classList.add('anim-slide_in');
  btnPickup.classList.add('unhoverable');
  soundSlideIn.play();
  soundIntro.volume = .3;
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
  soundSlideIn.play();
  strip2();
  goaway();
  makeButtonUnclickable(btnStrip);
  makeButtonClickable(btnPickup);
  btnStrip.classList.add('unhoverable');
  btnPickup.classList.remove('unhoverable');
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
  btnPickup.classList.add('unhoverable');
})

// frame3
function frameThreePlay(){
  setTimeout(function(){
    soundHeartbreak.play();
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
  }, 4000)
}
