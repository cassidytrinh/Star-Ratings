var clear = $(".clear-btn");
var stars = $("#star-container li")

stars.on('mouseenter', hoverStars);
stars.on('mouseleave', clearHover);
stars.on('click', fillStars);
clear.on('click', clearFill);

function hoverStars() {
  var starNum = $(this).index() + 1;
  stars.removeClass('filled');
  stars.removeClass('hover');
  stars.slice(0, starNum).addClass('hover');
}
function fillStars() {
  var starNum = $(this).index() + 1;
  stars.removeClass('filled');
  stars.removeClass('hover');
  stars.slice(0, starNum).addClass('filled');
}
function clearHover() {
  stars.removeClass('hover');
}
function clearFill() {
  stars.removeClass('filled');
}
// function hoverStars() {
//   stars.removeClass('filled');
//   stars.removeClass('hover');
//   var starNum = $(this).attr('id');
//   for(i=1; i <=5; i++) {
//     numID = "#" + i.toString();
//     if(i<=starNum) {
//       $(numID).addClass('hover');
//     }
//   }
// }
// function fillStars() {
//   stars.removeClass('filled');
//   stars.removeClass('hover');
//   var starNum = $(this).attr('id');
//   for(i=1; i <=5; i++) {
//     numID = "#" + i.toString();
//     if(i<=starNum) {
//       $(numID).addClass('filled');
//     }
//   }
// }
