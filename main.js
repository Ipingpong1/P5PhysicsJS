function setup(){
    cnv = createCanvas(800,1000)
    background(0)
    fr = 60
    frameRate(60)
}

sun = new orb(100,20)
sun.velocity = new vector(2,16)

t = 0
function draw(){
    clear() 
    background(0) 
    translate(0, height) 
    scale(1,-1) 

    grav_vec = new vector(0, -9.8/fr)
    sun.velocity.addVector(grav_vec)

    sun.move()
    sun.plotTrace()
    sun.showVelocity(5)
    sun.plot()

    t++
}