

window.addEventListener("resize", resizeSvg);


const svg = document.getElementById('basesvg');
svg.setAttribute("viewBox", `0 0 ${window.innerWidth} ${window.innerHeight}`);

let bbox = svg.getBoundingClientRect();

function resizeSvg(){
    svg.setAttribute("viewBox", `0 0 ${bbox.width} ${bbox.height}`);
}

let width = bbox.width;
let height = bbox.height;

let centreX = width/2;
let centreY = height/2;

let currentSize = width;
let currentAngle = 0;
let sizeShrink = 50;
let angleChange = 5;
let speed = 15;



svg.style.backgroundColor = 'darkslategrey';

function drawSquare(size, angle) {
    let x = centreX - size/2;
    let y = centreY - size/2;
    let newRectangle = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    newRectangle.setAttribute("x", x);
    newRectangle.setAttribute("y", y);
    newRectangle.setAttribute("width", size);
    newRectangle.setAttribute("height", size);
    newRectangle.setAttribute("transform", rotate(angle ,centreX ,centreY))
    newRectangle.setAttribute("fill", makeRGB());
    return newRectangle;
}

class spinSquare{
    constructor(size,angle,duration){
        this.size = size;
        this.angle = angle;
        this.svgElement;
        this.duration = duration;
    }

    drawSpinSquare(){
        this.svgElement = drawSquare(this.size,this.angle);
        svg.appendChild(this.svgElement);
        this.addSpinAnimation();
    }

    addSpinAnimation(){
        let aniElement = document.createElementNS('http://www.w3.org/2000/svg', 'animateTransform');
        aniElement.setAttribute('attributeName','transform')
        aniElement.setAttribute('type', `rotate`);
        aniElement.setAttribute('dur', `${this.duration}`);
        aniElement.setAttribute('from', `${this.angle} ${centreX} ${centreY}`);
        aniElement.setAttribute('to', `${this.angle+360} ${centreX} ${centreY}`);
        aniElement.setAttribute('repeatCount',`indefinite`);
        this.svgElement.appendChild(aniElement);
    }
}

function createSquareArray(num){
    let squareArray = [];

    for (let index = 0; index < num; index++) {
        squareArray.push(new spinSquare(currentSize,currentAngle,speed));
        currentSize = currentSize - sizeShrink;
        currentAngle = currentAngle + angleChange;
        speed = speed - 0.4;
    }

    return squareArray;
}

let squares = createSquareArray(50);

for (let square of squares) {
    square.drawSpinSquare();
}
