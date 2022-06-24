const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height)


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
    }
}

class Sprite1 {
    constructor({position, velocity, width, height}) {
        this.position = position
        this.velocity = velocity
        this.width = width
        this.height = height
    }

    draw() {
        c.fillStyle = 'lightgreen'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
       this.draw() 
       this.position.y += this.velocity.y
    }
}

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
    }

    clicking() {
        this.clicking = true;
    }
}

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
    }
}

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

const playerPositionX = function(e) {
    while (player.position.x != e.clientX) {
        player.position.x = e.clientX
        console.log(e.clientX);
    }
}

const playerPositionY = function(e) {
    while (player.position.y != e.clientY) {
        player.position.y = e.clientY ;
        console.log(e.clientY);
    }
}

window.addEventListener("mousemove", playerPositionX);
window.addEventListener("mousemove", playerPositionY);

let bg_SOUND=new Audio('music/Clavar-la-espada.mp3');

bg_SOUND.volume=0.5;      

bg_SOUND.play();

const background = new Backgroundimg ({
    position: {
    x: 0,
    y: 0
    },
    imageSrc: './img/background.png'
})


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




const terrain1 = new Sprite ({
    position: {
    x: 1500,
    y: -10
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 497,
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
    y: -1300
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 1024,
    height: 300
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
    x: 395,
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
    x: 269,
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
    x: 496,
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
    x: 352,
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
    x: 526,
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
    x: 118,
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
    x: 478,
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
    width: 1024,
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

const startButton = new Sprite2 ({
    position: {
    x: 562,
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
    x: 362,
    y: 475
    },
    velocity: {
        x: 0,
        y: 0,
    },
    width: 100,
    height: 50
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

function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)

    background.update()
    background1.update()
    background2.update()
    background3.update()
    background4.update()
    background5.update()

    terrain1.update()
    terrain2.update()
    terrain3.update()

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

    player.update()
    startButton.update()
    startButton2.update()
    endButton.update()
    openDoorButton.update()
    endBlock1.update()
    endBlock2.update()

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

    } if (player.position.x <= endBlock1.position.x + endBlock1.width 
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
    } if (player.position.x <= endBlock2.position.x + endBlock2.width 
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
    } else if (player.position.x <= background1.position.x + background1.width 
        && player.position.x + player.width >= background1.position.x 
        && player.position.y + player.height >= background1.position.y 
        && player.position.y <= background1.position.y + background1.height) {
        
        c.fillStyle = 'white';
        c.font = "48px Arial";
        c.fillText("CLICK ME FAST I'LL HELP YOU", 200, 100);

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

    } else if (player.position.x <= background4.position.x + background4.width 
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
        rainBlock1.velocity.y = rainBlock1.velocity.y + 12;
        rainBlock2.velocity.y = rainBlock2.velocity.y + 12;
        rainBlock3.velocity.y = rainBlock3.velocity.y + 12;
        rainBlock4.velocity.y = rainBlock4.velocity.y + 12;
        rainBlock5.velocity.y = rainBlock5.velocity.y + 12;
        rainBlock6.velocity.y = rainBlock6.velocity.y + 12;
        rainBlock7.velocity.y = rainBlock7.velocity.y + 12;
        rainBlock8.velocity.y = rainBlock8.velocity.y + 12;
        rainBlock9.velocity.y = rainBlock9.velocity.y + 12;
        rainBlock10.velocity.y = rainBlock10.velocity.y + 12;
        rainBlock11.velocity.y = rainBlock11.velocity.y + 12;
        rainBlock12.velocity.y = rainBlock12.velocity.y + 12;
        rainBlock13.velocity.y = rainBlock13.velocity.y + 12;
        rainBlock14.velocity.y = rainBlock14.velocity.y + 12;
        rainBlock15.velocity.y = rainBlock15.velocity.y + 12;
        rainBlock16.velocity.y = rainBlock16.velocity.y + 12;

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
            

            player.pausing = false;

        setTimeout (() => {
        terrain1.velocity.y = terrain1.velocity.y + 2;
        terrain2.velocity.y = terrain2.velocity.y + 2;
        terrain3.velocity.y = terrain3.velocity.y + 5.7;
        endBlock1.velocity.y = endBlock1.velocity.y + 2;
        background1.velocity.y = background1.velocity.y + 2;
        endButton.velocity.y = endButton.velocity.y + 2;
        openDoorButton.velocity.y = openDoorButton.velocity.y + 2;
        }, 1000)

        console.log('pausing')

    } else if (player.position.x <= startButton.position.x + startButton.width 
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
        startButton.position.x = startButton.position.x + 1000;
        startButton.position.y = startButton.position.y + 1000;
        startButton2.position.x = startButton2.position.x + 1000;
        startButton2.position.y = startButton2.position.y + 1000;
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
        
        rainBlock1.velocity.y = rainBlock1.velocity.y + 12;
        rainBlock2.velocity.y = rainBlock2.velocity.y + 12;
        rainBlock3.velocity.y = rainBlock3.velocity.y + 12;
        rainBlock4.velocity.y = rainBlock4.velocity.y + 12;
        rainBlock5.velocity.y = rainBlock5.velocity.y + 12;
        rainBlock6.velocity.y = rainBlock6.velocity.y + 12;
        rainBlock7.velocity.y = rainBlock7.velocity.y + 12;
        rainBlock8.velocity.y = rainBlock8.velocity.y + 12;
        rainBlock9.velocity.y = rainBlock9.velocity.y + 12;
        rainBlock10.velocity.y = rainBlock10.velocity.y + 12;
        rainBlock11.velocity.y = rainBlock11.velocity.y + 12;
        rainBlock12.velocity.y = rainBlock12.velocity.y + 12;
        rainBlock13.velocity.y = rainBlock13.velocity.y + 12;
        rainBlock14.velocity.y = rainBlock14.velocity.y + 12;
        rainBlock15.velocity.y = rainBlock15.velocity.y + 12;
        rainBlock16.velocity.y = rainBlock16.velocity.y + 12;

        endButton.velocity.y = endButton.velocity.y + 2;
        endBlock2.velocity.y = endBlock2.velocity.y + 2;
        background2.velocity.y = background2.velocity.y + 4;
        background2.position.y = 0;
        startButton.position.x = startButton.position.x + 1000;
        startButton.position.y = startButton.position.y + 1000;
        startButton2.position.x = startButton2.position.x + 1000;
        startButton2.position.y = startButton2.position.y + 1000;
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
    } else if (player.position.x <= openDoorButton.position.x + openDoorButton.width 
        && player.position.x + player.width >= openDoorButton.position.x 
        && player.position.y + player.height >= openDoorButton.position.y 
        && player.position.y <= openDoorButton.position.y + openDoorButton.height
        && player.clicking) {
        
        terrain3.velocity.y = terrain3.velocity.y - 3;
        terrain3.position.x = terrain3.position.x + 1000;
        terrain3.position.y = terrain3.position.y + 1000;
        console.log('starting')


    } else if (player.position.x <= openDoorButton.position.x + openDoorButton.width 
        && player.position.x + player.width >= openDoorButton.position.x 
        && player.position.y + player.height >= openDoorButton.position.y 
        && player.position.y <= openDoorButton.position.y + openDoorButton.height) {

        background.velocity.y = background.velocity.y - 2;
        background.position.x = background.position.x + 1000;
        background.position.y = background.position.y + 1000;

        c.fillStyle = 'white';
        c.font = "48px Arial";
        c.fillText("CLICK ME FAST I'LL HELP YOU", 200, 100);
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
