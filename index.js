

// detecting button pressed

var drumButtons = document.querySelectorAll(".drum").length;
//find number of drum buttons

for (var i = 0; i < drumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", drumHit);

  function drumHit() {

    var buttonInnerHtml = this.innerHTML;

    drumSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);


  }

}

//detecting keyboard pressed

document.addEventListener("keydown", function(e){

  drumSound(e.key);
  buttonAnimation(e.key);

});


function drumSound(key){

  switch (key) {
    case "w":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;

    case "a":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;

    case "s":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;

    case "d":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;

    case "j":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;

    case "k":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;

    case "l":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;


    default: console.log(key);

  }

}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
