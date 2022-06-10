const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height)

class Sprite {
    constructor({position, velocity}) {
        this.position = position
        this.velocity = velocity
    }

    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, 482, 150)
    }

    update() {
       this.draw() 
       this.position.y += this.velocity.y
    }
}

const terrain1 = new Sprite ({
    position: {
    x: 0,
    y: 0
    },
    velocity: {
        x: 0,
        y: 5,
    }
})

const terrain2 = new Sprite ({
    position: {
    x: 542,
    y: 0
    },
    velocity: {
        x: 0,
        y: 5,
    }
})

console.log(terrain1)

function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    terrain1.update()
    terrain2.update()
}

animate()

document.addEventListener("mousemove", () => {
    let mousex = event.clientX; // Gets Mouse X
    let mousey = event.clientY; // Gets Mouse Y
    console.log([mousex, mousey]); // Prints data
  });

  if (mousex, mousey == terrain1.position.x, terrain1.position.y) {
    location.reload();
  }