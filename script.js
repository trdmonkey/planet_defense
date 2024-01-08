class Planet {
    constructor(game) {
        this.game = game;
        this.x = this.game.width * 0.5; // Ubicacion horizontal de la bola negra
        this.y = this.game.height * 0.5; // Ubicacion vertical de la bola negra
        this.radius = 80; // Tamaño de la bola negra
        this.image = document.getElementById('planet'); // Llamamos a la imagen central (la del planeta)
    }
    draw(context) {
        context.drawImage(this.image, this.x - 100, this.y - 100);
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        // context.fill(); // Pone la bola negra con el background negro por completo
        context.stroke(); // Pone la bola negra solo negro el borde
    }
}

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.width = this.canvas.width;
        this.height = this.canvas.height;

        this.planet = new Planet(this);

        this.mouse = {
            x: 0,
            y: 0
        }

        window.addEventListener('mousemove', e => {
            console.log(e);
            this.mouse.x = e.x;
            this.mouse.y = e.y;
        });
    }
    render(context) {
        this.planet.draw(context);
        context.beginPath();
        context.moveTo(this.planet.x, this.planet.y);
        context.lineTo(this.mouse.x, this.mouse.y);
        context.stroke();
    }
}

window.addEventListener('load', function() {
    const canvas = document.getElementById('canvas1'); // toma el id creado en el html
    const ctx = canvas.getContext('2d'); 
    canvas.width = 800; // tamaño horizontal del canvas
    canvas.height = 800; // tamaño vertical del canvas
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;

    const game = new Game(canvas);
    game.render(ctx);
});