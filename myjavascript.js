var one = "Hello";
// alert(one);
// console.log(one);
// console.log(one);
// document.getElementById('test').innerHTML = one;
// $('#test').text(one);
// $('#test').fadeOut("Slow");
// // $('.myclass').text(one);
// document.getElementsByClassName('myclass')[0].innerHTML = one;
// // document.getElementsByClassName('myclass')[0].style.color = 'red';
// $('.myclass').css('color','green');
// $('.myclass').css('background-color','black');
// function mySumm(a,b) {
//   return a + b;
// }
// console.log(mySumm(3,5));
// // function mySumShow(a,b) {
// //   // result = a + b;
// //   document.getElementsByClassName('myclass')[0].innerHTML = result;
// // }
// // mySumShow(5,7);
// function mySumShow(a,b) {
//   document.getElementsByClassName('myclass')[0].innerHTML = mySumm(a,b);
// }
// mySumShow(5,9);
// test.onclick = function() {
//   alert('Привет');
// }
var say = function() {
  alert('Привет');
}

// test.addEventListener('click', say);
// test.addEventListener('contextmenu', say);
test.addEventListener('mouseover', say);
