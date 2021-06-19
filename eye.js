
// Name       : Hyunjun Lee
// Assignment : Final Project - Make a Game
// Course     : CS099
// Spring 2021

class Eye
{
    constructor(starting_x,starting_y)
    {
        this.x =starting_x
        this.y=starting_y
        this.Eye = new NoiseLoop(1, 200, 300)
    }

    update(a)
    {
        this.Eye.Set(a)
    }

    draw()
    {
        push()
        noStroke()
        fill('black')
        circle(this.x, this.y, this.Eye.Get())
        pop()
    }
}