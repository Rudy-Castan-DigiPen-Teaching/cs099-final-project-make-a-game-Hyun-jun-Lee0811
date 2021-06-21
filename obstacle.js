
class Fire 
{
  constructor(x, y)
  {
    this.x = x
    this.y = y
    this.w = 40
    this.h = 40
    this.img15 = loadImage('image/fire.png')
  }

  update()
  { 
    if (this.y > height)
    {
      this.y = 0
    }
    this.y++
  }
  
  contact()
  {
    if (warrior.x + warrior.z/2 > this.x &&
        warrior.x < this.x + this.w &&
       warrior.y + warrior.z/2 > this.y &&
       warrior.y < this.y + this.h)
    {
      warrior.y = height 
    } 
  }

  draw()
  {
    push()
    noStroke()
    fill('#F08080')
    rect(this.x, this.y, this.w, this.h)
    image(this.img15, this.x-40, this.y-35, 80, 60)
    pop()
  }
}

class Ghost
{
  constructor(x, y)
  {
    this.x = x 
    this.y = y 
    this.w = 40
    this.h = 60
    this.img16 = loadImage('image/ghost.png')
  }

  update()
  {    
    if (this.x > width)
    {
      this.x = 0
    }
    this.x++
  }
  
  contact()
  {
    if (warrior.x + warrior.z/2 > this.x && 
        warrior.x < this.x + this.w &&
       warrior.y + warrior.z/2 > this.y &&
        warrior.y < this.y + this.h)
    {
      warrior.y = width
    } 
  }

  draw()
  {
    push()
    noStroke()
    fill('#C0C0C0')
    rect(this.x, this.y, this.w, this.h)
    image(this.img16, this.x-30, this.y-45, 60, 90)
    pop()
  }
}
