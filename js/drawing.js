'use strict';

//wait for document to load
window.onload = function() {

  //YOUR CODE GOES IN HERE

  var canvas = document.querySelector('#canvas');
  var brush = canvas.getContext('2d');

  var canvas = document.querySelector('#canvas');



function mouseDrawing(){
  brush.fillStyle="#39275B"
//respond to mouse clicks in the canvas
canvas.addEventListener('click', function(event){
    //get location information from event
    var x = event.offsetX;
    var y = event.offsetY;

    brush.beginPath();
    brush.arc(x,y,20,0,2*Math.PI);
    brush.fill();
});

};

var lastPoint =undefined; 
canvas.addEventListener('mousedown', function(event){
  var input = document.querySelector('#picker');
  brush.strokeStyle = input.value;
  brush.lineWidth = 3;
    lastPoint = {x:event.offsetx,y:event.offsetY};
    
    brush.beginPath();
    brush.moveTo(x,y);
     //brush.arc(x,y,5,0,2*Math.PI);
 
});


canvas.addEventListener('mousemove', function(event){
  if(lastPoint){
  brush.beginPath();
  //brush.arc(event.offsetX, event.offsetY, 5, 0, 2*Math.PI);
    brush.moveTo(event.offsetX,event.offsetY);
   //brush.arc(x,y,20,0,2*Math.PI);
   // brush.fill();

    brush.lineTo(event.offsetX, event.offsetY);
    
      brush.beginPath();
     lastPoint = {x:event.offsetx,y:event.offsetY};
  brush.stroke();
  }
});



  canvas.addEventListener('mouseup', function(event){
  	pressed = false;
    lastPoint = undefined;
  });



function moveRect(){
  rect.y += rect.dy;
  render();
}

window.setInterval(moveRect,20);

var renderFrame = function(timestamp) {
  moveRect();
  render();
  requestAnimationFrame(renderFrame);
};

requestAnimationFrame(renderFrame); //request frame to start




function movingRectangle(){
  var rect = {x:20,y:30,width:20,heigh:70,dy:1};

  var render = function(){

    brush.clearRect(0,0,canvas.width,canvas.height);
    var input = document.querySelector('#picker');
  brush.strokeStyle = input.value;
    brush.fillRect(rect.x,rect.y,rect.width,rect.height);
  }

document.addEventLister('keydown',function(event){
  if(event.which==38){
    rect.y -=5;
  }else if(event.which ==40){
    rect.y+=5;
  }
  render();
});
}
// brush.fillStyle = "#39275B";
// brush.strokeStyle= "#C79900";

// brush.fillRect(20,40,50,100);

// brush.stroke();
// brush.moveTo(200,200);
// brush.lineTo(220,400);
// brush.lineTo(270,250);
// brush.lineTo(320,200);
// brush.stroke();
// brush.closePath();
// brush.fillStyle = "#C79900";
// brush.fill();

// brush.lineTo(100,100);
// brush.beginPath();
// //drawing a circle!                 //in radians, CCW
// brush.arc(340,60, 30,0*Math.PI,2*Math.PI);
// brush.fill()

// brush.stroke(); //draw the path!



// brush.fillStyle = "#C79900";
// brush.fillRect(50,150,350,250);
// brush.fillRect(150,100,150,100);

//  brush.moveTo(200,200);
//  brush.fillStyle = "#000000";
// brush.arc(150,220, 30,0*Math.PI,2*Math.PI);
// brush.fill();
//  brush.moveTo(300,300);
// brush.arc(300,220, 30,0*Math.PI,2*Math.PI);
// brush.fill();
// brush.closePath();


// brush.moveTo(150,400);
// brush.beginPath();
//  brush.fillStyle = "#FF0000";
//  brush.arc(220,320, 30,0*Math.PI,2*Math.PI);
//  brush.fill();


};