// function allowDrop(ev) {
//     ev.preventDefault();
//   }
  
//   function drag(ev) {
//     ev.dataTransfer.setData("text", ev.target.id);
//   }
  
//   function drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text");
//     ev.target.appendChild(document.getElementById(data));
//   }

let divTitle = document.getElementById('div-title');
let xCord = document.getElementById('x-cord');
let yCord = document.getElementById('y-cord')
let square = document.getElementById('div1');
let background = document.getElementById('background')
let xValue = square.offsetLeft
let yValue = square.offsetTop
let currentDiv
let mouseX
let mouseY


//functions
const printCords = (event)=> {
  console.log(event);
  xCord.innerText = xValue;
  yCord.innerText = yValue;
  currentDiv = event.target.id;
  divTitle.innerText = currentDiv;
}

const dragging = (event)=> {
  mouseX = event.pageX
  mouseY = event.pageY
  event.target=background
  xCord.innerText = mouseX;
  yCord.innerText = mouseY;
}

const dropDiv = (event)=> {
  var offset = event.dataTransfer.getData("text/plain").split(',');
  var dm = document.getElementById('dragme');
  dm.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
  dm.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
  event.preventDefault();
  return false;
  // document.getElementById(currentDiv).setAttribute('style', 'top: '+`${mouseY}`)
}

//event listeners
square.addEventListener('dragstart', printCords)
background.addEventListener('dragover', dragging)
background.addEventListener('drop', dropDiv)