
/* Add images and descriptions as JSON objects in this array, the following code handles everything else*/
var images = [
  {'imageLocation' : 'images/cross-enterprises_full.jpg',
   'descriptionText' : 'This page was designed as a demonstration to clients as to what was possible to create in the Cornerstone system. For confidentiality reasons I cannot share actual client pages but this page shows many of the design principles used during my time as an independent contractor.'},
  {'imageLocation' : 'images/csod_internal.jpg',
   'descriptionText' : 'I designed this layout to simplify a congested page that had been present within a web environment for years. The simple colors and graphics hold true to the branding guidelines for this particular company, and help ease the task of navigation.'},
  {'imageLocation' : 'images/initech.jpg',
   'descriptionText' : 'This page was designed as a demonstration to clients as to what was possible to create in the Cornerstone system. For confidentiality reasons I cannot share actual client pages but this page shows many of the design principles I used during my time as an independent contractor.'},
  {'imageLocation' : 'images/connect.png',
   'descriptionText' : 'This Mock-up was designed for a client who wanted to take advantage of new and complicated features within the system we were using. Considerable knowledge of coding and patience was needed in order to create this page within the system. Keep in mind that certain information has been blurred for confidentiality purposes.'}
];

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

// INIT
initializeGallery();

/* ALL DONE!

(╯°□°）╯︵ ┻━┻

*/
