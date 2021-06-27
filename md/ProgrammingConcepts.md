
# Shapes
We can see what this object looks like from Shape code


I usually used rect. 

I was used to create a barrier that the warrior could not pass through.

ex) arc, ellipse, circle, line, quad, triangle, etc.
~~~ 
rect(this.x, this.y, this.p, this.q)

rect(width/2, 700, width, 280) 
~~~

# Colors
Colors allow us to distinguish things not only by shape but also by color.

We can use various colors such as red, yellow, and blue.

ex) fill(), color(), etc.

~~~
draw()
{
   push()
   noStroke()
   fill('white')
   circle(this.x, this.y, this.CircleSize)
   image(this.img0, this.x - 25,this.y - 20, 50, 40)
   pop()
}
    
draw()
{
   //door
   push()
   noStroke()
   fill('#5F9EA0')
   rect(width/2 , 800, 250, 20)
   fill('#FAFAD2')
   rect(width/2 - 270 , 800, 250, 20)
   fill('#000080')
   rect(width/2 + 270, 800, 250, 20)
   pop()
}
~~~
# Variables
Variables can declare a variety of variables, such as integers, characters, and so on.

As you draw from the list, you can use a variety of variables for each type there.

ex) var, let
~~~
var door =
{
    button_left : 218,
    button_top : 140,
    button_width  : 170,
    button_height : 470,
    button_mouseIsOver : false
}

//SCREEN_4
let fire = []
let ghost = []
let number = 0
let img39
let img40
let img41

//SCREEN_6
let img26

//SCREEN_7
let img27
~~~
# Conditional Statements
A conditional statement is a function that executes when certain conditions are met.

So we can use conditional statements to get multiple values.

ex) if, switch case
~~~
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

    if(keyCode === 70)
    {
        switch(Screen_1)
        {
            case GAME_SCREEN_1:
                Screen_1 = GAME_SCREEN_1_2
            break
        }
    }
    
    if(keyCode === 74)
    {
        switch(Screen_1)
        {
            case GAME_SCREEN_1:
                Screen_1 = GAME_SCREEN_1_3
            break
        }
    }
~~~
# Loops
The for statement repeats the commands in the loop statement, starting with the initial value, until the conditional expression becomes fals.

In other words, if the conditional expression is true, the command within the loop statement is repeated, and if the conditional expression is false, the command within the loop statement is not carried out.


ex) for
~~~
for (let a = 0; a < PI; a+=0.01)
{
   let t = random(20, 100)
   let x = t+550 * sin(a)
   let y = t+150 * sin(a)
   vertex(x,y)
}

for(let particle of E)
{
    particle.update()
    particle.draw()
}
~~~
# Functions
A function is a data type that collects associated codes to process a series of common tasks.

In order to execute function, there must be two functions: a function declaration and a function call.

Function is used through function declaration and function call.
~~~
DetermineEmotion(face)
  {
    var emotion;
    if (IsMouseOnFace(face))
    {
      emotion = DEVIL_MESSAGE
    } else if(IsMouseInsideCanvas())
    {
      emotion = SCREEN
    } 
    else
    {
        emotion = DEVIL_MESSAGE
    }
    return emotion
  }
~~~
# Classes
class is the same as the constructor function.


So it creates objects through the new keyword.

ex) class
~~~
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

          push()
          translate(155, 20)
          noStroke()
          fill(0)
          rect(295, 200, 520, 250)
          fill('white')
          rect(295, 200, 490, 220)
          pop()

          textSize(150)
          text('Click V', 190, height/2 - 150)
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
~~~
# Arrays
Note that it starts with index 0, not index 1.

It is also possible to declare elements in advance when declaring variables, but it is possible to add, delete, and modify them afterwards.

Arrays and objects can be used to list and store various values.

ex) []
~~~
let fire = []

function setup()
{
    for (let f = 0; f < 10; ++f)
    {
      fire[f] = new Fire (random(width), random(height-100))
    }
}

function draw()
{
     for (let f = 0; f < 10; ++f)
     {
         fire[f].draw()
         fire[f].update()
         fire[f].contact()
     }
}

~~~
