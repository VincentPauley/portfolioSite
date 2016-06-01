// add read-more button after news panel
$('.news-panel').after('<div class=\'news-fade\'></div><input type=\'button\' value=\'Read More\' class=\'read-more-button\' />');

// toggle full view on click
$('.read-more-button').on('click', function() {

  if ($(this).attr('value') == 'Read More') {
    // convert to full view
    $(this).siblings().css('max-height', '2000px');
    $(this).attr('value', 'Slide Up');
    $(this).parent().find('.news-fade').css('opacity', '0');
  } else {
    // convert to small view
    $(this).siblings().css('max-height', '500px');
    $(this).attr('value', 'Read More');
    $(this).parent().find('.news-fade').css('opacity', '1');
  }
});

// hover effect for buttons
$('.read-more-button').on('mouseover', function() {
  $(this).parent().css('border', '1px solid #05E9FF');
});
$('.read-more-button').on('mouseout', function() {
  $(this).parent().css('border', '1px solid white');
});

/* Animate Fighter Jet */
function down() {
  $('#first-fighter-jet').animate({
    top: '+=50',
    left: '+=60'
  }, 8000, 'swing', function() {});
}

function up() {
  $('#first-fighter-jet').animate({
    top: '-=50',
    left: '-=60'
  }, 12000, 'swing', function() {});
}
function back() {
  $('#first-fighter-jet').animate({
    top: '+=50',
    left: '-=300'
  }, 20000, 'swing', function() {});
}
function left() {
  $('#first-fighter-jet').animate({
    top: '-=50',
    left: '+=300'
  }, 6000, 'swing', function() {});
}

setInterval(function() {
  down();
  up();
  back();
  left();
}, 0);


/* Holly Easter Egg */
$('#lovely-lady').on('mouseover', function() {
  $('#holly-wrapper').css('visibility' , 'visible');

  var hollySize = 200;

  function increaseHolly() {
    $('#holly-wrapper').css('width', (hollySize + 1) + 'px');
    hollySize += 1;
    if(hollySize > 500) {
      clearInterval(hollyInt);
    $('#holly-wrapper').css({'visibility' : 'hidden', 'display' : 'none'});
    }
  }
  var hollyInt = setInterval(increaseHolly, 10);
});
