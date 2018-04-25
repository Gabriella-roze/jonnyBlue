let btnPickup = document.getElementById('btn__choice--pickup');
let btnStrip = document.getElementById('btn__choice--strip')
let johnnyOne = document.getElementById('johnny1');
let soundStrip = document.getElementById('sound_strip');

btnStrip.addEventListener('click', function(){
  johnnyOne.classList.add('anim-strip');
  soundStrip.play();
})
