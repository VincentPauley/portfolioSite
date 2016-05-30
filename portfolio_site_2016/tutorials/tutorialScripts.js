var thisRadio;

$('#glowTabs > label').on('mouseover', function() {
	thisRadio = $(this).children('input[type=radio]');
  // Change only if the radio is not selected
  if(!thisRadio.is(':checked')) {
		$(this).addClass('hovering');
  }
});
$('#glowTabs > label').on('mouseout', function() {
	thisRadio = $(this).children('input[type=radio]');
  // Change only if the radio is not selected
  if(!thisRadio.is(':checked')) {
		$(this).removeClass('hovering');
  }
});

$('#glowTabs > label > input[type=radio]').on('click', function() {
  $(this).parent('label').removeClass('hovering').addClass('selected').siblings().removeClass('selected');
});
