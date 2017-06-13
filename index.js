// (function() {
//   'use strict';
//
//   // YOUR CODE HERE
// })();
var stopLight = document.getElementById('stopLight')
var stopButton = document.getElementById('stopButton')
stopButton.addEventListener('click', function(){
  stopLight.classList.toggle('stop')
})
var slowLight = document.getElementById('slowLight')
var slowButton = document.getElementById('slowButton')
slowButton.addEventListener('click', function(){
  slowLight.classList.toggle('slow')
})
var goLight = document.getElementById('goLight')
var goButton = document.getElementById('goButton')
goButton.addEventListener('click', function(){
  goLight.classList.toggle('go')
})
var button = document.getElementsByClassName('button');
for (var i=0;i<button.length; i++) {
  button[i].addEventListener('mouseenter', function(){
    console.log("Entered " + this.innerText + " button")
  })
}
for (var i=0; i<button.length; i++) {
  button[i].addEventListener('mouseleave', function(){
    console.log("Left " + this.innerText + " button")
  })
}
