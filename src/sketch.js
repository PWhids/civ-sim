
let peeps = [];

function setup() {
    //createCanvas(window.innerWidth, window.innerHeight);
    noStroke();
    fill(0,0,0);
    peeps.push(new Person(new Vec2(60,60)));
}

function draw() {
    //ellipse(50, 50, 80, 80);
    Renderer.renderPeople(peeps);
}