// This code will highlight any United flight that has available R or RN inventory

$(".divOTP:contains('Available Cabins')").each(function(index) {
  if ($(this).is("*:contains('R')") && (!$(this).is("*:contains('R0')") || !$(this).is("*:contains('RN0')")) && $(this).is("*:contains('United')")) {
    $(this).parent().parent().addClass("rspace-background");

    // Determine R space
    if ($(this).is("*:contains('R1')") || $(this).is("*:contains('RN1')")) {
      var rspace = 'R1';
    }
    else if ($(this).is("*:contains('R2')") || $(this).is("*:contains('RN2')")) {
      var rspace = 'R2';
    } 
    else if ($(this).is("*:contains('R3')") || $(this).is("*:contains('RN3')")) {
      var rspace = 'R3';
    }
    else if ($(this).is("*:contains('R4')") || $(this).is("*:contains('RN4')")) {
      var rspace = 'R4';
    }
    else if ($(this).is("*:contains('R5')") || $(this).is("*:contains('RN5')")) {
      var rspace = 'R5';
    }
    else if ($(this).is("*:contains('R6')") || $(this).is("*:contains('RN6')")) {
      var rspace = 'R6';
    }
    else if ($(this).is("*:contains('R7')") || $(this).is("*:contains('RN7')")) {
      var rspace = 'R7';
    }
    else if ($(this).is("*:contains('R8')") || $(this).is("*:contains('RN8')")) {
      var rspace = 'R8';
    }
    else if ($(this).is("*:contains('R9')") || $(this).is("*:contains('RN9')")) {
      var rspace = 'R9';
    }
    $(this).parent().parent().prepend('<div class="rspace-number">' + rspace + '</div>');
  }
});
