const W_KEY = 87; 
const A_KEY = 65; 
const S_KEY = 83; // K
const D_KEY = 68; // L

const car = document.getElementById('car');


let keys = {
    up: false,
    down: false,
    left: false,
    right: false,
};

document.onkeydown = (e) => {
if (e.keyCode == W_KEY) {
    keys.up = true;
    document.getElementById('up').className = 'click';
} else if (e.keyCode == A_KEY) {
    keys.left = true;
    document.getElementById('left').className = 'click';
} else if (e.keyCode == S_KEY) {
    keys.down = true;
    document.getElementById('down').className = 'click';
} else if (e.keyCode == D_KEY) {
    keys.right = true;
    document.getElementById('right').className = 'click';
}
};

document.onkeyup = (e) => {
if (e.keyCode == W_KEY) {
    keys.up = false;
    document.getElementById('up').className = '';
} else if (e.keyCode == A_KEY) {
    keys.left = false;
    document.getElementById('left').className = '';
} else if (e.keyCode == S_KEY) {
    keys.down = false;
    document.getElementById('down').className = '';
} else if (e.keyCode == D_KEY) {
    keys.right = false;
    document.getElementById('right').className = '';
}
};

const update = () => {
if (keys.up) {
    let { x, y, z } = car.getAttribute('position');
    let ry = car.getAttribute('rotation').y;
    z -= Math.cos(ry * Math.PI / 180) ;
    x -= Math.sin(ry * Math.PI / 180) ;
    car.setAttribute('position', { x, y, z });
} else if (keys.down) {
    let { x, y, z } = car.getAttribute('position');
    let ry = car.getAttribute('rotation').y;
    z += Math.cos(ry * Math.PI / 180) ;
    x += Math.sin(ry * Math.PI / 180) ;
    car.setAttribute('position', { x, y, z });
}

if (keys.left) {
    let { x, y, z } = car.getAttribute('rotation');
    y += 3;
    car.setAttribute('rotation', { x, y, z });
} else if (keys.right) {
    let { x, y, z } = car.getAttribute('rotation');
    y -= 3;
    car.setAttribute('rotation', { x, y, z });
    }
};

setInterval(update, 10);