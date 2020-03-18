function drawSquareAnimated() {

    let rdm = Math.floor(Math.random() * 4);

    moving(rdm);

}

function drawSqua(ctx, x, y, color) {

    ctx.clearRect(0, 0, 400, 400);
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 50, 50);
}

// should I use switch here?
function moving(rdm) {

    const canvas2 = document.getElementById("canvasTwo");
    const ctx = canvas2.getContext("2d");
    let x = 150;
    let y = 150;

    if (rdm == 0 && y > 0) {

        drawSqua(ctx, x, y - 100, "red");

    }

    if (rdm == 1 && y < 400) {

        drawSqua(ctx, x, y + 100, "blue");
    }

    if (rdm == 2 && x > 0) {

        drawSqua(ctx, x - 100, y, "green")

    }
    if (rdm == 3 && x < 400) {
        drawSqua(ctx, x + 100, y, "yellow")
    }
}


const startAnimation = () => {

    setInterval(drawSquareAnimated, 1000);

}

window.addEventListener("load", startAnimation);