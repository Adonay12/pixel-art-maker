var width = screen.width/20.8888888885;
var height = screen.height/20.07;

var boxes = Math.floor(width*height);
console.log(boxes);
var boxHolder = document.getElementById('boxHolder')

  for(var i = 0; i <=boxes - 1; i++){
    let newBox = document.createElement('div');
    boxHolder.append(newBox);
  }
var colorChoosed = 'white';
var containerColors = document.getElementsByClassName('col');

for(var i = 0; i < containerColors.length; i++){

containerColors[i].addEventListener("click", function( event ) {
  if(event.target.nodeName === "DIV"){
  colorChoosed =  event.target.id;
  }
})
}

boxHolder.addEventListener("click", function( event ) {
  if(event.target.nodeName === "DIV"){
  event.target.style.backgroundColor = colorChoosed;
  }
})
