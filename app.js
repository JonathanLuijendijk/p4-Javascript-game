const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024
canvas.height = 576


c.fillRect(0, 0, canvas.width, canvas.height)

/* Creating a new audio object. */

let bg_SOUND=new Audio('music/Mettaton-v1.mp3');
    
        bg_SOUND.volume=0.5;      
    
        bg_SOUND.play();

/* The Backgroundimg class is a class that creates a background image object that can be drawn to the
canvas. */

class Backgroundimg {
    constructor({position, imageSrc }) {
        this.position = position
        this.image = new Image ()
        this.image.src - imageSrc
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }

    update() {
       this.draw() 
    }
}


/* It's a class that creates a sprite with a position, velocity, width, and height. */

class Sprite {
    constructor({position, velocity, width, height}) {
        this.position = position
        this.velocity = velocity
        this.width = width
        this.height = height
    }

    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
       this.draw() 
       this.position.y += this.velocity.y
       this.position.x += this.velocity.x
    }
}

/* It's a class that creates a sprite with a position, velocity, width, and height. */

class Sprite1 {
    constructor({position, velocity, width, height}) {
        this.position = position
        this.velocity = velocity
        this.width = width
        this.height = height
    }

    draw() {
        c.fillStyle = 'RoyalBlue'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
       this.draw() 
       this.position.y += this.velocity.y
       this.position.x += this.velocity.x
    }
}

/* It's a class that creates a sprite with a position, velocity, width, and height. */

class Sprite2 {
    constructor({position, velocity, width, height}) {
        this.position = position
        this.velocity = velocity
        this.width = width
        this.height = height
    }

    draw() {
        c.fillStyle = 'green'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
       this.draw() 
       this.position.y += this.velocity.y
       this.position.x += this.velocity.x
    }

    clicking() {
        this.clicking = true;
    }
}

/* It's a class that creates a sprite with a position, velocity, width, and height. */

class Sprite3 {
    constructor({position, velocity, width, height}) {
        this.position = position
        this.velocity = velocity
        this.width = width
        this.height = height
    }

    draw() {
        c.fillStyle = 'transparent'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
       this.draw() 
       this.position.y += this.velocity.y
       this.position.x += this.velocity.x
    }
}

/* The Sprite4 class is a class that creates a sprite that is a line. */

class Sprite4 {
    constructor({position, velocity}) {
        this.position = position
        this.velocity = velocity
    }

    draw() {
        drawLine(c, [this.position.x, this.position.y], [this.position.w, this.position.z], 'red', 15);
    }

    update() {
       this.draw() 
       this.position.y += this.velocity.y
       this.position.z += this.velocity.y
    }
}

class Sprite5 {
    constructor({position, velocity, width, height}) {
        this.position = position
        this.velocity = velocity
        this.width = width
        this.height = height
    }

    draw() {
        c.fillStyle = 'black'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
       this.draw() 
       this.position.y += this.velocity.y
       this.position.x += this.velocity.x
    }
}

class Sprite6 {
    constructor({position, velocity, width, height}) {
        this.position = position
        this.velocity = velocity
        this.width = width
        this.height = height
    }

    draw() {
        c.fillStyle = 'DarkBlue'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
       this.draw() 
       this.position.y += this.velocity.y
       this.position.x += this.velocity.x
    }
}

/* Creating a function called playerPositionX that takes in a parameter called e. */

const playerPositionX = function(e) {
    while (player.position.x != e.clientX) {
        player.position.x = e.clientX
        console.log(e.clientX);
    }
}

/* Creating a function called playerPositionY that takes in a parameter called e. */

const playerPositionY = function(e) {
    while (player.position.y != e.clientY) {
        player.position.y = e.clientY ;
        console.log(e.clientY);
    }
}

/* Adding an event listener to the window object. The event listener is listening for the mousemove
event. When the mousemove event is triggered, the playerPositionX function is called. */

window.addEventListener("mousemove", playerPositionX);

/* Adding an event listener to the window object. The event listener is listening for the mousemove
event. When the mousemove event is triggered, the playerPositionY function is called. */

window.addEventListener("mousemove", playerPositionY);



/* Creating a new instance of the Backgroundimg class. */

const background = new Backgroundimg ({
    position: {
    x: 0,
    y: 0
    },
    imageSrc: './img/background.png'
})


/* Creating a new sprite object. */

const player = new Sprite1 ({
    position: {
    x: 502,
    y: 288
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 20,
    height: 20
})

const cannonLoader = new Sprite1 ({
    position: {
    x: 0,
    y: -1000
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 20,
    height: 20
})


const bossHead = new Sprite ({
    position: {
    x: 360,
    y: -1000
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 300,
    height: 170

})

const bossLeftEye = new Sprite5 ({
    position: {
    x: 435,
    y: -1000
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 30,
    height: 30

})

const bossRightEye = new Sprite5 ({
    position: {
    x: 555,
    y: -1000
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 30,
    height: 30

})

const bossMouth = new Sprite5 ({
    position: {
    x: 435,
    y: -1000
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 150,
    height: 20

})

const terrain1 = new Sprite ({
    position: {
    x: 1450,
    y: -10
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 547,
    height: 300

})


const terrain2 = new Sprite ({
    position: {
    x: 2027,
    y: -10
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 497,
    height: 300
})

const terrain3 = new Sprite ({
    position: {
    x: 0,
    y: -1676
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 1024,
    height: 576
})

const tunnelBlock1 = new Sprite ({
    position: {
    x: 0,
    y: -5001
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 280,
    height: 5000

})

const tunnelBlock2 = new Sprite ({
    position: {
    x: 743,
    y: -5001
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 280,
    height: 5000

})

const bossShield1 = new Sprite ({
    position: {
    x: 0,
    y: -1000
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 1024,
    height: 15

})

const bossShield2 = new Sprite ({
    position: {
    x: 0,
    y: -1000
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 1024,
    height: 15

})

const bossShield3 = new Sprite ({
    position: {
    x: 0,
    y: -1000
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 1024,
    height: 15

})

const cannonShooter = new Sprite5 ({
    position: {
    x: 0,
    y: -1000
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 50,
    height: 120

})

const cannonBall1 = new Sprite6 ({
    position: {
    x: 0,
    y: -1000
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 40,
    height: 40

})

const cannonBall2 = new Sprite6 ({
    position: {
    x: 0,
    y: -1000
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 40,
    height: 40

})

const cannonBall3 = new Sprite6 ({
    position: {
    x: 0,
    y: -1000
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 40,
    height: 40

})

const endBlock1 = new Sprite ({
    position: {
    x: 0,
    y: -1250
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 1024,
    height: 600
})

const endBlock2 = new Sprite ({
    position: {
    x: 0,
    y: -1250
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 1024,
    height: 600
})

const sidewaysBlock1 = new Sprite ({
    position: {
    x: -50,
    y: -1000
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 125,
    height: 50

})
const sidewaysBlock2 = new Sprite ({
    position: {
    x: 0,
    y: -1000
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 125,
    height: 50

})
const sidewaysBlock3 = new Sprite ({
    position: {
    x: -50,
    y: -1000
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 125,
    height: 50

})
const sidewaysBlock4 = new Sprite ({
    position: {
    x: 0,
    y: -1000
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 125,
    height: 50

})
const sidewaysBlock5 = new Sprite ({
    position: {
    x: -50,
    y: -1000
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 125,
    height: 50

})
const sidewaysBlock6 = new Sprite ({
    position: {
    x: 0,
    y: -1000
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 125,
    height: 50

})

const rainBlock1 = new Sprite ({
    position: {
    x: 205,
    y: -1000
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 50,
    height: 50
})

const rainBlock2 = new Sprite ({
    position: {
    x: 700,
    y: -1200
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 50,
    height: 50
})

const rainBlock3 = new Sprite ({
    position: {
    x: 960,
    y: -1400
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 50,
    height: 50
})

const rainBlock4 = new Sprite ({
    position: {
    x: 400,
    y: -1600
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 50,
    height: 50
})

const rainBlock5 = new Sprite ({
    position: {
    x: 725,
    y: -1800
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 50,
    height: 50
})

const rainBlock6 = new Sprite ({
    position: {
    x: 520,
    y: -2000
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 50,
    height: 50
})

const rainBlock7 = new Sprite ({
    position: {
    x: 201,
    y: -2200
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 50,
    height: 50
})

const rainBlock8 = new Sprite ({
    position: {
    x: 28,
    y: -2400
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 50,
    height: 50
})

const rainBlock9 = new Sprite ({
    position: {
    x: 264,
    y: -2600
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 50,
    height: 50
})

const rainBlock10 = new Sprite ({
    position: {
    x: 868,
    y: -2800
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 50,
    height: 50
})

const rainBlock11 = new Sprite ({
    position: {
    x: 300,
    y: -3000
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 50,
    height: 50
})

const rainBlock12 = new Sprite ({
    position: {
    x: 410,
    y: -3200
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 50,
    height: 50
})

const rainBlock13 = new Sprite ({
    position: {
    x: 600,
    y: -3400
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 50,
    height: 50
})

const rainBlock14 = new Sprite ({
    position: {
    x: 80,
    y: -3600
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 50,
    height: 50
})

const rainBlock15 = new Sprite ({
    position: {
    x: 238,
    y: -3800
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 50,
    height: 50
})

const rainBlock16 = new Sprite ({
    position: {
    x: 690,
    y: -4000
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 50,
    height: 50
})



const background1 = new Sprite3 ({
    position: {
    x: 60,
    y: -330 
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 904,
    height: 320
})

const background2 = new Sprite3 ({
    position: {
    x: 0,
    y: -1000
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 1024,
    height: 576
})

const background3 = new Sprite3 ({
    position: {
    x: 0,
    y: 0
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 1024,
    height: 450
})

const background4 = new Sprite3 ({
    position: {
    x: 0,
    y: 0
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 1024,
    height: 576
})

const background5 = new Sprite3 ({
    position: {
    x: 0,
    y: -1000
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 1024,
    height: 576
})

const background6 = new Sprite3 ({
    position: {
    x: 0,
    y: -1000
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 1024,
    height: 576
})

const background7 = new Sprite3 ({
    position: {
    x: 0,
    y: -1000
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 1024,
    height: 576
})

const bossDialogue1 = new Sprite3 ({
    position: {
    x: 280,
    y: -1000
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 464,
    height: 200
})

const bossDialogue2 = new Sprite3 ({
    position: {
    x: 280,
    y: -1000
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 464,
    height: 200
})

const startButton = new Sprite2 ({
    position: {
    x: 462,
    y: 475
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 100,
    height: 50
})

const startButton2 = new Sprite2 ({
    position: {
    x: 241,
    y: 475
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 100,
    height: 50
})

const startButton3 = new Sprite2 ({
    position: {
    x: 683,
    y: 475
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 100,
    height: 50
})

const bossButton1 = new Sprite2 ({
    position: {
    x: 0,
    y: -1000
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 50,
    height: 50
})

const bossButton2 = new Sprite2 ({
    position: {
    x: 0,
    y: -1000
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 50,
    height: 50
})

const bossButton3 = new Sprite2 ({
    position: {
    x: 0,
    y: -1000
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 50,
    height: 50
})

const bossButton4 = new Sprite2 ({
    position: {
    x: 0,
    y: -1000
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 50,
    height: 50
})

const bossButton5 = new Sprite2 ({
    position: {
    x: 0,
    y: -1000
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 25,
    height: 25
})

const endButton = new Sprite2 ({
    position: {
    x: 462,
    y: -600
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 100,
    height: 50
})

const openDoorButton = new Sprite2 ({
    position: {
    x: 20,
    y: -200
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 20,
    height: 20
})

const openDoorButton2 = new Sprite2 ({
    position: {
    x: 984,
    y: -200
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 20,
    height: 20
})


/* Calling the update function for each object. */

function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = 'gray'
    c.fillRect(0, 0, canvas.width, canvas.height)

    player.update()
    cannonLoader.update()

    background.update()
    background1.update()
    background2.update()
    background3.update()
    background4.update()
    background5.update()
    background6.update()
    background7.update()

    bossDialogue1.update()
    bossDialogue2.update()
    bossHead.update()
    bossLeftEye.update()
    bossRightEye.update()
    bossMouth.update()
    bossButton1.update()
    bossButton2.update()
    bossButton3.update()
    bossButton4.update()
    bossButton5.update()
    bossShield1.update()
    bossShield2.update()
    bossShield3.update()

    terrain1.update()
    terrain2.update()
    terrain3.update()

    sidewaysBlock1.update()
    sidewaysBlock2.update()
    sidewaysBlock3.update()
    sidewaysBlock4.update()
    sidewaysBlock5.update()
    sidewaysBlock6.update()

    tunnelBlock1.update()
    tunnelBlock2.update()

    cannonShooter.update()
    cannonBall1.update()
    cannonBall2.update()
    cannonBall3.update()

    rainBlock1.update()
    rainBlock2.update()
    rainBlock3.update()
    rainBlock4.update()
    rainBlock5.update()
    rainBlock6.update()
    rainBlock7.update()
    rainBlock8.update()
    rainBlock9.update()
    rainBlock10.update()
    rainBlock11.update()
    rainBlock12.update()
    rainBlock13.update()
    rainBlock14.update()
    rainBlock15.update()
    rainBlock16.update()

    startButton.update()
    startButton2.update()
    startButton3.update()
    endButton.update()
    openDoorButton.update()
    openDoorButton2.update()
    endBlock1.update()
    endBlock2.update()


    /* Checking if the player is colliding with the terrain1 object. If it is, it will display the text
    "YOU DIED" on the canvas. It will then reload the page.
    */ 

    if (player.position.x <= terrain1.position.x + terrain1.width 
        && player.position.x + player.width >= terrain1.position.x 
        && player.position.y + player.height >= terrain1.position.y 
        && player.position.y <= terrain1.position.y + terrain1.height) {

        c.fillStyle = 'white';
        c.font = "48px Arial";
        c.fillText("YOU DIED", 400, 100);

        console.log('Entered Deathzone 1');

        setTimeout (() => {
            window.location.reload();
        }, 100)

        player.position.x = 1000;
        player.position.y = 1000;
        terrain1.velocity.y = 0;
        terrain2.velocity.y = 0;
        terrain3.velocity.y = 0;
        openDoorButton.velocity.y = 0;
        openDoorButton2.velocity.y = 0;

        window.location.reload();
    } else if (player.position.x <= terrain2.position.x + terrain2.width 
        && player.position.x + player.width >= terrain2.position.x 
        && player.position.y + player.height >= terrain2.position.y 
        && player.position.y <= terrain2.position.y + terrain2.height) {
        
        c.fillStyle = 'white';
        c.font = "48px Arial";
        c.fillText("YOU DIED", 400, 100);

        console.log('Entered Deathzone 2')

        setTimeout (() => {
            window.location.reload();
        }, 100)

        player.position.x = 1000;
        player.position.y = 1000;
        terrain1.velocity.y = 0;
        terrain2.velocity.y = 0;
        terrain3.velocity.y = 0;
        endButton.velocity.y = 0;
        openDoorButton.velocity.y = 0;
        openDoorButton2.velocity.y = 0;

    } else if (player.position.x <= terrain3.position.x + terrain3.width 
        && player.position.x + player.width >= terrain3.position.x 
        && player.position.y + player.height >= terrain3.position.y 
        && player.position.y <= terrain3.position.y + terrain3.height) {
        
        c.fillStyle = 'white';
        c.font = "48px Arial";
        c.fillText("YOU DIED", 400, 100);

        console.log('Entered Deathzone 2')

        setTimeout (() => {
            window.location.reload();
        }, 100)

        player.position.x = 1000;
        player.position.y = 1000;
        terrain1.velocity.y = 0;
        terrain2.velocity.y = 0;
        terrain3.velocity.y = 0;
        endButton.velocity.y = 0;
        openDoorButton.velocity.y = 0;
        openDoorButton2.velocity.y = 0;

    } else if (player.position.x <= bossHead.position.x + bossHead.width 
        && player.position.x + player.width >= bossHead.position.x 
        && player.position.y + player.height >= bossHead.position.y 
        && player.position.y <= bossHead.position.y + bossHead.height) {
        
        c.fillStyle = 'white';
        c.font = "48px Arial";
        c.fillText("YOU DIED", 400, 100);

        setTimeout (() => {
            window.location.reload();
        }, 100)

    } else if (player.position.x <= tunnelBlock1.position.x + tunnelBlock1.width 
        && player.position.x + player.width >= tunnelBlock1.position.x 
        && player.position.y + player.height >= tunnelBlock1.position.y 
        && player.position.y <= tunnelBlock1.position.y + tunnelBlock1.height) {
        
        c.fillStyle = 'white';
        c.font = "48px Arial";
        c.fillText("YOU DIED", 400, 100);

        setTimeout (() => {
            window.location.reload();
        }, 100)

        player.position.x = 1000;
        player.position.y = 1000;
        terrain1.velocity.y = 0;
        terrain2.velocity.y = 0;
        terrain3.velocity.y = 0;
        endButton.velocity.y = 0;
        openDoorButton.velocity.y = 0;
        openDoorButton2.velocity.y = 0;

    } else if (player.position.x <= tunnelBlock2.position.x + tunnelBlock2.width 
        && player.position.x + player.width >= tunnelBlock2.position.x 
        && player.position.y + player.height >= tunnelBlock2.position.y 
        && player.position.y <= tunnelBlock2.position.y + tunnelBlock2.height) {
        
        c.fillStyle = 'white';
        c.font = "48px Arial";
        c.fillText("YOU DIED", 400, 100);


        setTimeout (() => {
            window.location.reload();
        }, 100)

        player.position.x = 1000;
        player.position.y = 1000;
        terrain1.velocity.y = 0;
        terrain2.velocity.y = 0;
        terrain3.velocity.y = 0;
        endButton.velocity.y = 0;
        openDoorButton.velocity.y = 0;
        openDoorButton2.velocity.y = 0;

    } else if (player.position.x <= endBlock1.position.x + endBlock1.width 
        && player.position.x + player.width >= endBlock1.position.x 
        && player.position.y + player.height >= endBlock1.position.y 
        && player.position.y <= endBlock1.position.y + endBlock1.height) {

        c.fillStyle = 'white';
        c.font = "48px Arial";
        c.fillText("YOU DIED", 400, 100);

        setTimeout (() => {
            window.location.reload();
        }, 100)

        player.position.x = 1000;
        player.position.y = 1000;
        terrain1.velocity.y = 0;
        terrain2.velocity.y = 0;
        terrain3.velocity.y = 0;
        openDoorButton.velocity.y = 0;
        openDoorButton2.velocity.y = 0;

        rainBlock1.velocity.y = 0;
        rainBlock2.velocity.y = 0;
        rainBlock3.velocity.y = 0;
        rainBlock4.velocity.y = 0;
        rainBlock5.velocity.y = 0;
        rainBlock6.velocity.y = 0;
        rainBlock7.velocity.y = 0;
        rainBlock8.velocity.y = 0;
        rainBlock9.velocity.y = 0;
        rainBlock10.velocity.y = 0;
        rainBlock11.velocity.y = 0;
        rainBlock12.velocity.y = 0;
        rainBlock13.velocity.y = 0;
        rainBlock14.velocity.y = 0;
        rainBlock15.velocity.y = 0;
        rainBlock16.velocity.y = 0;
    
        endButton.velocity.y = 0;
        endBlock1.velocity.y = 0;

        window.location.reload();
    } else if (player.position.x <= endBlock2.position.x + endBlock2.width 
        && player.position.x + player.width >= endBlock2.position.x 
        && player.position.y + player.height >= endBlock2.position.y 
        && player.position.y <= endBlock2.position.y + endBlock2.height) {

        c.fillStyle = 'white';
        c.font = "48px Arial";
        c.fillText("YOU DIED", 400, 100);

        setTimeout (() => {
            window.location.reload();
        }, 100)

        player.position.x = 1000;
        player.position.y = 1000;
        terrain1.velocity.y = 0;
        terrain2.velocity.y = 0;
        terrain3.velocity.y = 0;
        openDoorButton.velocity.y = 0;
        openDoorButton2.velocity.y = 0;

        rainBlock1.velocity.y = 0;
        rainBlock2.velocity.y = 0;
        rainBlock3.velocity.y = 0;
        rainBlock4.velocity.y = 0;
        rainBlock5.velocity.y = 0;
        rainBlock6.velocity.y = 0;
        rainBlock7.velocity.y = 0;
        rainBlock8.velocity.y = 0;
        rainBlock9.velocity.y = 0;
        rainBlock10.velocity.y = 0;
        rainBlock11.velocity.y = 0;
        rainBlock12.velocity.y = 0;
        rainBlock13.velocity.y = 0;
        rainBlock14.velocity.y = 0;
        rainBlock15.velocity.y = 0;
        rainBlock16.velocity.y = 0;
    
        endButton.velocity.y = 0;
        endBlock2.velocity.y = 0;

        window.location.reload();
    } /* Checking if the player is within the bounds of the background1 object. */
    else if (player.position.x <= background1.position.x + background1.width 
        && player.position.x + player.width >= background1.position.x 
        && player.position.y + player.height >= background1.position.y 
        && player.position.y <= background1.position.y + background1.height) {
        
        c.fillStyle = 'white';
        c.font = "48px Arial";
        c.fillText("CLICK ME.                               NO, CLICK ME.", 20, 100);

        console.log('Entered HELPZONE')

    } else if (player.position.x <= background2.position.x + background2.width 
        && player.position.x + player.width >= background2.position.x 
        && player.position.y + player.height >= background2.position.y 
        && player.position.y <= background2.position.y + background2.height) {
        
        c.fillStyle = 'white';
        c.font = "48px Arial";
        c.fillText("WATCH OUT FOR THE RAIN", 200, 100);

        console.log('Entered HELPZONE2')

    } else if (player.position.x <= background3.position.x + background3.width 
        && player.position.x + player.width >= background3.position.x 
        && player.position.y + player.height >= background3.position.y 
        && player.position.y <= background3.position.y + background3.height) {
        
        c.fillStyle = 'white';
        c.font = "48px Arial";
        c.fillText("BLOCK MAN'S SURVIVAL", 210, 100);

        console.log('Entered HELPZONE2')

    } /* The above code is checking if the player is colliding with the background4 object. If the
    player is colliding with the background4 object, the code will pause the rainBlock objects,
    the endButton object, the endBlock2 object, and the background2 object. After 1 second, the
    code will resume the rainBlock objects, the endButton object, the endBlock2 object, and the
    background2 object. */
    else if (player.position.x <= background4.position.x + background4.width 
        && player.position.x + player.width >= background4.position.x 
        && player.position.y + player.height >= background4.position.y 
        && player.position.y <= background4.position.y + background4.height
        && player.pausing) {


            rainBlock1.velocity.y = 0;
            rainBlock2.velocity.y = 0;
            rainBlock3.velocity.y = 0;
            rainBlock4.velocity.y = 0;
            rainBlock5.velocity.y = 0;
            rainBlock6.velocity.y = 0;
            rainBlock7.velocity.y = 0;
            rainBlock8.velocity.y = 0;
            rainBlock9.velocity.y = 0;
            rainBlock10.velocity.y = 0;
            rainBlock11.velocity.y = 0;
            rainBlock12.velocity.y = 0;
            rainBlock13.velocity.y = 0;
            rainBlock14.velocity.y = 0;
            rainBlock15.velocity.y = 0;
            rainBlock16.velocity.y = 0;
    
            endButton.velocity.y = 0;
            endBlock2.velocity.y = 0;

            player.pausing = false;

        setTimeout (() => {
        rainBlock1.velocity.y = rainBlock1.velocity.y + 13;
        rainBlock2.velocity.y = rainBlock2.velocity.y + 13;
        rainBlock3.velocity.y = rainBlock3.velocity.y + 13;
        rainBlock4.velocity.y = rainBlock4.velocity.y + 13;
        rainBlock5.velocity.y = rainBlock5.velocity.y + 13;
        rainBlock6.velocity.y = rainBlock6.velocity.y + 13;
        rainBlock7.velocity.y = rainBlock7.velocity.y + 13;
        rainBlock8.velocity.y = rainBlock8.velocity.y + 13;
        rainBlock9.velocity.y = rainBlock9.velocity.y + 13;
        rainBlock10.velocity.y = rainBlock10.velocity.y + 13;
        rainBlock11.velocity.y = rainBlock11.velocity.y + 13;
        rainBlock12.velocity.y = rainBlock12.velocity.y + 13;
        rainBlock13.velocity.y = rainBlock13.velocity.y + 13;
        rainBlock14.velocity.y = rainBlock14.velocity.y + 13;
        rainBlock15.velocity.y = rainBlock15.velocity.y + 13;
        rainBlock16.velocity.y = rainBlock16.velocity.y + 13;

        endButton.velocity.y = endButton.velocity.y + 2;
        endBlock2.velocity.y = endBlock2.velocity.y + 2;
        background2.velocity.y = background2.velocity.y + 4;
        }, 1000)

        console.log('pausing')

    } else if (player.position.x <= background5.position.x + background5.width 
        && player.position.x + player.width >= background5.position.x 
        && player.position.y + player.height >= background5.position.y 
        && player.position.y <= background5.position.y + background5.height
        && player.pausing) {

        terrain1.velocity.y = 0;
        terrain2.velocity.y = 0;
        terrain3.velocity.y = 0;
        endBlock1.velocity.y = 0;
        background1.velocity.y = 0;
        endButton.velocity.y = 0;
        openDoorButton.velocity.y = 0;
        openDoorButton2.velocity.y = 0;
            

            player.pausing = false;

        setTimeout (() => {
        terrain1.velocity.y = terrain1.velocity.y + 2;
        terrain2.velocity.y = terrain2.velocity.y + 2;
        terrain3.velocity.y = terrain3.velocity.y + 5.7;
        endBlock1.velocity.y = endBlock1.velocity.y + 2;
        background1.velocity.y = background1.velocity.y + 2;
        endButton.velocity.y = endButton.velocity.y + 2;
        openDoorButton.velocity.y = openDoorButton.velocity.y + 2;
        openDoorButton2.velocity.y = openDoorButton2.velocity.y + 2;
        }, 1000)

        console.log('pausing')

    } else if (player.position.x <= background6.position.x + background6.width 
        && player.position.x + player.width >= background6.position.x 
        && player.position.y + player.height >= background6.position.y 
        && player.position.y <= background6.position.y + background6.height) {
        
        c.fillStyle = 'white';
        c.font = "48px Arial";
        c.fillText("DON'T WORRY I'LL LOAD THE CANNON", 50, 100);
        c.fillText("JUST CLICK THE BUTTONS", 180, 150);

        console.log('Entered HELPZONE')

    } else if (player.position.x <= background7.position.x + background7.width 
        && player.position.x + player.width >= background7.position.x 
        && player.position.y + player.height >= background7.position.y 
        && player.position.y <= background7.position.y + background7.height) {
        
        c.fillStyle = 'white';
        c.font = "48px Arial";
        c.fillText("CONGRATULATIONS YOU BEAT THE GAME", 25, 100);

    } else if (player.position.x <= bossDialogue1.position.x + bossDialogue1.width 
        && player.position.x + player.width >= bossDialogue1.position.x 
        && player.position.y + player.height >= bossDialogue1.position.y 
        && player.position.y <= bossDialogue1.position.y + bossDialogue1.height) {
        
        c.fillStyle = 'white';
        c.font = "48px Arial";
        c.fillText("YOU REALLY THINK YOU CAN KILL ME?", 50, 80);
        c.fillText("HOW PATHETIC.   TAKE THIS", 160, 130);


    } else if (player.position.x <= bossDialogue2.position.x + bossDialogue2.width 
        && player.position.x + player.width >= bossDialogue2.position.x 
        && player.position.y + player.height >= bossDialogue2.position.y 
        && player.position.y <= bossDialogue2.position.y + bossDialogue2.height) {
        
        c.fillStyle = 'white';
        c.font = "48px Arial";
        c.fillText("YOUR LUCK WON'T HELP YOU THIS TIME!", 35, 80);


    } /* Checking if the player is clicking on the start button. If the player is clicking on the start
    button, then the game will start. */
    else if (player.position.x <= startButton.position.x + startButton.width 
        && player.position.x + player.width >= startButton.position.x 
        && player.position.y + player.height >= startButton.position.y 
        && player.position.y <= startButton.position.y + startButton.height
        && player.clicking) {
        
        terrain1.velocity.y = terrain1.velocity.y + 2;
        terrain1.position.x = terrain1.position.x + -1500;
        terrain2.velocity.y = terrain2.velocity.y + 2;
        terrain2.position.x = terrain2.position.x + -1500;
        terrain3.velocity.y = terrain3.velocity.y + 5.7;
        endBlock1.velocity.y = endBlock1.velocity.y + 2;
        background1.velocity.y = background1.velocity.y + 2;
        endButton.velocity.y = endButton.velocity.y + 2;
        openDoorButton.velocity.y = openDoorButton.velocity.y + 2;
        openDoorButton2.velocity.y = openDoorButton2.velocity.y + 2;
        startButton.position.x = startButton.position.x + 1000;
        startButton.position.y = startButton.position.y + 1000;
        startButton2.position.x = startButton2.position.x + 1000;
        startButton2.position.y = startButton2.position.y + 1000;
        startButton3.position.x = startButton3.position.x + 1000;
        startButton3.position.y = startButton3.position.y + 1000;
        background3.position.x = background3.position.x + 1500;
        background4.position.x = background4.position.x + 1500;
        background5.position.y = background5.position.y + 1000;
        console.log('starting')

        


    } else if (player.position.x <= startButton.position.x + startButton.width 
        && player.position.x + player.width >= startButton.position.x 
        && player.position.y + player.height >= startButton.position.y 
        && player.position.y <= startButton.position.y + startButton.height) {

        console.log('starting')

        c.fillStyle = 'white';
        c.font = "48px Arial";
        c.fillText("LEVEL 2", 400, 100);

    } else if (player.position.x <= startButton2.position.x + startButton2.width 
        && player.position.x + player.width >= startButton2.position.x 
        && player.position.y + player.height >= startButton2.position.y 
        && player.position.y <= startButton2.position.y + startButton2.height
        && player.clicking) {
        
        rainBlock1.velocity.y = rainBlock1.velocity.y + 13;
        rainBlock2.velocity.y = rainBlock2.velocity.y + 13;
        rainBlock3.velocity.y = rainBlock3.velocity.y + 13;
        rainBlock4.velocity.y = rainBlock4.velocity.y + 13;
        rainBlock5.velocity.y = rainBlock5.velocity.y + 13;
        rainBlock6.velocity.y = rainBlock6.velocity.y + 13;
        rainBlock7.velocity.y = rainBlock7.velocity.y + 13;
        rainBlock8.velocity.y = rainBlock8.velocity.y + 13;
        rainBlock9.velocity.y = rainBlock9.velocity.y + 13;
        rainBlock10.velocity.y = rainBlock10.velocity.y + 13;
        rainBlock11.velocity.y = rainBlock11.velocity.y + 13;
        rainBlock12.velocity.y = rainBlock12.velocity.y + 13;
        rainBlock13.velocity.y = rainBlock13.velocity.y + 13;
        rainBlock14.velocity.y = rainBlock14.velocity.y + 13;
        rainBlock15.velocity.y = rainBlock15.velocity.y + 13;
        rainBlock16.velocity.y = rainBlock16.velocity.y + 13;

        endButton.velocity.y = endButton.velocity.y + 2;
        endBlock2.velocity.y = endBlock2.velocity.y + 2;
        background2.velocity.y = background2.velocity.y + 4;
        background2.position.y = 0;
        startButton.position.x = startButton.position.x + 1000;
        startButton.position.y = startButton.position.y + 1000;
        startButton2.position.x = startButton2.position.x + 1000;
        startButton2.position.y = startButton2.position.y + 1000;
        startButton3.position.x = startButton3.position.x + 1000;
        startButton3.position.y = startButton3.position.y + 1000;
        background3.position.x = background3.position.x + -1500;
        background3.position.x = background3.position.x + -1500;

        console.log('starting2')

        


    } else if (player.position.x <= startButton2.position.x + startButton2.width 
        && player.position.x + player.width >= startButton2.position.x 
        && player.position.y + player.height >= startButton2.position.y 
        && player.position.y <= startButton2.position.y + startButton2.height) {

        console.log('starting')

        c.fillStyle = 'white';
        c.font = "48px Arial";
        c.fillText("LEVEL 1", 400, 100);

    } else if (player.position.x <= startButton3.position.x + startButton3.width 
        && player.position.x + player.width >= startButton3.position.x 
        && player.position.y + player.height >= startButton3.position.y 
        && player.position.y <= startButton3.position.y + startButton3.height
        && player.clicking) {
        
        

        startButton.position.x = startButton.position.x + 1000;
        startButton.position.y = startButton.position.y + 1000;
        startButton2.position.x = startButton2.position.x + 1000;
        startButton2.position.y = startButton2.position.y + 1000;
        startButton3.position.x = startButton3.position.x + 1000;
        startButton3.position.y = startButton3.position.y + 1000;
        background3.position.x = background3.position.x + -1500;
        background3.position.x = background3.position.x + -1500;
        cannonShooter.position.x = cannonShooter.position.x + 487;
        cannonShooter.position.y = cannonShooter.position.y + 1376;
        cannonBall1.position.x = cannonBall1.position.x + 427;
        cannonBall1.position.y = cannonBall1.position.y + 1356;
        cannonBall2.position.x = cannonBall2.position.x + 427;
        cannonBall2.position.y = cannonBall2.position.y + 1406;
        cannonBall3.position.x = cannonBall3.position.x + 427;
        cannonBall3.position.y = cannonBall3.position.y + 1456;
        cannonLoader.position.x = cannonLoader.position.x + 300;
        cannonLoader.position.y = cannonLoader.position.y + 1446;
        bossButton1.position.x = bossButton1.position.x + 490;
        bossButton1.position.y = bossButton1.position.y + 450;
        bossButton2.position.x = bossButton2.position.x + 490;
        bossButton2.position.y = bossButton2.position.y + -200;
        bossButton3.position.x = bossButton3.position.x + 490;
        bossButton3.position.y = bossButton3.position.y + -850;
        bossButton4.position.x = bossButton4.position.x + 490;
        bossButton4.position.y = bossButton4.position.y + -1500;

        background6.position.y = background6.position.y + 1000;
        bossDialogue1.position.y = bossDialogue1.position.y + 500;
        bossDialogue2.position.y = bossDialogue2.position.y + -400;

        cannonShooter.velocity.y = cannonShooter.velocity.y + 1;
        cannonBall1.velocity.y = cannonBall1.velocity.y + 1;
        cannonBall2.velocity.y = cannonBall2.velocity.y + 1;
        cannonBall3.velocity.y = cannonBall3.velocity.y + 1;
        cannonLoader.velocity.y = cannonLoader.velocity.y + 1;
        tunnelBlock1.velocity.y = tunnelBlock1.velocity.y + 2.5;
        tunnelBlock2.velocity.y = tunnelBlock2.velocity.y + 2.5;

        bossButton1.velocity.y = bossButton1.velocity.y + 2.5;
        bossButton2.velocity.y = bossButton2.velocity.y + 2.5;
        bossButton3.velocity.y = bossButton3.velocity.y + 2.5;
        bossButton4.velocity.y = bossButton4.velocity.y + 2.5;
        

        background6.velocity.y = background6.velocity.y + 2.5;
        bossDialogue1.velocity.y = bossDialogue1.velocity.y + 2.5;
        bossDialogue2.velocity.y = bossDialogue2.velocity.y + 2.5;

        console.log('starting2')

        


    } else if (player.position.x <= startButton3.position.x + startButton3.width 
        && player.position.x + player.width >= startButton3.position.x 
        && player.position.y + player.height >= startButton3.position.y 
        && player.position.y <= startButton3.position.y + startButton3.height) {

        console.log('starting')

        c.fillStyle = 'white';
        c.font = "48px Arial";
        c.fillText("LEVEL 3", 400, 100);

    } else if (player.position.x <= bossButton1.position.x + bossButton1.width 
        && player.position.x + player.width >= bossButton1.position.x 
        && player.position.y + player.height >= bossButton1.position.y 
        && player.position.y <= bossButton1.position.y + bossButton1.height
        && player.clicking) {

        bossHead.position.y = bossHead.position.y + 1000;
        bossLeftEye.position.y = bossLeftEye.position.y + 1020;
        bossRightEye.position.y = bossRightEye.position.y + 1020;
        bossMouth.position.y = bossMouth.position.y + 1120;
        bossButton1.position.x = bossButton1.position.x + 2000;
        bossButton5.position.x = bossButton5.position.x + 497.5;
        bossButton5.position.y = bossButton5.position.y + 1170;
        bossShield1.position.y = bossShield1.position.y + 1190;
        bossShield2.position.y = bossShield2.position.y + 1210;
        bossShield3.position.y = bossShield3.position.y + 1230;

        rainBlock1.velocity.y = rainBlock1.velocity.y + 7;
        rainBlock2.velocity.y = rainBlock2.velocity.y + 7;
        rainBlock3.velocity.y = rainBlock3.velocity.y + 7;
        rainBlock4.velocity.y = rainBlock4.velocity.y + 7;
        rainBlock5.velocity.y = rainBlock5.velocity.y + 7;
        rainBlock6.velocity.y = rainBlock6.velocity.y + 7;
        rainBlock7.velocity.y = rainBlock7.velocity.y + 7;
        rainBlock8.velocity.y = rainBlock8.velocity.y + 7;
        rainBlock9.velocity.y = rainBlock9.velocity.y + 7;
        rainBlock10.velocity.y = rainBlock10.velocity.y + 7;
        rainBlock11.velocity.y = rainBlock11.velocity.y + 7;
        rainBlock12.velocity.y = rainBlock12.velocity.y + 7;
        rainBlock13.velocity.y = rainBlock13.velocity.y + 7;
        rainBlock14.velocity.y = rainBlock14.velocity.y + 7;
        rainBlock15.velocity.y = rainBlock15.velocity.y + 7;
        rainBlock16.velocity.y = rainBlock16.velocity.y + 7;

        rainBlock1.velocity.x = rainBlock1.velocity.x + -13;
        rainBlock2.velocity.x = rainBlock2.velocity.x + -13;
        rainBlock3.velocity.x = rainBlock3.velocity.x + -13;
        rainBlock4.velocity.x = rainBlock4.velocity.x + -13;
        rainBlock5.velocity.x = rainBlock5.velocity.x + -13;
        rainBlock6.velocity.x = rainBlock6.velocity.x + -13;
        rainBlock7.velocity.x = rainBlock7.velocity.x + -13;
        rainBlock8.velocity.x = rainBlock8.velocity.x + -13;
        rainBlock10.velocity.x = rainBlock10.velocity.x + -13;
        rainBlock11.velocity.x = rainBlock11.velocity.x + -13;
        rainBlock12.velocity.x = rainBlock12.velocity.x + -13;
        rainBlock13.velocity.x = rainBlock13.velocity.x + -13;
        rainBlock14.velocity.x = rainBlock14.velocity.x + -13;
        rainBlock15.velocity.x = rainBlock15.velocity.x + -13;
        rainBlock16.velocity.x = rainBlock16.velocity.x + -13;
        
        rainBlock1.position.x = rainBlock1.position.x + 1024;
        rainBlock2.position.x = rainBlock2.position.x + 1024;
        rainBlock3.position.x = rainBlock3.position.x + 1024;
        rainBlock4.position.x = rainBlock4.position.x + 1024;
        rainBlock5.position.x = rainBlock5.position.x + 1024;
        rainBlock6.position.x = rainBlock6.position.x + 1024;
        rainBlock7.position.x = rainBlock7.position.x + 1024;
        rainBlock8.position.x = rainBlock8.position.x + 1024;
        rainBlock9.position.x = rainBlock9.position.x + 1024;
        rainBlock10.position.x = rainBlock10.position.x + 1024;
        rainBlock11.position.x = rainBlock11.position.x + 1024;
        rainBlock12.position.x = rainBlock12.position.x + 1024;
        rainBlock13.position.x = rainBlock13.position.x + 1024;
        rainBlock14.position.x = rainBlock14.position.x + 1024;
        rainBlock15.position.x = rainBlock15.position.x + 1024;
        rainBlock16.position.x = rainBlock16.position.x + 1024;

        rainBlock1.position.y = rainBlock1.position.y + 580;
        rainBlock2.position.y = rainBlock2.position.y + 830;
        rainBlock3.position.y = rainBlock3.position.y + 1080;
        rainBlock4.position.y = rainBlock4.position.y + 1330;
        rainBlock5.position.y = rainBlock5.position.y + 1580;
        rainBlock6.position.y = rainBlock6.position.y + 1830;
        rainBlock7.position.y = rainBlock7.position.y + 2080;
        rainBlock8.position.y = rainBlock8.position.y + 2330;
        rainBlock9.position.y = rainBlock9.position.y + 2580;
        rainBlock10.position.y = rainBlock10.position.y + 2830;
        rainBlock11.position.y = rainBlock11.position.y + 3080;
        rainBlock12.position.y = rainBlock12.position.y + 3330;
        rainBlock13.position.y = rainBlock13.position.y + 3580;
        rainBlock14.position.y = rainBlock14.position.y + 3830;
        rainBlock15.position.y = rainBlock15.position.y + 4080;
        rainBlock16.position.y = rainBlock16.position.y + 4330;

    } else if (player.position.x <= bossButton2.position.x + bossButton2.width 
        && player.position.x + player.width >= bossButton2.position.x 
        && player.position.y + player.height >= bossButton2.position.y 
        && player.position.y <= bossButton2.position.y + bossButton2.height
        && player.clicking) {

            terrain1.position.x = terrain1.position.x + -1540;
            terrain1.position.y = terrain1.position.y + 10;

            terrain2.position.x = terrain2.position.x + -1500;
            terrain2.position.y = terrain2.position.y + 10;

            terrain1.velocity.x = terrain1.velocity.x + 2;
            terrain1.velocity.y = terrain1.velocity.y + 2.5;

            terrain2.velocity.x = terrain2.velocity.x + 2;
            terrain2.velocity.y = terrain2.velocity.y + 2.5;

            cannonBall1.position.x = cannonBall1.position.x + 80;
            cannonBall1.velocity.y = cannonBall1.velocity.y + -20;
            bossButton2.position.x = bossButton2.position.x + 2000;

    } else if (player.position.x <= bossButton3.position.x + bossButton3.width 
        && player.position.x + player.width >= bossButton3.position.x 
        && player.position.y + player.height >= bossButton3.position.y 
        && player.position.y <= bossButton3.position.y + bossButton3.height
        && player.clicking) {

            sidewaysBlock1.position.x = sidewaysBlock1.position.x + 180;
            sidewaysBlock2.position.x = sidewaysBlock2.position.x + 844;
            sidewaysBlock3.position.x = sidewaysBlock3.position.x + 280;
            sidewaysBlock4.position.x = sidewaysBlock4.position.x + 944;
            sidewaysBlock5.position.x = sidewaysBlock5.position.x + 380;
            sidewaysBlock6.position.x = sidewaysBlock6.position.x + 1044;

            sidewaysBlock1.position.y = sidewaysBlock1.position.y + 1000;
            sidewaysBlock2.position.y = sidewaysBlock2.position.y + 900;
            sidewaysBlock3.position.y = sidewaysBlock3.position.y + 800;
            sidewaysBlock4.position.y = sidewaysBlock4.position.y + 700;
            sidewaysBlock5.position.y = sidewaysBlock5.position.y + 600;
            sidewaysBlock6.position.y = sidewaysBlock6.position.y + 500;

            sidewaysBlock1.velocity.x = sidewaysBlock1.velocity.x + 4;
            sidewaysBlock2.velocity.x = sidewaysBlock2.velocity.x + -4;
            sidewaysBlock3.velocity.x = sidewaysBlock3.velocity.x + 4;
            sidewaysBlock4.velocity.x = sidewaysBlock4.velocity.x + -4;
            sidewaysBlock5.velocity.x = sidewaysBlock5.velocity.x + 4;
            sidewaysBlock6.velocity.x = sidewaysBlock6.velocity.x + -4;

            sidewaysBlock1.velocity.y = sidewaysBlock1.velocity.y + 5;
            sidewaysBlock2.velocity.y = sidewaysBlock2.velocity.y + 5;
            sidewaysBlock3.velocity.y = sidewaysBlock3.velocity.y + 5;
            sidewaysBlock4.velocity.y = sidewaysBlock4.velocity.y + 5;
            sidewaysBlock5.velocity.y = sidewaysBlock5.velocity.y + 5;
            sidewaysBlock6.velocity.y = sidewaysBlock6.velocity.y + 5;

            cannonBall2.position.x = cannonBall2.position.x + 80;
            cannonBall2.velocity.y = cannonBall2.velocity.y + -20;
            bossButton3.position.x = bossButton3.position.x + 2000;

    } else if (player.position.x <= bossButton4.position.x + bossButton4.width 
        && player.position.x + player.width >= bossButton4.position.x 
        && player.position.y + player.height >= bossButton4.position.y 
        && player.position.y <= bossButton4.position.y + bossButton4.height
        && player.clicking) {

            cannonBall3.position.x = cannonBall3.position.x + 80;
            cannonBall3.velocity.y = cannonBall3.velocity.y + -20;
            bossButton4.position.x = bossButton4.position.x + 2000;

    } else if (player.position.x <= bossButton5.position.x + bossButton5.width 
        && player.position.x + player.width >= bossButton5.position.x 
        && player.position.y + player.height >= bossButton5.position.y 
        && player.position.y <= bossButton5.position.y + bossButton5.height
        && player.clicking) {

        bossHead.position.y = bossHead.position.y + 10000;
        bossLeftEye.position.y = bossLeftEye.position.y + 10200;
        bossRightEye.position.y = bossRightEye.position.y + 10020;
        bossMouth.position.y = bossMouth.position.y + 10120;
        bossButton1.position.x = bossButton1.position.x + 20000;
        bossButton5.position.x = bossButton5.position.x + 4907.5;
        bossButton5.position.y = bossButton5.position.y + 11070;
        bossShield1.position.y = bossShield1.position.y + 11090;
        bossShield2.position.y = bossShield2.position.y + 12010;
        bossShield3.position.y = bossShield3.position.y + 12030;
        tunnelBlock1.position.y = tunnelBlock1.position.y + 12030;
        tunnelBlock2.position.y = tunnelBlock2.position.y + 12030;
        bossButton5.position.y = bossButton5.position.y + 12030;

        background7.position.y = background7.position.y + 1000;

            

    } else if (player.position.x <= endButton.position.x + endButton.width 
        && player.position.x + player.width >= endButton.position.x 
        && player.position.y + player.height >= endButton.position.y 
        && player.position.y <= endButton.position.y + endButton.height
        && player.clicking) {
        
            setTimeout (() => {
                window.location.reload();
            }, 500)

        console.log('starting')


    } else if (player.position.x <= endButton.position.x + endButton.width 
        && player.position.x + player.width >= endButton.position.x 
        && player.position.y + player.height >= endButton.position.y 
        && player.position.y <= endButton.position.y + endButton.height) {

        console.log('starting')

        c.fillStyle = 'white';
        c.font = "48px Arial";
        c.fillText("WOW GOOD JOB YOU WIN", 200, 100);
    } /* The above code is checking if the player is clicking on the button. If the player is clicking
    on the button, the page will reload. */
    else if (player.position.x <= openDoorButton.position.x + openDoorButton.width 
        && player.position.x + player.width >= openDoorButton.position.x 
        && player.position.y + player.height >= openDoorButton.position.y 
        && player.position.y <= openDoorButton.position.y + openDoorButton.height
        && player.clicking) {
        
            setTimeout (() => {
                window.location.reload();
            }, 100)


    } /* Checking if the player is touching the button and if the player is clicking. If both of these
    are true, then the door will open. */
    else if (player.position.x <= openDoorButton2.position.x + openDoorButton2.width 
        && player.position.x + player.width >= openDoorButton2.position.x 
        && player.position.y + player.height >= openDoorButton2.position.y 
        && player.position.y <= openDoorButton2.position.y + openDoorButton2.height
        && player.clicking) {
        
        terrain3.velocity.y = terrain3.velocity.y - 3;
        terrain3.position.x = terrain3.position.x + 1000;
        terrain3.position.y = terrain3.position.y + 1000;
        background1.position.x = background1.position.x + 1000;



    } else if (player.position.x <= openDoorButton.position.x + openDoorButton.width 
        && player.position.x + player.width >= openDoorButton.position.x 
        && player.position.y + player.height >= openDoorButton.position.y 
        && player.position.y <= openDoorButton.position.y + openDoorButton.height) {

        c.fillStyle = 'white';
        c.font = "48px Arial";
        c.fillText("CLICK ME FAST I'LL HELP YOU ;)", 200, 100);
    } else if (player.position.x <= openDoorButton2.position.x + openDoorButton2.width 
        && player.position.x + player.width >= openDoorButton2.position.x 
        && player.position.y + player.height >= openDoorButton2.position.y 
        && player.position.y <= openDoorButton2.position.y + openDoorButton2.height) {

        c.fillStyle = 'white';
        c.font = "48px Arial";
        c.fillText("CLICK ME FAST I'LL HELP YOU!", 200, 100);

    } else if (player.position.x <= bossShield3.position.x + bossShield3.width 
        && player.position.x + player.width >= bossShield3.position.x 
        && player.position.y + player.height >= bossShield3.position.y 
        && player.position.y <= bossShield3.position.y + bossShield3.height) {
        
        c.fillStyle = 'white';
        c.font = "48px Arial";
        c.fillText("YOU DIED", 400, 100);

        setTimeout (() => {
            window.location.reload();
        }, 100)

    } else if (player.position.x <= bossShield1.position.x + bossShield1.width 
        && player.position.x + player.width >= bossShield1.position.x 
        && player.position.y + player.height >= bossShield1.position.y 
        && player.position.y <= bossShield1.position.y + bossShield1.height) {
        
        c.fillStyle = 'white';
        c.font = "48px Arial";
        c.fillText("YOU DIED", 400, 100);

        setTimeout (() => {
            window.location.reload();
        }, 100)

    } else if (player.position.x <= bossShield2.position.x + bossShield2.width 
        && player.position.x + player.width >= bossShield2.position.x 
        && player.position.y + player.height >= bossShield2.position.y 
        && player.position.y <= bossShield2.position.y + bossShield2.height) {
        
        c.fillStyle = 'white';
        c.font = "48px Arial";
        c.fillText("YOU DIED", 400, 100);

        setTimeout (() => {
            window.location.reload();
        }, 100)

    } else if (cannonBall1.position.x <= bossShield1.position.x + bossShield1.width 
        && cannonBall1.position.x + cannonBall1.width >= bossShield1.position.x 
        && cannonBall1.position.y + cannonBall1.height >= bossShield1.position.y 
        && cannonBall1.position.y <= bossShield1.position.y + bossShield1.height) {
            cannonBall1.position.x = cannonBall1.position.x + 10000;
            bossShield1.position.x = bossShield1.position.x + 10000;
        
    } else if (cannonBall2.position.x <= bossShield2.position.x + bossShield2.width 
        && cannonBall2.position.x + cannonBall2.width >= bossShield2.position.x 
        && cannonBall2.position.y + cannonBall2.height >= bossShield2.position.y 
        && cannonBall2.position.y <= bossShield2.position.y + bossShield2.height) {

            cannonBall2.position.x = cannonBall2.position.x + 10000;
            bossShield2.position.x = bossShield2.position.x + 10000;
        
    } else if (cannonBall3.position.x <= bossShield3.position.x + bossShield3.width 
        && cannonBall3.position.x + cannonBall3.width >= bossShield3.position.x 
        && cannonBall3.position.y + cannonBall3.height >= bossShield3.position.y 
        && cannonBall3.position.y <= bossShield3.position.y + bossShield3.height) {

            cannonBall3.position.x = cannonBall3.position.x + 10000;
            bossShield3.position.x = bossShield3.position.x + 10000;
        
    } else if (player.position.x <= rainBlock1.position.x + rainBlock1.width 
        && player.position.x + player.width >= rainBlock1.position.x 
        && player.position.y + player.height >= rainBlock1.position.y 
        && player.position.y <= rainBlock1.position.y + rainBlock1.height) {

        
        window.location.reload();

        player.position.x = 1000;
        player.position.y = 1000;
        terrain1.velocity.y = 0;
        terrain2.velocity.y = 0;
        terrain3.velocity.y = 0;

        rainBlock1.velocity.y = 0;
        rainBlock2.velocity.y = 0;
        rainBlock3.velocity.y = 0;
        rainBlock4.velocity.y = 0;
        rainBlock5.velocity.y = 0;
        rainBlock6.velocity.y = 0;
        rainBlock7.velocity.y = 0;
        rainBlock8.velocity.y = 0;
        rainBlock9.velocity.y = 0;
        rainBlock10.velocity.y = 0;
        rainBlock11.velocity.y = 0;
        rainBlock12.velocity.y = 0;
        rainBlock13.velocity.y = 0;
        rainBlock14.velocity.y = 0;
        rainBlock15.velocity.y = 0;
        rainBlock16.velocity.y = 0;

        endButton.velocity.y = 0;
        openDoorButton.velocity.y = 0;
        openDoorButton2.velocity.y = 0;

    } else if (player.position.x <= rainBlock2.position.x + rainBlock2.width 
        && player.position.x + player.width >= rainBlock2.position.x 
        && player.position.y + player.height >= rainBlock2.position.y 
        && player.position.y <= rainBlock2.position.y + rainBlock2.height) {

        
        window.location.reload();

        player.position.x = 1000;
        player.position.y = 1000;
        terrain1.velocity.y = 0;
        terrain2.velocity.y = 0;
        terrain3.velocity.y = 0;

        rainBlock1.velocity.y = 0;
        rainBlock2.velocity.y = 0;
        rainBlock3.velocity.y = 0;
        rainBlock4.velocity.y = 0;
        rainBlock5.velocity.y = 0;
        rainBlock6.velocity.y = 0;
        rainBlock7.velocity.y = 0;
        rainBlock8.velocity.y = 0;
        rainBlock9.velocity.y = 0;
        rainBlock10.velocity.y = 0;
        rainBlock11.velocity.y = 0;
        rainBlock12.velocity.y = 0;
        rainBlock13.velocity.y = 0;
        rainBlock14.velocity.y = 0;
        rainBlock15.velocity.y = 0;
        rainBlock16.velocity.y = 0;

        endButton.velocity.y = 0;
        openDoorButton.velocity.y = 0;
        openDoorButton2.velocity.y = 0;

    } else if (player.position.x <= rainBlock3.position.x + rainBlock3.width 
        && player.position.x + player.width >= rainBlock3.position.x 
        && player.position.y + player.height >= rainBlock3.position.y 
        && player.position.y <= rainBlock3.position.y + rainBlock3.height) {

        
        window.location.reload();

        player.position.x = 1000;
        player.position.y = 1000;
        terrain1.velocity.y = 0;
        terrain2.velocity.y = 0;
        terrain3.velocity.y = 0;

        rainBlock1.velocity.y = 0;
        rainBlock2.velocity.y = 0;
        rainBlock3.velocity.y = 0;
        rainBlock4.velocity.y = 0;
        rainBlock5.velocity.y = 0;
        rainBlock6.velocity.y = 0;
        rainBlock7.velocity.y = 0;
        rainBlock8.velocity.y = 0;
        rainBlock9.velocity.y = 0;
        rainBlock10.velocity.y = 0;
        rainBlock11.velocity.y = 0;
        rainBlock12.velocity.y = 0;
        rainBlock13.velocity.y = 0;
        rainBlock14.velocity.y = 0;
        rainBlock15.velocity.y = 0;
        rainBlock16.velocity.y = 0;

        endButton.velocity.y = 0;
        openDoorButton.velocity.y = 0;
        openDoorButton2.velocity.y = 0;

    } else if (player.position.x <= rainBlock4.position.x + rainBlock4.width 
        && player.position.x + player.width >= rainBlock4.position.x 
        && player.position.y + player.height >= rainBlock4.position.y 
        && player.position.y <= rainBlock4.position.y + rainBlock4.height) {

        
        window.location.reload();

        player.position.x = 1000;
        player.position.y = 1000;
        terrain1.velocity.y = 0;
        terrain2.velocity.y = 0;
        terrain3.velocity.y = 0;

        rainBlock1.velocity.y = 0;
        rainBlock2.velocity.y = 0;
        rainBlock3.velocity.y = 0;
        rainBlock4.velocity.y = 0;
        rainBlock5.velocity.y = 0;
        rainBlock6.velocity.y = 0;
        rainBlock7.velocity.y = 0;
        rainBlock8.velocity.y = 0;
        rainBlock9.velocity.y = 0;
        rainBlock10.velocity.y = 0;
        rainBlock11.velocity.y = 0;
        rainBlock12.velocity.y = 0;
        rainBlock13.velocity.y = 0;
        rainBlock14.velocity.y = 0;
        rainBlock15.velocity.y = 0;
        rainBlock16.velocity.y = 0;

        endButton.velocity.y = 0;
        openDoorButton.velocity.y = 0;
        openDoorButton2.velocity.y = 0;

    } else if (player.position.x <= rainBlock5.position.x + rainBlock5.width 
        && player.position.x + player.width >= rainBlock5.position.x 
        && player.position.y + player.height >= rainBlock5.position.y 
        && player.position.y <= rainBlock5.position.y + rainBlock5.height) {

        
        window.location.reload();

        player.position.x = 1000;
        player.position.y = 1000;
        terrain1.velocity.y = 0;
        terrain2.velocity.y = 0;
        terrain3.velocity.y = 0;

        rainBlock1.velocity.y = 0;
        rainBlock2.velocity.y = 0;
        rainBlock3.velocity.y = 0;
        rainBlock4.velocity.y = 0;
        rainBlock5.velocity.y = 0;
        rainBlock6.velocity.y = 0;
        rainBlock7.velocity.y = 0;
        rainBlock8.velocity.y = 0;
        rainBlock9.velocity.y = 0;
        rainBlock10.velocity.y = 0;
        rainBlock11.velocity.y = 0;
        rainBlock12.velocity.y = 0;
        rainBlock13.velocity.y = 0;
        rainBlock14.velocity.y = 0;
        rainBlock15.velocity.y = 0;
        rainBlock16.velocity.y = 0;

        endButton.velocity.y = 0;
        openDoorButton.velocity.y = 0;
        openDoorButton2.velocity.y = 0;

    } else if (player.position.x <= rainBlock6.position.x + rainBlock6.width 
        && player.position.x + player.width >= rainBlock6.position.x 
        && player.position.y + player.height >= rainBlock6.position.y 
        && player.position.y <= rainBlock6.position.y + rainBlock6.height) {

        
        window.location.reload();

        player.position.x = 1000;
        player.position.y = 1000;
        terrain1.velocity.y = 0;
        terrain2.velocity.y = 0;
        terrain3.velocity.y = 0;

        rainBlock1.velocity.y = 0;
        rainBlock2.velocity.y = 0;
        rainBlock3.velocity.y = 0;
        rainBlock4.velocity.y = 0;
        rainBlock5.velocity.y = 0;
        rainBlock6.velocity.y = 0;
        rainBlock7.velocity.y = 0;
        rainBlock8.velocity.y = 0;
        rainBlock9.velocity.y = 0;
        rainBlock10.velocity.y = 0;
        rainBlock11.velocity.y = 0;
        rainBlock12.velocity.y = 0;
        rainBlock13.velocity.y = 0;
        rainBlock14.velocity.y = 0;
        rainBlock15.velocity.y = 0;
        rainBlock16.velocity.y = 0;

        endButton.velocity.y = 0;
        openDoorButton.velocity.y = 0;
        openDoorButton2.velocity.y = 0;

    } else if (player.position.x <= rainBlock7.position.x + rainBlock7.width 
        && player.position.x + player.width >= rainBlock7.position.x 
        && player.position.y + player.height >= rainBlock7.position.y 
        && player.position.y <= rainBlock7.position.y + rainBlock7.height) {

        
        window.location.reload();

        player.position.x = 1000;
        player.position.y = 1000;
        terrain1.velocity.y = 0;
        terrain2.velocity.y = 0;
        terrain3.velocity.y = 0;

        rainBlock1.velocity.y = 0;
        rainBlock2.velocity.y = 0;
        rainBlock3.velocity.y = 0;
        rainBlock4.velocity.y = 0;
        rainBlock5.velocity.y = 0;
        rainBlock6.velocity.y = 0;
        rainBlock7.velocity.y = 0;
        rainBlock8.velocity.y = 0;
        rainBlock9.velocity.y = 0;
        rainBlock10.velocity.y = 0;
        rainBlock11.velocity.y = 0;
        rainBlock12.velocity.y = 0;
        rainBlock13.velocity.y = 0;
        rainBlock14.velocity.y = 0;
        rainBlock15.velocity.y = 0;
        rainBlock16.velocity.y = 0;

        endButton.velocity.y = 0;
        openDoorButton.velocity.y = 0;
        openDoorButton2.velocity.y = 0;

    } else if (player.position.x <= rainBlock8.position.x + rainBlock8.width 
        && player.position.x + player.width >= rainBlock8.position.x 
        && player.position.y + player.height >= rainBlock8.position.y 
        && player.position.y <= rainBlock8.position.y + rainBlock8.height) {

        
        window.location.reload();

        player.position.x = 1000;
        player.position.y = 1000;
        terrain1.velocity.y = 0;
        terrain2.velocity.y = 0;
        terrain3.velocity.y = 0;

        rainBlock1.velocity.y = 0;
        rainBlock2.velocity.y = 0;
        rainBlock3.velocity.y = 0;
        rainBlock4.velocity.y = 0;
        rainBlock5.velocity.y = 0;
        rainBlock6.velocity.y = 0;
        rainBlock7.velocity.y = 0;
        rainBlock8.velocity.y = 0;
        rainBlock9.velocity.y = 0;
        rainBlock10.velocity.y = 0;
        rainBlock11.velocity.y = 0;
        rainBlock12.velocity.y = 0;
        rainBlock13.velocity.y = 0;
        rainBlock14.velocity.y = 0;
        rainBlock15.velocity.y = 0;
        rainBlock16.velocity.y = 0;

        endButton.velocity.y = 0;
        openDoorButton.velocity.y = 0;
        openDoorButton2.velocity.y = 0;

    } else if (player.position.x <= rainBlock9.position.x + rainBlock9.width 
        && player.position.x + player.width >= rainBlock9.position.x 
        && player.position.y + player.height >= rainBlock9.position.y 
        && player.position.y <= rainBlock9.position.y + rainBlock9.height) {

        
        window.location.reload();

        player.position.x = 1000;
        player.position.y = 1000;
        terrain1.velocity.y = 0;
        terrain2.velocity.y = 0;
        terrain3.velocity.y = 0;

        rainBlock1.velocity.y = 0;
        rainBlock2.velocity.y = 0;
        rainBlock3.velocity.y = 0;
        rainBlock4.velocity.y = 0;
        rainBlock5.velocity.y = 0;
        rainBlock6.velocity.y = 0;
        rainBlock7.velocity.y = 0;
        rainBlock8.velocity.y = 0;
        rainBlock9.velocity.y = 0;
        rainBlock10.velocity.y = 0;
        rainBlock11.velocity.y = 0;
        rainBlock12.velocity.y = 0;
        rainBlock13.velocity.y = 0;
        rainBlock14.velocity.y = 0;
        rainBlock15.velocity.y = 0;
        rainBlock16.velocity.y = 0;

        endButton.velocity.y = 0;
        openDoorButton.velocity.y = 0;
        openDoorButton2.velocity.y = 0;

    } else if (player.position.x <= rainBlock10.position.x + rainBlock10.width 
        && player.position.x + player.width >= rainBlock10.position.x 
        && player.position.y + player.height >= rainBlock10.position.y 
        && player.position.y <= rainBlock10.position.y + rainBlock10.height) {

        
        window.location.reload();

        player.position.x = 1000;
        player.position.y = 1000;
        terrain1.velocity.y = 0;
        terrain2.velocity.y = 0;
        terrain3.velocity.y = 0;

        rainBlock1.velocity.y = 0;
        rainBlock2.velocity.y = 0;
        rainBlock3.velocity.y = 0;
        rainBlock4.velocity.y = 0;
        rainBlock5.velocity.y = 0;
        rainBlock6.velocity.y = 0;
        rainBlock7.velocity.y = 0;
        rainBlock8.velocity.y = 0;
        rainBlock9.velocity.y = 0;
        rainBlock10.velocity.y = 0;
        rainBlock11.velocity.y = 0;
        rainBlock12.velocity.y = 0;
        rainBlock13.velocity.y = 0;
        rainBlock14.velocity.y = 0;
        rainBlock15.velocity.y = 0;
        rainBlock16.velocity.y = 0;

        endButton.velocity.y = 0;
        openDoorButton.velocity.y = 0;
        openDoorButton2.velocity.y = 0;

    } else if (player.position.x <= rainBlock11.position.x + rainBlock11.width 
        && player.position.x + player.width >= rainBlock11.position.x 
        && player.position.y + player.height >= rainBlock11.position.y 
        && player.position.y <= rainBlock11.position.y + rainBlock11.height) {

        
        window.location.reload();

        player.position.x = 1000;
        player.position.y = 1000;
        terrain1.velocity.y = 0;
        terrain2.velocity.y = 0;
        terrain3.velocity.y = 0;

        rainBlock1.velocity.y = 0;
        rainBlock2.velocity.y = 0;
        rainBlock3.velocity.y = 0;
        rainBlock4.velocity.y = 0;
        rainBlock5.velocity.y = 0;
        rainBlock6.velocity.y = 0;
        rainBlock7.velocity.y = 0;
        rainBlock8.velocity.y = 0;
        rainBlock9.velocity.y = 0;
        rainBlock10.velocity.y = 0;
        rainBlock11.velocity.y = 0;
        rainBlock12.velocity.y = 0;
        rainBlock13.velocity.y = 0;
        rainBlock14.velocity.y = 0;
        rainBlock15.velocity.y = 0;
        rainBlock16.velocity.y = 0;

        endButton.velocity.y = 0;
        openDoorButton.velocity.y = 0;
        openDoorButton2.velocity.y = 0;

    } else if (player.position.x <= rainBlock12.position.x + rainBlock12.width 
        && player.position.x + player.width >= rainBlock12.position.x 
        && player.position.y + player.height >= rainBlock12.position.y 
        && player.position.y <= rainBlock12.position.y + rainBlock12.height) {

        
        window.location.reload();

        player.position.x = 1000;
        player.position.y = 1000;
        terrain1.velocity.y = 0;
        terrain2.velocity.y = 0;
        terrain3.velocity.y = 0;

        rainBlock1.velocity.y = 0;
        rainBlock2.velocity.y = 0;
        rainBlock3.velocity.y = 0;
        rainBlock4.velocity.y = 0;
        rainBlock5.velocity.y = 0;
        rainBlock6.velocity.y = 0;
        rainBlock7.velocity.y = 0;
        rainBlock8.velocity.y = 0;
        rainBlock9.velocity.y = 0;
        rainBlock10.velocity.y = 0;
        rainBlock11.velocity.y = 0;
        rainBlock12.velocity.y = 0;
        rainBlock13.velocity.y = 0;
        rainBlock14.velocity.y = 0;
        rainBlock15.velocity.y = 0;
        rainBlock16.velocity.y = 0;

        endButton.velocity.y = 0;
        openDoorButton.velocity.y = 0;
        openDoorButton2.velocity.y = 0;

    } else if (player.position.x <= rainBlock13.position.x + rainBlock13.width 
        && player.position.x + player.width >= rainBlock13.position.x 
        && player.position.y + player.height >= rainBlock13.position.y 
        && player.position.y <= rainBlock13.position.y + rainBlock13.height) {

        
        window.location.reload();

        player.position.x = 1000;
        player.position.y = 1000;
        terrain1.velocity.y = 0;
        terrain2.velocity.y = 0;
        terrain3.velocity.y = 0;

        rainBlock1.velocity.y = 0;
        rainBlock2.velocity.y = 0;
        rainBlock3.velocity.y = 0;
        rainBlock4.velocity.y = 0;
        rainBlock5.velocity.y = 0;
        rainBlock6.velocity.y = 0;
        rainBlock7.velocity.y = 0;
        rainBlock8.velocity.y = 0;
        rainBlock9.velocity.y = 0;
        rainBlock10.velocity.y = 0;
        rainBlock11.velocity.y = 0;
        rainBlock12.velocity.y = 0;
        rainBlock13.velocity.y = 0;
        rainBlock14.velocity.y = 0;
        rainBlock15.velocity.y = 0;
        rainBlock16.velocity.y = 0;

        endButton.velocity.y = 0;
        openDoorButton.velocity.y = 0;
        openDoorButton2.velocity.y = 0;

    } else if (player.position.x <= rainBlock14.position.x + rainBlock14.width 
        && player.position.x + player.width >= rainBlock14.position.x 
        && player.position.y + player.height >= rainBlock14.position.y 
        && player.position.y <= rainBlock14.position.y + rainBlock14.height) {

        
        window.location.reload();

        player.position.x = 1000;
        player.position.y = 1000;
        terrain1.velocity.y = 0;
        terrain2.velocity.y = 0;
        terrain3.velocity.y = 0;

        rainBlock1.velocity.y = 0;
        rainBlock2.velocity.y = 0;
        rainBlock3.velocity.y = 0;
        rainBlock4.velocity.y = 0;
        rainBlock5.velocity.y = 0;
        rainBlock6.velocity.y = 0;
        rainBlock7.velocity.y = 0;
        rainBlock8.velocity.y = 0;
        rainBlock9.velocity.y = 0;
        rainBlock10.velocity.y = 0;
        rainBlock11.velocity.y = 0;
        rainBlock12.velocity.y = 0;
        rainBlock13.velocity.y = 0;
        rainBlock14.velocity.y = 0;
        rainBlock15.velocity.y = 0;
        rainBlock16.velocity.y = 0;

        endButton.velocity.y = 0;
        openDoorButton.velocity.y = 0;
        openDoorButton2.velocity.y = 0;

    } else if (player.position.x <= rainBlock15.position.x + rainBlock15.width 
        && player.position.x + player.width >= rainBlock15.position.x 
        && player.position.y + player.height >= rainBlock15.position.y 
        && player.position.y <= rainBlock15.position.y + rainBlock15.height) {

        
        window.location.reload();

        player.position.x = 1000;
        player.position.y = 1000;
        terrain1.velocity.y = 0;
        terrain2.velocity.y = 0;
        terrain3.velocity.y = 0;

        rainBlock1.velocity.y = 0;
        rainBlock2.velocity.y = 0;
        rainBlock3.velocity.y = 0;
        rainBlock4.velocity.y = 0;
        rainBlock5.velocity.y = 0;
        rainBlock6.velocity.y = 0;
        rainBlock7.velocity.y = 0;
        rainBlock8.velocity.y = 0;
        rainBlock9.velocity.y = 0;
        rainBlock10.velocity.y = 0;
        rainBlock11.velocity.y = 0;
        rainBlock12.velocity.y = 0;
        rainBlock13.velocity.y = 0;
        rainBlock14.velocity.y = 0;
        rainBlock15.velocity.y = 0;
        rainBlock16.velocity.y = 0;

        endButton.velocity.y = 0;
        openDoorButton.velocity.y = 0;
        openDoorButton2.velocity.y = 0;

    } else if (player.position.x <= rainBlock16.position.x + rainBlock16.width 
        && player.position.x + player.width >= rainBlock16.position.x 
        && player.position.y + player.height >= rainBlock16.position.y 
        && player.position.y <= rainBlock16.position.y + rainBlock16.height) {

        
        window.location.reload();

        player.position.x = 1000;
        player.position.y = 1000;
        terrain1.velocity.y = 0;
        terrain2.velocity.y = 0;
        terrain3.velocity.y = 0;

        rainBlock1.velocity.y = 0;
        rainBlock2.velocity.y = 0;
        rainBlock3.velocity.y = 0;
        rainBlock4.velocity.y = 0;
        rainBlock5.velocity.y = 0;
        rainBlock6.velocity.y = 0;
        rainBlock7.velocity.y = 0;
        rainBlock8.velocity.y = 0;
        rainBlock9.velocity.y = 0;
        rainBlock10.velocity.y = 0;
        rainBlock11.velocity.y = 0;
        rainBlock12.velocity.y = 0;
        rainBlock13.velocity.y = 0;
        rainBlock14.velocity.y = 0;
        rainBlock15.velocity.y = 0;
        rainBlock16.velocity.y = 0;

        endButton.velocity.y = 0;
        openDoorButton.velocity.y = 0;
        openDoorButton2.velocity.y = 0;

    }
}

animate()

let clicking = false;

    const clicked = function() {
        clicking = true;
    };

let pausing = false;

    const paused = function() {
        pausing = true;
    };

window.addEventListener('keydown', (event) => {
    console.log(event.key)
    switch (event.key) {
        case ' ':
            player.clicking = true;
            break
    }
    switch (event.key) {
        case 'p':
            player.pausing = true;
            break
    }
})

window.addEventListener('keyup', (event) => {
    console.log(event.key)
    switch (event.key) {
        case ' ':
            player.clicking = false;
            break
    }
    switch (event.key) {
        case 'p':
            player.pausing = false;
            break
    }
})
