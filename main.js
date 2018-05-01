// OUR VARIABLES
// buttons
const btnPlay = document.getElementById('btn_play');
const btnPickup = document.getElementById('btn__choice--pickup');
const btnStrip = document.getElementById('btn__choice--strip');
const btnSoundPlay = document.getElementById('btn__sound--on');
const btnReset = document.getElementById('btn__reset');
// sounds
const soundStrip = document.getElementById('sound_strip');
const soundSlideIn = document.getElementById('sound_slidein');
const soundHeyMama = document.getElementById('sound_heymama');
const soundPickUp = document.getElementById('sound_pickup');
const soundGoAway = document.getElementById('sound_goaway');
const soundIntro = document.getElementById('sound_intro');
const soundHeartbreak = document.getElementById('sound_heartbreak');
const soundTheme = document.getElementById('sound_theme');
const soundPlay1 = document.getElementById('sound_play1');
const soundPlay2 = document.getElementById('sound_play2');
const soundPlay3 = document.getElementById('sound_play3');
const soundDreams = document.getElementById('sound_dreams');
const soundLadyboy = document.getElementById('sound_ladyboy');
const soundString = document.getElementById('sound_string');
const soundGasp = document.getElementById('sound_gasp');
// frames
const frameOne = document.getElementById('frame1');
const frameTwo = document.getElementById('frame2');
const frameThree = document.getElementById('frame3');
const frameFour = document.getElementById('frame4');
const frameFive = document.getElementById('frame5');
// characters
const johnnyOne = document.getElementById('johnny1');
const johnnyTwo = document.getElementById('johnny2');
const johnnyMusician = document.getElementById('johnny--musician');
const ladyOne = document.getElementById('lady1');
const ladyTwo = document.getElementById('lady2');
const ladyBoy = document.getElementById('ladyboy');
const musician = document.getElementById('musician');
const hand = document.getElementById('hand');
//animations

//GENERAL
btnReset.addEventListener('click', function(){
  location.reload();
})

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
  soundIntro.volume = .5;
  heymama();
  makeButtonClickable(btnStrip);
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
  btnStrip.classList.add('unhoverable');
  btnPickup.classList.remove('unhoverable');
})

function strip2() {
  setTimeout(function() {
    johnnyOne.style.display = 'none';
    johnnyTwo.style.display = 'initial';
    johnnyTwo.src = 'images/johnny_nude.gif';
    soundStrip.play();
    johnnyTwo.classList.add('anim-strip');
    dreamsSound();
  }, 100);
};
function dreamsSound(){
  setTimeout(function(){
    soundPickUp.play();
  }, 500);
}

function makeButtonUnclickable(btn) {
  btn.disabled = true;
  btn.style.opacity = '0.5';
  btn.style.cursor = 'initial';
}

function makeButtonClickable(btn) {
  btn.disabled = false;
  btn.style.opacity = '1';
  btn.style.cursor = 'pointer';
}

function goaway() {
  setTimeout(function() {
    soundGoAway.play();
    ladyOne.src = 'images/lady1_angry.svg';
    johnnyTwo.src = 'images/johnny_naked-2.svg';
    makeButtonClickable(btnPickup);
    ladyOne.classList.add('skew');
  }, 4500);
};

btnPickup.addEventListener('click', function() {
  soundDreams.play();
  makeButtonUnclickable(btnPickup);
  frameThreePlay();
  johnnyTwo.src = 'images/johnny_nude.gif';
  btnPickup.classList.add('unhoverable');
})

// frame3
function frameThreePlay(){
  setTimeout(function(){
    soundHeartbreak.play();
    frameTwo.style.display = 'none';
    frameThree.style.display = 'initial';
    frameFourPlay();
    soundTheme.play();
    soundIntro.pause();
  }, 3000)
}

//frame4
let steps = 0;

function frameFourPlay(){
  setTimeout(function(){
    soundTheme.volume = .4;
    frameThree.style.display = 'none';
    frameFour.style.display = 'initial';
  }, 4000)
}
johnnyMusician.addEventListener('click', function(){
  johnnyMusician.src = 'images/johnny_play.svg';
  steps += 1;
  if (steps == 1) {
    soundPlay1.play();
  }
  else if (steps == 2) {
    soundPlay2.play();
  }
  else if (steps == 3){
    soundPlay3.play();
  }
  playingMusic();
  frame5();
})
function playingMusic(){
  setTimeout(function(){
    johnnyMusician.src = 'images/johnny_noplay.svg';
    ladyTwo.style.right = steps * 15 + '%';
  }, 3300)
}

ladyBoy.addEventListener('click', function(){
  soundLadyboy.play();
  ladyBoy.src = 'images/random_person2.svg';
  toggleLadyboy();
})

function toggleLadyboy(){
  setTimeout(function(){
    ladyBoy.src = 'images/random_person.svg';
  }, 500);
}

musician.addEventListener('click', function(){
  musician.style.cursor = 'pointer';
  soundString.play();
  musician.src = 'images/cello2.svg';
  muted(soundString);
})
function muted(sound) {
  setTimeout(function(){
    sound.muted = true;
  }, 400)
}

ladyTwo.addEventListener('click', function(){
  soundGasp.play();
  ladyTwo.src = 'images/bar_girl-2.svg';
  toggleGirl();
})

function toggleGirl(){
  setTimeout(function(){
  ladyTwo.src = 'images/bar_girl.svg';
}, 300);
}

//frame5
function frame5(){
  if (steps == 3) {
    setTimeout(function(){
      frameFour.style.display = 'none';
      frameFive.style.display = 'initial';
    }, 4000);
  }
}
