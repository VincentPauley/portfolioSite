/* get screen height and set upper-gallery height to a bit less */
var screenHeight = window.innerHeight;
var desiredHeight = screenHeight - 60;
$('#gallery-upper').css('height', desiredHeight);


var imageCollection = [
  {
    'name' : 'one'
  },
  {
    'name' : 'two'
  },
  {
    'name' : 'three'
  },
  {
    'name' : 'four'
  }
];

/* Controller logic that handles indexin for image display */
var currentImageView = 0;
var nextImage = imageCollection[currentImageView];

// click handlers for arrow keys
$('#upper-right-arrow').on('click', function() {
  currentImageView += 1;
  // make sure the index exists within the array and loop through if needed
  if(currentImageView < imageCollection.length) {
    nextImage = imageCollection[currentImageView].name;
  } else {
    currentImageView = 0;
    nextImage = imageCollection[currentImageView].name;
  }
  alert(nextImage);
});
$('#upper-left-arrow').on('click', function() {
  // make sure the index exists within the array and loop through if needed
  if(currentImageView == 0) {
    currentImageView = imageCollection.length - 1;
    nextImage = imageCollection[currentImageView].name;
  } else {
    currentImageView -= 1;
    nextImage = imageCollection[currentImageView].name;
  }
  alert(nextImage);
}); /* End indexing controller */


/* Sets height of the middle divs, after getting the height of the div containing the description text (accounts for the padding of that div as well)*/
function calculateMiddleProportions() {
  var imageDescriptionHeight = $('#image-description-text').outerHeight();
  $('#image-description-text').siblings().height(imageDescriptionHeight);
}


calculateMiddleProportions();

/* EVENT LISTENERS */

// resizes the height of the middle section when window is resized
$(window).on('resize', function() {
  calculateMiddleProportions();
});

/* Event handlers for the hover states of the  */

/* hover overs for side panels */
// upper-right-arrow
$('#upper-right-arrow').on('mouseover', function() {
  $(this).find('line').css('stroke', 'white');
});
$('#upper-right-arrow').on('mouseout', function() {
  $(this).find('line').css('stroke', '#5E5E5E');
});
// upper-right-panel
$('#upper-left-arrow').on('mouseover', function() {
  $(this).find('line').css('stroke', 'white');
});
$('#upper-left-arrow').on('mouseout', function() {
  $(this).find('line').css('stroke', '#5E5E5E');
});
