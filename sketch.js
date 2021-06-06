
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

let CurrentScreen = MAIN_MENU
let Screen_1 = GAME_SCREEN

let img1
let img2
let img3
let img4
let img5

function setup()
{
    createCanvas( 800, 800 );
    img1 = loadImage('left_arm.png')
    img2 = loadImage('right_arm.png')
    img3 = loadImage('mouth.png')
    img4 = loadImage('eye.png')
    img5 = loadImage('nose.png')
}


function draw()
{
    background( 220 );

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

            let emotion1 = DetermineEmotion(face1)
            DrawFaceWithEmotion(face1, emotion1)
            
        }
        break
        case GAME_SCREEN:
        {
            circle(width/2,height/2, 100)
        }
    }
}

function start_button()
{
    push()
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
            fill_color = 0
        }
        else
        {
            fill_color = 100
            
        }
    }

    fill(fill_color)

    
    translate(door.button_left, door.button_top )
    rect(0, 0, door.button_width+200, door.button_height)
    pop()
}

//Box at the bottom right.
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
            fill_colors = 0
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

//Box at the bottom right.
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

function mousePressed()
{
    if(door.button_mouseIsOver)
    {
        switch(CurrentScreen)
        {
            case MAIN_MENU:
                CurrentScreen = GAME_SCREEN
            break
        }
    }
}


//face
function IsMouseOnFace(face)
  {
    let dx = mouseX - face.x;
    let dy = mouseY - face.y;
    let distance_squared = dx * dx + dy * dy;
    return distance_squared <= face.radius * face.radius;
  }
  
  function IsMouseInsideCanvas()
  {
    let is_inside_width = mouseX >= 0 && mouseX < width;
    let is_inside_height = mouseY >= 0 && mouseY < height;
    return is_inside_width && is_inside_height;
  }
  
  function DrawFaceWithEmotion(face, emotion)
  {
    push();
    translate(face.x, face.y);
  
    switch (emotion)
    {
      case SHOCKED:
          text()

        break;
      case ANGRY:

        image(img1, -265, -200, 100,200)
        image(img2, 172, -200, 100,200)
        image(img3, -45, 50, 100,100)
        image(img4, -45, -200, 100,100)
        image(img5, -45, -80, 100,100)
        break;
    }
    pop();
  }
  
  function DetermineEmotion(face)
  {
    var emotion;
    if (IsMouseOnFace(face))
    {
      emotion = SHOCKED;
    } else if(IsMouseInsideCanvas())
    {
      emotion = ANGRY;
    } 
    else
    {
        emotion = ANGRY
    }
    return emotion;
  }