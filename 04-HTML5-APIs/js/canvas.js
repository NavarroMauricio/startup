function draw() {

    const canvas = document.getElementById("canvasId");
    const context = canvas.getContext("2d");
    drawCircle(context, randomColor());
    drawSquare(context, randomColor());
    drawTriangle(context, randomColor());

}

const drawCircle = (context, color) => {

    context.beginPath();
    context.strokeStyle = color;
    context.arc(200, 50, 40, 0, 2 * Math.PI);
    context.stroke();
    context.closePath();


}

const drawSquare = (context, color) => {

    context.beginPath();
    context.strokeStyle = color;
    context.strokeRect(150, 200, 50, 50);
    context.closePath();
}

const drawTriangle = (context, color) => {

    context.beginPath();
    context.fillStyle = color;
    context.moveTo(75, 50);
    context.lineTo(100, 75);
    context.lineTo(100, 25);
    context.fill();
}

const randomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

window.addEventListener("load", draw);