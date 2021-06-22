
// Name       : Hyunjun Lee
// Assignment : Final Project - Make a Game
// Course     : CS099
// Spring 2021

class Warrior
{
  constructor()
  {
    this.x = width/2 + 300
    this.y = height- 90
    this.xSpeed = 5
    this.ySpeed = 5
    this.z = 40
    this.img17 = loadImage('image/image21.png')
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
    this.barrier_gate()
    this.ballRanges()
  }
  
  origin()
  {
    if (this.y < 0)
    {
        this.y = height-30
        number++
    }
    
    if (number > 1)
    {
        number = 0
    }
  }

  draw()
  {
    push()
    noStroke()
    fill('white')
    circle(this.x, this.y, this.z)
    image(this.img17, this.x-25, this.y-20, 50, 40)
    pop()
  }

  barrier_gate()
  {
    //gate

    if(gate.y -60 < this.y
        && gate.y + 60 > this.y
        && gate.x - 10 >  this.x-25
        && this.x +25 >= gate.x -10
        && this.xSpeed > 0)
        {
          this.y = this.y 
          this.x = this.x - 10
          textSize(150)
          text('Click V', 190, height/2 - 50)
        }

    //barrier_1
    if(barrier_1.x -350 < this.x
       && barrier_1.x + 350 > this.x
       && barrier_1.y - 10 >  this.y-25
       && this.y +25 >= barrier_1.y -10
       && this.ySpeed > 0)
      {
          this.y = this.y - 10
          this.x = this.x 
      }
       
    if(barrier_1.x -350 < this.x
       && barrier_1.x +350 > this.x
       && this.y + 25 > barrier_1.y+10
       && this.y -25 <= barrier_1.y+10
       && this.ySpeed > 0)
       {
            this.y = this.y + 10
            this.x = this.x 
       }
    
    //barrier_2
    if(barrier_2.x -350 < this.x
       && barrier_2.x + 350 > this.x
       && barrier_2.y - 10 >  this.y-25
       && this.y +25 >= barrier_2.y -10
       && this.ySpeed > 0)
       {
            this.y = this.y - 10
            this.x = this.x 
       }
          
    if(barrier_2.x -350 < this.x
       && barrier_2.x +350 > this.x
       && this.y + 25 > barrier_2.y+10
       && this.y -25 <= barrier_2.y+10
       && this.ySpeed > 0)
       {
            this.y = this.y + 10
            this.x = this.x 
       }

    //barrier_3
    if(barrier_3.x -350 < this.x
      && barrier_3.x + 350 > this.x
      && barrier_3.y - 10 >  this.y-25
      && this.y +25 >= barrier_3.y -10
      && this.ySpeed > 0)
      {
           this.y = this.y - 10
           this.x = this.x 
      }
         
   if(barrier_3.x -350 < this.x
      && barrier_3.x +350 > this.x
      && this.y + 25 > barrier_3.y+10
      && this.y -25 <= barrier_3.y+10
      && this.ySpeed > 0)
      {
           this.y = this.y + 10
           this.x = this.x 
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

class Barrier
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
