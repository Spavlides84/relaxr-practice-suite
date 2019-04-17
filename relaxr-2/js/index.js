//I need to add the new content to the html. This includes text & 'Read Less'
// DONE
//I need to tell jquery to hide the above
$('.readLess1').hide();
$('.readLess2').hide();
$('.moreText1').hide();
$('.moreText2').hide();
$('.More3').hide();

//I need to tell jquery to show the new stuff and hide the 'Read More' at the same time, when I click on 'Read More'
function readMoreFunction1() {
  $('.moreText1').slideDown();
  $('.readMore1').hide();
  $('.readLess1').show();
}
function readMoreFunction2() {
  $('.moreText2').slideDown();
  $('.readMore2').hide();
  $('.readLess2').show();
}
function LearnMoreFunction() {
  $('.More3').slideDown();
  $('.LearnMore').hide();
}

$('.readMore1').click(readMoreFunction1);
$('.readMore2').click(readMoreFunction2);
$('.LearnMore').click(LearnMoreFunction);

//I need to tell Jquery to hide the new stuff when I click on 'Read Less' and unhide 'readMore' at the same time
function readLessFunction1() {
  $('.moreText1').slideUp();
  $('.readMore1').show();
  $('.readLess1').hide();
}
function readLessFunction2() {
  $('.moreText2').slideUp();
  $('.readMore2').show();
  $('.readLess2').hide();
}

$('.readLess1').click(readLessFunction1);
$('.readLess2').click(readLessFunction2);
