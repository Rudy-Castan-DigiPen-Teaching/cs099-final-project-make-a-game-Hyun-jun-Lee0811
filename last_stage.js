
// Name       : Hyunjun Lee
// Assignment : Final Project - Make a Game
// Course     : CS099
// Spring 2021

class Warrior_2
{
  constructor()
  {
    this.x = 64
    this.y = height/2
    this.weight = 0.5
    this.xSpeed = 5
    this.ySpeed = 5
    this.speed = 0
    this.z = 40
    this.up_arrow = -2
    this.img38 = loadImage('image/image2111.png')
  }
  
  update()
  {
    this.speed += this.weight
    this.y += this.speed
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
       this.speed += this.up_arrow;
    }
    if(keyCode===32)
    {
        this.x = this.x + 7
    }

    if (this.y < 0) 
    {
      this.y = 0
      this.speed = 0
    }
    if (this.y > height)
    {
      this.y = height
      this.speed = 0
    }
    this.poison_walls()
    this.ballRanges()
  }
  
  draw()
  {
    
        push()
        noStroke()
        fill('white')
        circle(this.x, this.y, this.z)
        image(this.img38, this.x-20, this.y-20, 40, 40)
        pop()
  }

  poison_walls()
  {
    //poison_wall
    if(poison_wall.y -180 < this.y
        && poison_wall.y + 180 > this.y
        && poison_wall.x - 10 >  this.x-25
        && this.x +25 >= poison_wall.x -10
        && this.xSpeed > 0)
        {
          this.y = this.x
          this.x = this.y
          push()
          translate(100, 50)
          translate(25, 70)
          noStroke()
          fill(0)
          rect(295, 200, 520, 250)
          fill('white')
          rect(295, 200, 490, 220)
          pop()
          push()
          translate(100, 50)
          textSize(80)
          fill('#708090')
          text('GAME OVER', 88, height/2 - 90)
          pop()

          //end
          noLoop()
        }

    if(poison_wall_1.y -180 < this.y
        && poison_wall_1.y + 180 > this.y
        && poison_wall_1.x - 10 >  this.x-25
        && this.x +25 >= poison_wall_1.x -10
        && this.xSpeed > 0)
        {
            this.y = this.x
            this.x = this.y

            push()
            translate(100, 50)
            translate(25, 70)
            noStroke()
            fill(0)
            rect(295, 200, 520, 250)
            fill('white')
            rect(295, 200, 490, 220)
            pop()

            push()
            translate(100, 50)
            textSize(80)
            fill('#708090')
            text('GAME OVER', 88, height/2 - 90)
            pop()

            //end
            noLoop()
        }

    if(poison_wall_2.y -260 < this.y
        && poison_wall_2.y + 260 > this.y
        && poison_wall_2.x - 10 >  this.x-25
        && this.x +25 >= poison_wall_2.x -10
        && this.xSpeed > 0)
        {
            this.y = this.x
            this.x = this.y
    
            push()
            translate(100, 50)
            translate(25, 70)
            noStroke()
            fill(0)
            rect(295, 200, 520, 250)
            fill('white')
            rect(295, 200, 490, 220)
            pop()

            push()
            translate(100, 50)
            textSize(80)
            fill('#708090')
            text('GAME OVER', 88, height/2 - 90)
            pop()

            //end
            noLoop()
        }

    if(poison_wall_3.y -210 < this.y
        && poison_wall_3.y + 210 > this.y
        && poison_wall_3.x - 10 >  this.x-25
        && this.x +25 >= poison_wall_3.x -10
        && this.xSpeed > 0)
        {
            this.y = this.x
            this.x = this.y
        
            push()
            translate(100, 50)
            translate(25, 70)
            noStroke()
            fill(0)
            rect(295, 200, 520, 250)
            fill('white')
            rect(295, 200, 490, 220)
            pop()

            push()
            translate(100, 50)
            textSize(80)
            fill('#708090')
            text('GAME OVER', 88, height/2 - 90)
            pop()
            
            //end
            noLoop()
        }

    if(poison_wall_4.y -300 < this.y
        && poison_wall_4.y + 300 > this.y
        && poison_wall_4.x - 10 >  this.x-25
        && this.x +25 >= poison_wall_4.x -10
        && this.xSpeed > 0)
        {
            this.y = this.x
            this.x = this.y
            
            push()
            translate(100, 50)
            translate(25, 70)
            noStroke()
            fill(0)
            rect(295, 200, 520, 250)
            fill('white')
            rect(295, 200, 490, 220)
            pop()

            push()
            translate(100, 50)
            textSize(80)
            fill('#708090')
            text('GAME OVER', 88, height/2 - 90)
            pop()
            
            //end
            noLoop()
            }

    if(poison_wall_5.y -180< this.y
        && poison_wall_5.y + 180> this.y
        && poison_wall_5.x - 10 >  this.x-25
        && this.x +25 >= poison_wall_5.x -10
        && this.xSpeed > 0)
        {
            this.y = this.x
            this.x = this.y
                
            push()
            translate(100, 50)
            translate(25, 70)
            noStroke()
            fill(0)
            rect(295, 200, 520, 250)
            fill('white')
            rect(295, 200, 490, 220)
            pop()

            push()
            translate(100, 50)
            textSize(80)
            fill('#708090')
            text('GAME OVER', 88, height/2 - 90)
            pop()
                    
            //end
            noLoop()
        }

    if(poison_wall_6.y -180< this.y
        && poison_wall_6.y + 180> this.y
        && poison_wall_6.x - 10 >  this.x-25
        && this.x +25 >= poison_wall_6.x -10
        && this.xSpeed > 0)
        {
            this.y = this.x
            this.x = this.y
                    
            push()
            translate(100, 50)
            translate(25, 70)
            noStroke()
            fill(0)
            rect(295, 200, 520, 250)
            fill('white')
            rect(295, 200, 490, 220)
            pop()
    
            push()
            translate(100, 50)
            textSize(80)
            fill('#708090')
            text('GAME OVER', 88, height/2 - 90)
            pop()
                        
            //end
            noLoop()
        }

    if(poison_wall_7.y -330< this.y
        && poison_wall_7.y + 330> this.y
        && poison_wall_7.x - 10 >  this.x-25
        && this.x +25 >= poison_wall_7.x -10
        && this.xSpeed > 0)
        {
            this.y = this.x
            this.x = this.y
                    
            push()
            translate(100, 50)
            translate(25, 70)
            noStroke()
            fill(0)
            rect(295, 200, 520, 250)
            fill('white')
            rect(295, 200, 490, 220)
            pop()
    
            push()
            translate(100, 50)
            textSize(80)
            fill('#708090')
            text('GAME OVER', 88, height/2 - 90)
            pop()
                        
            //end
            noLoop()
        }

        if(poison_wall_8.y -180 < this.y
            && poison_wall_8.y + 180 > this.y
            && poison_wall_8.x - 10 >  this.x-25
            && this.x +25 >= poison_wall_8.x -10
            && this.xSpeed > 0)
            {
              this.y = this.x
              this.x = this.y
              push()
              translate(100, 50)
              translate(25, 70)
              noStroke()
              fill(0)
              rect(295, 200, 520, 250)
              fill('white')
              rect(295, 200, 490, 220)
              pop()
              push()
              translate(100, 50)
              textSize(80)
              fill('#708090')
              text('GAME OVER', 88, height/2 - 90)
              pop()
    
              //end
              noLoop()
            }
    
        if(poison_wall_9.y -180 < this.y
            && poison_wall_9.y + 180 > this.y
            && poison_wall_9.x - 10 >  this.x-25
            && this.x +25 >= poison_wall_9.x -10
            && this.xSpeed > 0)
            {
                this.y = this.x
                this.x = this.y
    
                push()
                translate(100, 50)
                translate(25, 70)
                noStroke()
                fill(0)
                rect(295, 200, 520, 250)
                fill('white')
                rect(295, 200, 490, 220)
                pop()
    
                push()
                translate(100, 50)
                textSize(80)
                fill('#708090')
                text('GAME OVER', 88, height/2 - 90)
                pop()
    
                //end
                noLoop()
            }


        if(walll2.y -60 < this.y
            && walll2.y + 60 > this.y
            && walll2.x - 10 >  this.x-25
            && this.x +25 >= walll2.x -10
            && this.xSpeed > 0)
            {
              this.y = this.y 
              this.x = this.x 
              push()
              translate(100, 50)
              translate(25, 70)
              noStroke()
              fill(0)
              rect(295, 200, 520, 250)
              fill('white')
              rect(295, 200, 490, 220)
              pop()
      
              push()
              translate(100, 50)
              textSize(80)
              fill('#708090')
              text('Click M', 188, height/2 - 90)
              pop()
            
              //end
              noLoop()
            }
    }

  ballRanges()
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

}

class Poison_Wall
{
    constructor(starting_x, starting_y,starting_q)
    {
        this.x = starting_x
        this.y = starting_y
        this.q = starting_q
    }

    update()
    {
        this.x = this.x
    }

    draw()
    {
        rectMode(CENTER)
        fill('gray')
        rect(this.x, this.y, 20, this.q)
        this.x -= 2
    }
}
