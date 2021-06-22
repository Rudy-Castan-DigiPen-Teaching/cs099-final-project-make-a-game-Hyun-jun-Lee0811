
// Name       : Hyunjun Lee
// Assignment : Final Project - Make a Game
// Course     : CS099
// Spring 2021

class particle
{
    constructor(start_x, start_y)
    {
        this.position =new Vec2(start_x, start_y)
        this.velocity = new Vec2(1,0)
        const speed = random(2,10)
        const direction = random(TWO_PI)
        this.velocity.setLength(speed)
        this.velocity.setAngle(direction)
        this.gry = new Vec2(0, 1)
        this.al = new Vec2( 0,random(3,3)) 
    }

    update()
    {
        this.position.addTo(this.velocity)
        this.gravity()
        this.ace()
    }

    draw()
    {
        push()
        noStroke()
        fill('skyblue')
        circle(this.position.x, this.position.y, 20)
        pop()
    }

    gravity()
    {
        this.velocity.addTo(this.gry)
    }

    ace()
    {
        this.velocity.addTo(this.al)
    }

}