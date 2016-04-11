/* get screen height and set upper-gallery height to a bit less */
var screenHeight = window.innerHeight;
var desiredHeight = screenHeight - 60;
$('#gallery-upper').css('height', desiredHeight);

// upper-left-arrow

// upper-right-arrow
$('upper-right-arrow').on('hover', function() {
  alert('trace');
});
