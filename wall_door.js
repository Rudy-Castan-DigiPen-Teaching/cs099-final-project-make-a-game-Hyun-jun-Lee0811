
// Name       : Hyunjun Lee
// Assignment : Final Project - Make a Game
// Course     : CS099
// Spring 2021

class Ball
{
    constructor()
    {
        this.x = width/2
        this.y = 100
        this.xSpeed = 5
        this.ySpeed = 5
        this.CircleSize = 50
        this.img0 = loadImage('image/image2.png')
    }

    update()
    {



        if(keyIsDown(RIGHT_ARROW))
        {
            this.x += 3
        }
        else if(keyIsDown(LEFT_ARROW))
        {
            this.x -= 3
        }
        else if(keyIsDown(UP_ARROW))
        {
            this.y -= 3
        }
        
        else if(keyIsDown(DOWN_ARROW)) 
        {
            this.y += 3
        }
        

        this.ballRange()
        this.wall_door()
    }




    ballRange()
    {
        if(this.x < 0)
        {
            this.x = 0
        }
        else if(this.x > width)
        {
            this.x = width
        }
        else if(this.y < 0)
        {
            this.y = 0
        }
        else if(this.y > height)
        {
            this.y = height
        }
    }


    draw()
    {
        push()
        noStroke()
        fill('white')
        circle(this.x, this.y, this.CircleSize)
        image(this.img0, this.x - 25,this.y - 20, 50, 40)
        pop()
    }

    wall_door()
    {
        //wall
        if(wall.y -160 < this.y
            && wall.y + 160 > this.y
            && wall.x - 10 >  this.x-25
            && this.x +25 >= wall.x -10
            && this.xSpeed > 0)
            {
              this.y = this.y 
              this.x = this.x - 10
            }

        if(wall.y -160 < this.y
            && wall.y +160 > this.y
            && this.x + 25 > wall.x+10
            && this.x -25 <= wall.x+10
            && this.xSpeed > 0)
            {
               this.y = this.y 
               this.x = this.x+ 10
            }
        
        //wall1
        if(wall1.y -160 < this.y
            && wall1.y + 160 > this.y
            && wall1.x - 10 >  this.x-25
            && this.x +25 >= wall1.x -10
            && this.xSpeed > 0)
            {
              this.y = this.y 
              this.x = this.x - 10
            }

        if(wall1.y -160 < this.y
            && wall1.y +160 > this.y
            && this.x + 25 > wall1.x+10
            && this.x -25 <= wall1.x+10
            && this.xSpeed > 0)
           {
               this.y = this.y 
               this.x = this.x+ 10
            }

        //wall2
        if(wall2.x -125 < this.x
            && wall2.x + 125 > this.x
            && wall2.y - 10 >  this.y-25
            && this.y +25 >= wall2.y -10
            && this.ySpeed > 0)
            {
                this.y = this.y + 40
                this.x = this.x 
            }

            if(wall2.x -125 < this.x
                && wall2.x +125 > this.x
                && this.y + 25 > wall2.y+10
                && this.y -25 <= wall2.y+10
                && this.ySpeed < 0)
            {
                this.y = this.y - 10
                this.x = this.x 
            }

        //wall3
        if(wall3.x -125 < this.x
            && wall3.x + 125 > this.x
            && wall3.y - 10 >  this.y-25
            && this.y +25 >= wall3.y -10
            && this.ySpeed > 0)
            {
                this.y = this.y + 40
                this.x = this.x 
            }
        
        if(wall3.x -125 < this.x
            && wall3.x +125 > this.x
            && this.y + 25 > wall3.y+10
            && this.y -25 <= wall3.y+10
            && this.ySpeed < 0)
            {
                this.y = this.y - 10
                this.x = this.x 
            }

        //wall4
        if(wall4.x -125 < this.x
            && wall4.x + 125 > this.x
            && wall4.y - 10 >  this.y-25
            && this.y +25 >= wall4.y -10
            && this.ySpeed > 0)
            {
                this.y = this.y + 40
                this.x = this.x 
            }
    
            if(wall4.x -125 < this.x
                && wall4.x +125 > this.x
                && this.y + 25 > wall4.y+10
                && this.y -25 <= wall4.y+10
                && this.ySpeed < 0)
            {
                this.y = this.y - 10
                this.x = this.x 
            }

        //door1
        if(door1.x -125 < this.x
            && door1.x + 125 > this.x
            && door1.y - 10 >  this.y-25
            && this.y +25 >= door1.y -10
            && this.ySpeed > 0)
            {
                this.y = this.y - 10
                this.x = this.x 
                textSize(150)
                text('Click F', 190, height/2 - 50)
            }
        
        //door2
        if(door2.x -125 < this.x
            && door2.x + 125 > this.x
            && door2.y - 10 >  this.y-25
            && this.y +25 >= door2.y -10
            && this.ySpeed > 0)
            {
                this.y = this.y - 10
                this.x = this.x
                textSize(150)
                text('Click G', 190, height/2 - 50)
            }
        //door3
        if(door3.x -125 < this.x
            && door3.x + 125 > this.x
            && door3.y - 10 >  this.y-25
            && this.y +25 >= door3.y -10
            && this.ySpeed > 0)
            {
                this.y = this.y - 10
                this.x = this.x
                textSize(150)
                text('Click J', 190, height/2 - 50)
            }
    }
}

class Wall
{
    constructor(starting_x,starting_y,starting_p,starting_q)
    {
        this.x = starting_x
        this.y = starting_y
        this.p = starting_p
        this.q = starting_q
    }

    draw()
    {
        rectMode(CENTER)
        fill('black')
        rect(this.x, this.y, this.p, this.q)
    }
}