
// Name       : Hyunjun Lee
// Assignment : Final Project - Make a Game
// Course     : CS099
// Spring 2021

class Lava
{
    constructor(starting_x, starting_y)
    {
        this.x = starting_x
        this.y = starting_y

    }

    update()
    {
        this.x = this.x + random(-1, 1)
        this.y = this.y - 2
  
       if (this.y < 0)
       {
         this.y = height
       }
    }

    draw()
    {        
        noStroke()
        fill('red')
        circle(this.x, this.y, 10)
        circle(this.x-100, this.y-60, 10)
        circle(this.x+100, this.y-80, 10)
        circle(this.x+100, this.y+220, 10)
        circle(this.x-50, this.y+80, 10)
        circle(this.x-140, this.y+120, 10)
        circle(this.x-20, this.y+260, 10)
    }
}


class Warrior_1
{
  constructor()
  {
    this.x = width/2 + 300
    this.y = 330
    this.xSpeed = 5
    this.ySpeed = 5
    this.z = 40
    this.img25 = loadImage('image/image211.png')
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

    this.outside_door_wall()
    this.ballRanges()
  }
  
  draw()
  {
    push()
    noStroke()
    fill('white')
    circle(this.x, this.y, this.z)
    image(this.img25,this.x-20,this.y-20,40,40)
    pop()
  }

  outside_door_wall()
  {
    //outside_door
    if(outside_door.y -60 < this.y
        && outside_door.y + 60 > this.y
        && outside_door.x - 10 >  this.x-25
        && this.x +25 >= outside_door.x -10
        && this.xSpeed > 0)
        {
          this.y = this.y 
          this.x = this.x - 5
          push()
          translate(25, 70)
          noStroke()
          fill(0)
          rect(295, 200, 520, 250)
          fill('white')
          rect(295, 200, 490, 220)
          pop()


          push()
          textSize(150)
          fill('#708090')
          text('Click A', 80, height/2 - 70)
          pop()

          push()
          translate(50,120)
          fill('red')
          beginShape()
        
          for (let a = 0; a < PI; a+=0.01)
          {
            let t = random(20, 100)
            let x = t+550 * sin(a)
            let y = t+150 * sin(a)
            vertex(x,y)
          }
        
          endShape()
          pop()

          push()
          translate(680,320)
          fill('red')
          beginShape()
        
          for (let a = 0; a < TWO_PI; a+=0.1)
          {
            let t = random(50, 100)
            let x = t * cos(a)
            let y = t * sin(a)
            vertex(x,y)
          }
        
          endShape()
          pop()
          Attack.loop()
        }
    
    //transparent_wall
    if(transparent_wall.y -60 < this.y
        && transparent_wall.y + 60 > this.y
        && transparent_wall.x - 10 >  this.x-25
        && this.x +25 >= transparent_wall.x -10
        && this.xSpeed > 0)
        {
          this.y = this.y 
          this.x = this.x - 10
        }

    if(transparent_wall.y -60 < this.y
        && transparent_wall.y +60 > this.y
        && this.x + 25 > transparent_wall.x+10
        && this.x -25 <= transparent_wall.x+10
        && this.xSpeed > 0)
       {
           this.y = this.y 
           this.x = this.x + 5
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

class Outside_door
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
