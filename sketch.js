
// Name       : Hyunjun Lee
// Assignment : Final Project - Make a Game
// Course     : CS099
// Spring 2021


var door =
{
    button_left : 218,
    button_top : 140,
    button_width  : 170,
    button_height : 470,
    button_mouseIsOver : false
}

var box1 =
{
    button_left : 700,
    button_top : 700,
    button_width : 100,
    button_height : 100,
    mouseIsOver : false
}

var box2 =
{
    button_left : 700,
    button_top : 600,
    button_width : 100,
    button_height : 100,
    mouseIsOver : false
}

var next =
{
    button_left : 610,
    button_top : 700,
    button_width : 150,
    button_height : 60,
    mouseIsOver : false
}

let CurrentScreen = MAIN_MENU
let Screen_0 = GAME_SCREEN
let Screen_1 = GAME_SCREEN_1
let Screen_2 = GAME_SCREEN_1_1
let Screen_3 = GAME_SCREEN_1_2
let Screen_4 = GAME_SCREEN_1_3

//MAIN_MENU
let img1
let img2
let img3
let img4
let img5
let img6
let img7
let img8
let img9
let img10
let img11
let img12
let img13
let img14

let backgroundMusic

const frame = 60
let count = 0

let E =[]
const M = 100

//SCREEN_0
let tear = 600

function preload()
{
    backgroundMusic = loadSound('media/background.wav')    
}

function setup()
{
    createCanvas( 800, 800 );
    //MAIN_MENU
    img1 = loadImage('image/gear.png')
    img2 = loadImage('image/clip.png')
    img3 = loadImage('image/mouth.png')
    img4 = loadImage('image/eye.png')
    img5 = loadImage('image/nose.png')
    img6 = loadImage('image/hand.png')
    img7 = loadImage('image/hand1.png')
    img8 = loadImage('image/hand2.png')
    img9 = loadImage('image/stain.png')
    img10 = loadImage('image/stain1.png')
    img11 = loadImage('image/devil.png')
    img12 = loadImage('image/castle.png')
    img13 = loadImage('image/background.png')
    img14 = loadImage('image/moon.png')

    backgroundMusic.loop()

    //SCREEN_0
    eyes = new Eye(500, height/2)

    for(let i = 0; i < M; ++i)
    {
        E.push(new particle())
    }

    //Screen_1
    ball = new Ball(mouseX,mouseY)
    wall = new Wall(width*1/3, 720, 20, 320)
    wall1 = new Wall(width*2/3, 720, 20, 320)
    wall2 = new Wall(width/2 , 550, 250, 20)
    wall3 = new Wall(width/2 - 280 , 550, 250, 20)
    wall4 = new Wall(width/2 +270 , 550, 250, 20)
    door1 = new Wall(width/2 , 800, 250, 20)
    door2 = new Wall(width/2 - 270 , 800, 250, 20)
    door3 = new Wall(width/2 + 270, 800, 250, 20)
}


function draw()
{
    background( '#483D8B' );

    switch(CurrentScreen)
    {
        case MAIN_MENU:
        {
            push()
            strokeWeight(5)
            line(100, 0, 217, 140)
            line(0, 700, 217, 610)
            line(width, 700, 588, 610)
            line(700, 0, 588, 140)
            pop()
        
            start_button()
            box_1()
            box_2()

            var face1 = 
            {
                x: width / 2,
                y: height / 2,
                radius: 64
            }

            
            push()
            noStroke()
            fill('red')
            quad(277, 610, 525, 610, 690, 800, 106, 800)
            pop()

            textSize(30)
            textStyle(BOLD)
            stroke('black')
            text('Rescue the princess', 260, 700)
            text('from the devil', 300, 750)

            push()
            translate(-30, 0)
            fill(0, 0, 0, 100)
            noStroke()
            ellipse(400, 800, 250, 300)
            translate(0,-10)
            triangle(568, 670, 550, 687, 590, 687)
            rect(551, 687, 38, 70)
            rect(540, 757, 60, 10)
            rect(565, 767, 10, 8.3)
            circle(570, 800, 50)
            pop()

            image(img6, 10, 630, 130, 130)
            image(img7, 595, 600, 100, 100)
            image(img8, 320, 580, 70, 70)
            image(img9, 210, 700, 70, 70)
            image(img10, 470, 630, 50, 50)
            image(img1, 700, 703, 100,)
            image(img2, 701, 602, 100,)

            let emotion1 = DetermineEmotion(face1)
            DrawFaceWithEmotion(face1, emotion1)

        }
        break
        case GAME_SCREEN:
        {
            background('#FFEFD5')
            push()
            fill(0)
            ellipse(width/2,height/2, 650, 300)
            pop()
            ellipse(width/2, height/2, 630, 290)
            pop()

            let p = float( count % frame)/frame
            count += 1
            eyes.draw()
            eyes.update(p*PI)

            for(let particle of E)
            {
                particle.update()
                particle.draw()
            }
        
            for(let i = E.length - 1; i >= 0; --i )
            {
                
                let particle = E[i]
                if(particle.position.x > width || particle.position.x <0 || 
                    particle.position.y > height || particle.position.y < 0)
                {
                    E.splice(i, 20)
                }
            }

            push()
            noStroke()
            fill('skyblue')
            ellipse(500, tear, 50, 150)
            tear = 600 + 5*cos(frameCount/15)
            pop()

            textStyle(ITALIC)
            textSize(50)
            text('The princess is crying!', 140, 100)
            text('Come on rescue!', 200, 160)

            next_button()
            
            push()
            textStyle(BOLD)
            text('NEXT', 620, 750)
            pop()
        }
        break
    }
    switch(Screen_0)
    {
        case GAME_SCREEN_1:
            {
                background( '#483D8B' )

                push()
                fill('#FAEBD7')
                rect(width/2, 700, width, 280)
                pop()
            
                textSize(40)
                text('Room_A', 50, 700)
                text('Room_B', 325, 700)
                text('Room_C', 595, 700)
            
            
                wall.draw()
                wall1.draw()
                wall2.draw()
                wall3.draw()
                wall4.draw()
                door1.draw()
                door2.draw()
                door3.draw()
            
                //Room
                push()
                noStroke()
                fill('brown')
                rect(width/2 - 270 , 550, 250, 20)
                rect(width/2 , 550, 250, 20)
                rect(width/2 + 270 , 550, 250, 20)
                pop()
            
                ball.draw()
                ball.update()

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
            break
    }
    switch(Screen_1)
    {
        case GAME_SCREEN_1_1:
        {
           background(0)     
        }
        break
        case GAME_SCREEN_1_2:
        {
            background('#5F9EA0') 
            circle(width/2, height/2, 100)   
        }
        break
        case GAME_SCREEN_1_3:
        {
            background('#7FFF00')     
        }
        break
    }
}

//MAIN_MENU
function start_button()
{
    push()
    fill('red')
    const left = door.button_left
    const right = door.button_left + door.button_width + 200
    const top = door.button_top 
    const bottom = door.button_top + door.button_height 

    const within_x = mouseX > left && mouseX < right
    const within_y = mouseY > top && mouseY < bottom
    door.button_mouseIsOver = within_x && within_y

    let fill_color = 220
    if(door.button_mouseIsOver)
    {
        if(mouseIsPressed)
        {
            fill_color = 150
        }
        else
        {
            fill_color = 150
            
        }
    }

    fill(fill_color)
    translate(door.button_left, door.button_top )
    rect(0, 0, door.button_width+200, door.button_height)
    pop()
}

//Box at the bottom right.MAIN_MENU
function box_1()
{
    push()
    const left = box1.button_left
    const right = box1.button_left + box1.button_width + 200
    const top = box1.button_top
    const bottom = box1.button_top + box1.button_height 

    const within_x = mouseX > left && mouseX < right
    const within_y = mouseY > top && mouseY < bottom
    box1.mouseIsOver = within_x && within_y

    let fill_colors = 220
    if(box1.mouseIsOver)
    {
        if(mouseIsPressed)
        {
            fill_colors = 50
        }
        else
        {
            fill_colors = 100
            
        }
        fill(fill_colors)
    }
    translate(box1.button_left, box1.button_top )
    rect(0, 0, box1.button_width, box1.button_height)
    pop()
}

//Box at the bottom right.MAIN_MENU
function box_2()
{
    push()
    const left = box2.button_left
    const right = box2.button_left + box2.button_width + 200
    const top = box2.button_top 
    const bottom = box2.button_top + box2.button_height 

    const within_x = mouseX > left && mouseX < right
    const within_y = mouseY > top && mouseY < bottom
    box2.mouseIsOver = within_x && within_y

    let fill_colors = 220
    if(box2.mouseIsOver)
    {
        if(mouseIsPressed)
        {
            fill_colors = 0
        }
        else
        {
            fill_colors = 100
            
        }
        fill(fill_colors)
    }
    translate(box2.button_left, box2.button_top )
    rect(0, 0, box2.button_width, box2.button_height)
    pop()
}

//Screen_0, next button
function next_button()
{
    push()
    const left = next.button_left
    const right = next.button_left + next.button_width + 200
    const top = next.button_top 
    const bottom = next.button_top + next.button_height 

    const within_x = mouseX > left && mouseX < right
    const within_y = mouseY > top && mouseY < bottom
    next.mouseIsOver = within_x && within_y

    let fill_colors = 220
    if(next.mouseIsOver)
    {
        if(mouseIsPressed)
        {
            fill_colors = 0
        }
        else
        {
            fill_colors = 100
            
        }
        fill(fill_colors)
    }
    noStroke()
    translate(next.button_left, next.button_top )
    rect(0, 0, next.button_width, next.button_height)
    pop()
}

function mousePressed()
{
    //MAIN_MENU
    if(door.button_mouseIsOver)
    {
        switch(CurrentScreen)
        {
            case MAIN_MENU:
                CurrentScreen = GAME_SCREEN
            break
        }
    }
    if(next.mouseIsOver)
    {
        switch(Screen_0)
        {
            case GAME_SCREEN:
                Screen_0 = GAME_SCREEN_1
            break
        }
    }

    //Screen_0
    for(let i = 0; i < M; ++i)
    {
        E.push(new particle(width/2+90, height/2+130))
    }
}

function keyPressed()
{
    //Screen_1
    if(keyCode === 71)
    {
        switch(Screen_1)
        {
            case GAME_SCREEN_1:
                Screen_1 = GAME_SCREEN_1_1
            break
        }
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
}

//MAIN_MENU
function IsMouseOnFace(face)
  {
    let dx = mouseX - face.x;
    let dy = mouseY - face.y;
    let distance_squared = dx * dx + dy * dy;
    return distance_squared <= face.radius * face.radius;
  }
  //MAIN_MENU
  function IsMouseInsideCanvas()
  {
    let is_inside_width = mouseX >= 0 && mouseX < width;
    let is_inside_height = mouseY >= 0 && mouseY < height;
    return is_inside_width && is_inside_height;
  }
  //MAIN_MENU
  function DrawFaceWithEmotion(face, emotion)
  {
    push();
    translate(face.x, face.y);
  
    switch (emotion)
    {
      case DEVIL_MESSAGE:
          background('#191970')
          image(img13, 450, 470, -900,-800)

          push()
          noStroke()
          fill('#191970')
          rect(-330, -285, 570, 240)
          pop()

          image(img14, -350, -350, 100, 100)
          image(img11, -250, -250, 300, 400)
          image(img12, 0, -400, 450, 600)

          push()
          noStroke()
          fill('brown')
          rect(-295, 100, 600, 250)
          fill('#2F4F4F')
          rect(-280, 115, 570, 220)
          pop()

          fill('white')
          textSize(50)
          text('The princess will be',-235, 195)
          text('my wife!',-95, 270)
        break;
      case SCREEN:
        push()
        noStroke()
        fill('#808080')
        rect(163, -30, -320, -200)
        rect(163, 185, -320, -200)
        pop()
        image(img3, -45, 50, 100,100)
        image(img4, -45, -200, 100,100)
        image(img5, -45, -80, 100,100)
        break;
    }
    pop();
  }
  //MAIN_MENU
  function DetermineEmotion(face)
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