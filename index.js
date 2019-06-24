var clear = $(".clear-btn");
var stars = $("#star-container li")

stars.on('mouseover', hoverStars);
stars.on('click', fillStars);
clear.on('click', clearStars);

function hoverStars() {
  var starNum = $(this).index() + 1;
  stars.removeClass('filled');
  stars.removeClass('hover');
  stars.slice(0, starNum).addClass('hover');
}
function fillStars() {
  var starNum = $(this).index() + 1;
  stars.removeClass('filled');
  stars.slice(0, starNum).addClass('filled');
}

// function hoverStars() {
//   stars.removeClass('filled');
//   stars.removeClass('hover');
//   var starNum = $(this).index() + 1;
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
//   var starNum = $(this).index() + 1;
//   for(i=1; i <=5; i++) {
//     numID = "#" + i.toString();
//     if(i<=starNum) {
//       $(numID).addClass('filled');
//     }
//   }
// }
function clearStars() {
  stars.removeClass('filled');
  stars.removeClass('hover');
}
