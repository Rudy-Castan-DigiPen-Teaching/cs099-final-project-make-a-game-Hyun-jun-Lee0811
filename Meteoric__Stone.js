
// Name       : Hyunjun Lee
// Assignment : Final Project - Make a Game
// Course     : CS099
// Spring 2021

class Meteoric_Stone_1
{
    constructor()
    {
        this.x = 50
        this.y = 0
        this.img25 = loadImage('image/Meteoric_Stone.png')
    }

    update()
    {
        this.x = this.x % width
        this.y = this.y % height
    }

    draw()
    {
        image(this.img25, this.x, this.y, 150, 150)
        image(this.img25, this.x-200, this.y-400, 150, 150)
        image(this.img25, this.x- 450, this.y-50, 150, 150)
        this.x += 2
        this.y += 2
    }
}