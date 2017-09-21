var width = screen.width/20.8888888885;
var height = screen.height/20.07;
var boxes = Number(width*height);
var boxHolder = document.getElementById('boxHolder')

  for(var i = 0; i <=boxes ; i++){
    let newBox = document.createElement('div');
    boxHolder.append(newBox);
  }
boxHolder.addEventListener("click", function( event ) {
  if(event.target.nodeName === "DIV"){
  event.target.style.backgroundColor = "black"
  }
})
