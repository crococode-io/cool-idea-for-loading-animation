/**
 * demo.js
 * https://www.instagram.com/croco.code/
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2022, CROCO.CODE
 * https://www.instagram.com/croco.code/
 */

// wrap each letter in a span
let stringNew = document.querySelector('.loading-letters');
let string = document.querySelector('.loading-letters').innerHTML;
let i = 0, length = string.split("").length;
stringNew.innerHTML = '';
for (i; i < length; i++) {
  stringNew.innerHTML += "<span class='letter'>" + string[i] + "</span>";
}

// animate polymorph
anime({
  targets: '.loading .polymorph',
  points: [
    { value: '70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369' },
    { value: '70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369' },
    { value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369' },
    { value: '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369' }
  ], easing: 'easeOutQuad', duration: 2000, loop: true
});

// animate letters
anime.timeline({
    loop: true
  })
  .add({
    targets: '.loading-letters .letter',
    translateX: [40,0], translateZ: 0, opacity: [0,1], easing: "easeOutExpo", duration: 1200,
    delay: function(el, i) { return 500 + 30 * i; }
  }).add({
    targets: '.loading-letters .letter',
    translateX: [0,-30], opacity: [1,0], easing: "easeInExpo", duration: 1100,
    delay: function(el, i) { return 100 + 30 * i;  }
  });