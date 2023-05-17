//generate number
function getRandom(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// if random has no variable it will generate a number random from 0 and 1
function random(){
    switch(arguments.length){
        case 0:
            return Math.random();
            break;
        case 1:
            return Math.random() * arguments[0];
            break;
        case 2:
            return arguments[0] + Math.random()*(arguments[1] - arguments[0]);
            break;
        default:
            console.error("too many arguments passed to random()");
            break;
    }
}

//generate rgb
function getRGB(){
    let red = getRandom(0,255);
    let green = getRandom(0,255);
    let blue = getRandom(0,255);
    return `rgb(${red},${green},${blue})`
}

//draw circle
function makeCircle(x, y, radius) {
    let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", radius);
    circle.setAttribute("fill", getRGB());
    return circle;
  }


//make Square
  function makeSquare(x,y,width,height){
    let newSquare = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    newSquare.setAttribute("x", x);
    newSquare.setAttribute("y", y);
    newSquare.setAttribute("width", width);
    newSquare.setAttribute("height", height);
    newSquare.setAttribute("fill", getRGB());
    return newSquare;
}


//gets centre point cx, cy and rotates them by 'angle'
function rotate(angle, xInput, yInput){
    let angleOutput = angle; 
    let xOutput = xInput;
    let yOutput = yInput;
    return `rotate(${angleOutput},${xOutput},${yOutput})`;
}

//make rgb line
function makeRGB(redInputValue, greenInputValue, blueInputValue) {
    let redOutputValue = redInputValue ?? getRandom(0,255);
    let greenOutputValue = greenInputValue ?? getRandom(0,255);
    let blueOutputValue = blueInputValue ?? getRandom(0,255);
    return `rgb(${redOutputValue},${greenOutputValue},${blueOutputValue})`
}

function makeGrey() {
    let greyTone = getRandom(0,255);
    return `rgb(${greyTone},${greyTone},${greyTone})`
}