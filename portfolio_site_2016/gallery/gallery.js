var images = [
  {'imageLocation' : 'images/cross-enterprises_full.jpg'},
  {'imageLocation' : 'images/csod_internal.jpg'},
  {'imageLocation' : 'images/initech.jpg'},
  {'imageLocation' : 'images/connect.png'}
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

/* provide the index of what image you want and this will update the gallery */
function updateImage(imageIndex) {
  // update global var that stores index
  currentIndex = imageIndex;
  // get location of new image
  var newImage = images[imageIndex].imageLocation;
  // update the current image with the new src
  $('#showcase-image').attr('src', newImage);
  // update balls
  updateBalls();
}

/* update balls (current should be white) */
function updateBalls() {
  displayedImageBall = '#index_ball' + currentIndex;
  $(displayedImageBall).css('background-color', '#FFF').siblings().css('background-color', '#9C9C9C');
}

initializeGallery();

/* ALL DONE!

(╯°□°）╯︵ ┻━┻

*/
