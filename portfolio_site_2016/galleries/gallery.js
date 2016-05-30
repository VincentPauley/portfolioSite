
/* HOW TO USE:

define image locations and descriptions as an array of JSON objects within the head of the html document.  This file should then be called as the source of a script tag, it will read the JSON data from the HTML page and take care of all the gallery's functionality

- enjoy

*/

var currentIndex = 0;

function initializeGallery() {
  updateImage(currentIndex);
}



var imageCount = images.length;
var i;
/* add an index ball for every image in the array */
for(i=0;i < imageCount;i++) {
  $('#ball-wrappers').append('<div id=\'index_ball' + i + '\' class=\'index-ball\'></div>');
}

/* gets the id(index) of the ball clicked and calls update with that index */
$('.index-ball').on('click', function() {
  var selectedIndex = $(this).attr('id');
  var newIndex = selectedIndex.replace('index_ball', '');
  updateImage(newIndex);
});

/* update from arrow BUTTON clicks */
$('input[type=button]').on('click', function() {
  var direction = $(this).attr('id');
  if(direction == 'next-right') {
    shiftRight();
  } else {
    shiftLeft();
  }
});

/* listener for arrow keys */
document.onkeydown = function(e) {
  if(e.keyCode =='37') {
    shiftLeft();
  } else if (e.keyCode == '39'){
    shiftRight();
  }
}

function shiftRight() {
  var scope = imageCount - 1; // adjust for how length returns indexes -_-
  var nextIndex = currentIndex + 1;

  // if we're at the end, go to the beginning
  if(nextIndex >= imageCount) {
    updateImage(0);
  } else {
    updateImage(nextIndex);
  }
}

function shiftLeft() {
  var scope = imageCount - 1; // adjust for how length returns indexes -_-
  var nextIndex = currentIndex - 1;

  console.log(scope);
  console.log(nextIndex);
  if(nextIndex < 0) {
    updateImage(scope);
  } else {
    updateImage(nextIndex);
  }
}

/* UPDATE FUNCTIONS */

/* provide the index of what image you want and this will update the gallery */
function updateImage(imageIndex) {
  // update global var that stores index
  currentIndex = imageIndex;

  var showcaseImage = $('#showcase-image')
  // for fade effect
  showcaseImage.css('opacity', '0');
  setTimeout(function() {
    showcaseImage.css('opacity', '1');
    // get location of new image
    var newImage = images[imageIndex].imageLocation;
    // update the current image with the new src
    showcaseImage.attr('src', newImage);
  }, 250);
  // update balls
  updateBalls();
}

/* update balls (current should be white) */
function updateBalls() {
  displayedImageBall = '#index_ball' + currentIndex;
  $(displayedImageBall).css('background-color', '#FFF').siblings().css('background-color', '#9C9C9C');
  updateText();
}
/*
function updateText() {
  $('#description-text > p').html(images[currentIndex].descriptionText);
}*/

function updateText() {
  var descriptionText = $('#description-text > p');

  descriptionText.css('opacity', '0');
  setTimeout(function() {
    descriptionText.css('opacity', '1');
    descriptionText.html(images[currentIndex].descriptionText);
  }, 250);
}

// alert(teams[1].name);

// INIT
initializeGallery();

/* ALL DONE!

(╯°□°）╯︵ ┻━┻

*/
