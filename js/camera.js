'use strict';

//wait for document to load
window.onload = function() {

  //YOUR CODE GOES IN HERE

//get userAgent string (which Browser)
var browserName = navigator.userAgent; 

//get whether has Java--you want false!
var hasJava = navigator.javaEnabled();

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
                          navigator.mozGetUserMedia || navigator.msGetUserMedia;


//how to call
document.querySelector('#record').addEventListener('click', function(){
navigator.getUserMedia({video:{mandatory:{maxWith:300, maxHeight:300}}}, 
function(mediaStream){
   localMediaStream = mediaStream;
     var video=document.querySelector('video');
   video.src = window.URL.createObjectURL(mediaStream);},
   function(err) {
   console.log(err);
});
})

var localMediaStream;
  var canvas = document.querySelector('#canvas');
  var brush = canvas.getContext('2d');
document.querySelector('#stop').addEventListener('click', function(){
//will pause the video (like button was pressed)
video.pause();

//get all tracks from the stream
var tracks = localMediaStream.getTracks();
tracks.forEach(function(track){
   track.stop(); //stop each track
});
});

document.querySelector('#selfie').addEventListener('click',function(){
   canvas.width = video.clientWidth;
   canvas.height = video.clientHeight;
   brush.drawImage(video,0,0);
  
  mouseDrawing();
});

document.querySelector('#save').addEventListener('click',function(){
var snapshot = canvas.toDataURL('image/png');

var link = document.createElement('a');
link.href = snapshot;
link.download = 'selfie.png';

link.click();

});

};