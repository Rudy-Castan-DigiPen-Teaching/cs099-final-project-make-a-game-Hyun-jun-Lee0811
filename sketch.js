
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
let Screen_5 = GAME_SCREEN_1_3_Room3
let Screen_6 = GAME_SCREEN_1_END
let Screen_7 = GAME_SCREEN_2_END
let Screen_8 = Room_3_Story_GAME
let Screen_9 = LAST_SCENE
let Screen_10 = CREDIT
let Screen_11 = HOW_TO_PLAY_AND_STORY

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
let img48

let backgroundMusic

let E =[]
const M = 100

//SCREEN_0
let tear = 600

//SCREEN_2
let img18
let img19
let img20
let img21
let img22
let img23
let img24

let Attack

//SCREEN_3
let img28
let img29
let img30
let img31
let img32
let img33
let img34
let img35


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

//SCREEN_8
let img42
let img43
let img44
let img45
let img46
let img47

function preload()
{
    backgroundMusic = loadSound('media/background.wav')
    Attack = loadSound('media/attack.wav')
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
    img48 = loadImage('image/arrow_keys.png')

    backgroundMusic.loop()

    //SCREEN_0
    for(let i = 0; i < M; ++i)
    {
        E.push(new particle())
    }

    //Screen_1
    ball = new Ball()
    wall = new Wall(width*1/3, 720, 20, 320)
    wall1 = new Wall(width*2/3, 720, 20, 320)
    wall2 = new Wall(width/2 , 550, 250, 20)
    wall3 = new Wall(width/2 - 280 , 550, 250, 20)
    wall4 = new Wall(width/2 +270 , 550, 250, 20)
    door1 = new Wall(width/2 , 800, 250, 20)
    door2 = new Wall(width/2 - 270 , 800, 250, 20)
    door3 = new Wall(width/2 + 270, 800, 250, 20)

    //SCREEN_2
    lava = new Lava(width/2, height)
    warrior_1 = new Warrior_1()
    outside_door = new Outside_door(800, 290, 20, 120)
    transparent_wall = new Outside_door(550, 290, 20, 120)
    meteoric_stones = new Meteoric_Stone_1()
  
    img18 = loadImage('image/Watchtower.png')
    img19 = loadImage('image/Watchtower_eye.png')
    img20 = loadImage('image/Decoration_1.png')
    img21 = loadImage('image/Decoration_2.png')
    img22 = loadImage('image/Decoration_3.png')
    img23 = loadImage('image/Decoration_4.png')

    //SCREEN_3
    img28 = loadImage('image/desert.png')
    img29 = loadImage('image/night_sky.png')
    img30 = loadImage('image/castle_D.png')
    img31 = loadImage('image/castle_1.png')
    img32 = loadImage('image/sky.png')
    img33 = loadImage('image/hero.png')
    img34 = loadImage('image/devil_1.png')
    img35 = loadImage('image/black_sky.png')


    //SCREEN_4
    for (let f = 0; f < 10; ++f)
    {
      fire[f] = new Fire (random(width), random(height-100))
    }
    
    for (let g = 0; g < 10; ++g)
    {
      ghost[g] = new Ghost (random(width), random(height-100))
    }
  
    warrior = new Warrior()
    gate = new Barrier(800, 90, 20, 120)
    barrier_1 = new Barrier(width/2 + 110 , 600, 700, 20)
    barrier_2 = new Barrier(width/2 - 110 , 400, 700, 20)
    barrier_3 = new Barrier(width/2 + 110 , 200, 700, 20)
    img39 = loadImage('image/last_stage_door.png')
    img40 = loadImage('image/the_counsel_for_the_Crown.png')
    img41 = loadImage('image/druid.png')
    
    //SCREEN_5
    warrior_2 = new Warrior_2()
    poison_wall =  new Poison_Wall(700, 640,360)
    poison_wall_1 = new Poison_Wall(700, 130,360)
    poison_wall_2 = new Poison_Wall(1500, 640,520)
    poison_wall_3 = new Poison_Wall(1500, 50,420)
    poison_wall_4 = new Poison_Wall(2300, 505,600)
    poison_wall_5 = new Poison_Wall(2300, -100,360)
    poison_wall_6 = new Poison_Wall(3100, 880,360)
    poison_wall_7 = new Poison_Wall(3100, 230,660)
    poison_wall_8 =  new Poison_Wall(3900, 640,360)
    poison_wall_9 = new Poison_Wall(3900, 130,360)
    img36 = loadImage('image/flame_floor.png')
    img37 = loadImage('image/devil_eye.png')
    walll2 = new Poison_Wall(3900+120 , 385, 130, 20)

    //SCREEN_6
    img26 = loadImage('image/watchtower_scene.png')
    
    //SCREEN_7
    img27 = loadImage('image/blood.png')

    //SCREEN_8
    img42 = loadImage('image/prison.png')
    img43 = loadImage('image/princess.png')
    img44 = loadImage('image/castle_gate.png')
    img45 = loadImage('image/king.png')
    img46 = loadImage('image/castle_inside.png')
    img47 = loadImage('image/sunset.png')
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

            push()
            fill(0)
            circle(width/2,height/2, 300)
            pop()

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

            push()
            textStyle(ITALIC)
            textSize(50)
            text('The princess is crying!', 140, 100)
            text('Come on rescue!', 200, 160)
            pop()

            next_button()
            
            push()
            textStyle(BOLD)
            text('NEXT', 650, 740)
            pop()
        }
        break
        case CREDIT:
        {
            background(0)
            background(0)
            push()
            textSize(100)
            fill('white')
            text('Made by', width/2-270, height/2-100)
            textSize(100)
            text('Hyunjun Lee', width/2-300, height/2+100)
            pop()
        }
        break
        case HOW_TO_PLAY_AND_STORY:
        {
            background(0)
            image(img48,100, 100, 300,300)
        
            push()
            fill('white')
            textSize(50)
            text('Operation', 470, 270)
            text('Key', 550, 350)
            text('Story: The story is about', 120, 600)
            text('saving a kidnapped princess.', 80, 700)
            pop()

        }
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
            
                //Arrow_1
                push()
                stroke(0)
                strokeWeight(10)
                translate(-90, 130)
                line(200, 200, 200, 350)
                line(150, 300, 200, 350)
                line(250, 300, 200, 350)
                pop()

                //Arrow_2
                push()
                stroke(0)
                strokeWeight(10)
                translate(190, 120)
                line(200, 200, 200, 350)
                line(150, 300, 200, 350)
                line(250, 300, 200, 350)
                pop()

                //Arrow_3
                push()
                stroke(0)
                strokeWeight(10)
                translate(470, 120)
                line(200, 200, 200, 350)
                line(150, 300, 200, 350)
                line(250, 300, 200, 350)
                pop()

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
            background('#191970')
            image(img14, 250, 50, 100, 100)

            meteoric_stones.update()
            meteoric_stones.draw()
          
            push()
            fill('red')
            rect(width/2, 800, width, 300)
            pop()
          
            //Cliff
            quad(width, 350,
              570, 350,
              700, height,
              width,height)
            
            rect(680, 205, 10, 310)
          
            push()
            fill('gray')
            rect(600, 100, 150, 100)
            pop()
          
            image(img18, -120, 220, 350, 600)
            image(img19, -5, 55, 110, 130)
            image(img20, 560, 55, 80, 80)
            image(img21, 530, 100, 40, 40)
            image(img22, 628, 100, 40, 40)
            image(img23, 530, 55, 40, 40)
            image(img23, 630, 55, 40, 40)
          
            lava.update()
            lava.draw()
            outside_door.draw()
            warrior_1.draw()
            warrior_1.update()
          
            push()
            fill('yellow')
            rect(800, 290, 20, 120)
            pop()
          
            push()
            translate(50,120)
            stroke('red')
            noFill()
            beginShape()
          
            for (let a = 0; a < TWO_PI; a+=0.01)
            {
              let t = random(50, 100)
              let x = t * cos(a)
              let y = t * sin(a)
              vertex(x,y)
            }
          
            endShape()
            pop()

            if(keyCode === 65)
            {
               background('pink')
               image(img26, 0, 0, width, height)

               //next__1_button()
               push()
               noStroke()
               fill('#2F4F4F')
               ellipse(700, 725, 200, 50)
               fill('white')
               textStyle(BOLD)
               text('SPACE', 640, 740)
               pop()
    
                push()
                translate(width/2-30,height/2-50)
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
                noStroke()
                fill('green')
                rect(305, 674, 550, 200)
                fill('white')
                rect(305, 674, 520, 170)
                pop()
    
                push()
                textSize(30)
                text('The moment the warrior opened', 70, 640)
                text('the door,', 240, 680)
                text('he was attacked by a guard tower.',60, 720)
                pop()
            }
            if( keyCode === 32)
            {
                background(0)

                image(img27, 0, 0, width, height)

                push()
                fill('white')
                textSize(40)
                text('Warrior tried to enter the castle again,', 35, height/2-40)
                text('but was attacked and killed.', 150, height/2+30)
                pop()
            }
        }
        break
        case GAME_SCREEN_1_2:
        {
            background(0)
            image(img29, 0, 0, width, 650)
            image(img30, 600, 420, 100, 100)
            image(img28, 0, 400, width, 400)

            push()
            noStroke()
            fill('green')
            rect(305, 674, 550, 200)
            fill('white')
            rect(305, 674, 520, 170)
            pop()  

            push()
            textSize(30)
            text('WHAT!?!?!', 230, 640)
            text('WHY AM I HERE?', 170, 680)
            textSize(25)
            text('Could it be that the door was enchanted?',60, 720)
            pop()

            push()
            noStroke()
            fill('#2F4F4F')
            ellipse(700, 725, 200, 50)
            fill('white')
            textStyle(BOLD)
            text('Click Q', 640, 740)
            pop()

            if(keyCode === 81)
            {
               push()
               noStroke()
               fill('white')
               rect(305, 674, 520, 170)
               pop()

               push()
               textSize(25)
               text('Anyway, i have to go back to the castle!', 60, 635)
               textSize(30)
               text('I must rescue the princess', 100, 680)
               text('as soon as possible.',150, 725)
               pop()

               push()
               noStroke()
               fill('#2F4F4F')
               ellipse(700, 725, 200, 50)
               fill('white')
               textStyle(BOLD)
               text('Click W', 640, 740)
               pop()
            }
            if(keyCode === 87)
            {
                image(img32, -70, 0, width+150, 700)
                image(img31, 0,0, width, 800)
                image(img33,200,200,450, 600)
              
                push()
                noStroke()
                fill('green')
                rect(305, 674, 550, 200)
                fill('white')
                rect(305, 674, 520, 170)
                pop()  
              
                push()
                noStroke()
                fill('#2F4F4F')
                ellipse(700, 725, 200, 50)
                fill('white')
                textStyle(BOLD)
                text('Click E', 640, 740)
                pop()
              
                push()
                textSize(30)
                text('Is it morning?', 210, 655)
                text('Princess please wait..', 170, 710)
                pop()
            }
            if(keyCode === 69)
            {
                image(img35, -70, 0, width+150, 800)
                image(img31, 0,0, width, 800)
                image(img34, 200, 150, 450, 600)

                push()
                noStroke()
                fill('#2F4F4F')
                ellipse(700, 725, 200, 50)
                fill('white')
                textStyle(BOLD)
                text('Click R', 640, 740)
                pop()

                push()
                textSize(70)
                fill('red')
                text('HA HA HA!!!', 220, height/2 - 30)
                textSize(60)
                text('You will die before', 150, height/2+40)
                text('you rescue the princess!', 60, height/2+120)
                pop()
            }
            if(keyCode === 82)
            {
                background(0)
                push()
                fill('white')
                textSize(50)
                text('Go back to the first screen', 80, height/2-10)
                pop()
            }
        }
        break
        case GAME_SCREEN_1_3:
        {
            background('#483D8B')
            push()
            noStroke()
            fill('red')
            rect(400, 400, 300, 800)
            pop()

            push()
            stroke('#FFB6C1')
            strokeWeight(10)
            translate(195, 400)
            line(100, 300, 300, 300)
            line(100, 300, 150, 350)
            line(100, 300, 150, 250)
            pop()
          
            push()
            stroke('#FFB6C1')
            strokeWeight(10)
            translate(195, -200)
            line(100, 300, 300, 300)
            line(300, 300, 250, 350)
            line(300, 300, 250, 250)
            pop()
            
            for (let f = 0; f < 10; ++f)
            {
              fire[f].draw()
              fire[f].update()
              fire[f].contact()
            }
          
            for (let g = 0; g < 10; ++g)
            {
              ghost[g].draw()
              ghost[g].update()
              ghost[g].contact()
            }
            
            gate.draw()
          
            warrior.draw()
            warrior.update()
            warrior.origin()
            barrier_1.draw()
            barrier_2.draw()
            barrier_3.draw()
            
            push()
            fill('#FF1493')
            rect(800, 90, 20, 120)
            pop()
        }
        break
    }

    switch(Screen_4)
    {
        case GAME_SCREEN_1_3_Room3:
        {
            background(0)
            image(img39, 0, 0, width, height)
            image(img37,360,430,30, 30)
            image(img37,420,430,30, 30)
            image(img33,200,200,450, 600)
          
            push()
            noStroke()
            fill('green')
            rect(305, 674, 550, 200)
            fill('white')
            rect(305, 674, 520, 170)
            pop()  
          
            push()
            noStroke()
            fill('#2F4F4F')
            ellipse(700, 725, 200, 50)
            fill('white')
            textStyle(BOLD)
            text('Click N', 640, 740)
            pop()
          
            push()
            textSize(40)
            text('Who are you guys?!', 110, 680)
            pop()

            if(keyCode === 78)
            {
                background(0)
                image(img39, 0, 0, width, height)
                image(img37,360,430,30, 30)
                image(img37,420,430,30, 30)
                image(img40,-50,100,450, 600)
                image(img41,350,100,450, 600)
              
                push()
                noStroke()
                fill('green')
                rect(305, 674, 550, 200)
                fill('white')
                rect(305, 674, 520, 170)
                pop()  
              
                push()
                noStroke()
                fill('#2F4F4F')
                ellipse(700, 725, 200, 50)
                fill('white')
                textStyle(BOLD)
                text('Click B', 640, 740)
                pop()
              
                push()
                textSize(30)
                text('We are here to kill the devil.', 100, 635)
                text('Save the princess while fighting', 80, 690)
                text('the devil.', 245, 740)
                pop()
            }
            if(keyCode === 66)
            {
                background(0)
                image(img39, 0, 0, width, height)
                image(img37,360,430,30, 30)
                image(img37,420,430,30, 30)
                image(img40,-50,100,450, 600)
                image(img41,350,100,450, 600)
              
                push()
                noStroke()
                fill('green')
                rect(305, 674, 550, 200)
                fill('white')
                rect(305, 674, 520, 170)
                pop()  
              
                push()
                noStroke()
                fill('#2F4F4F')
                ellipse(700, 725, 200, 50)
                fill('white')
                textStyle(BOLD)
                text('Click Z', 640, 740)
                pop()
              
                push()
                textSize(30)
                text('And once you make a mistake', 90, 635)
                text('there, you are die.', 170, 685)
                text('God bless you.', 190, 740)
                pop()
            }
            if(keyCode === 90)
            {
                background(0)
                image(img39, 0, 0, width, height)
                image(img37,360,430,30, 30)
                image(img37,420,430,30, 30)
                image(img33,200,200,450, 600)
              
                push()
                noStroke()
                fill('green')
                rect(305, 674, 550, 200)
                fill('white')
                rect(305, 674, 520, 170)
                pop()  
              
                push()
                noStroke()
                fill('#2F4F4F')
                ellipse(700, 725, 200, 50)
                fill('white')
                textStyle(BOLD)
                text('Click Y', 640, 740)
                pop()
              
                push()
                textSize(30)
                text('Thank you...', 220, 635)
                text('I will definitely save her.', 130, 685)
                text('Be sure to survive!', 180, 735)
                pop()
            }
        }
        break
    }
    
    switch(Screen_5)
    {
        case Room_3_Story_GAME:
        {
            background(0)

            push()
            fill('white')
            textSize(50)
            text('Click SPACE', 270, 600)
            text('Move forward a little bit.', 120, 700)
            pop()
            
            push()
            image(img37, 200, 150, 150, 150)
            image(img37, 500, 150, 150, 150)
            poison_wall.draw()
            poison_wall.update()
            poison_wall_1.draw()
            poison_wall_1.update()
            poison_wall_2.draw()
            poison_wall_2.update()
            poison_wall_3.draw()
            poison_wall_3.update()
            poison_wall_4.draw()
            poison_wall_4.update()
            poison_wall_5.draw()
            poison_wall_5.update()
            poison_wall_6.draw()
            poison_wall_6.update()
            poison_wall_7.draw()
            poison_wall_7.update()
            poison_wall_8.draw()
            poison_wall_8.update()
            poison_wall_9.draw()
            poison_wall_9.update()
            walll2.draw()
            warrior_2.draw()
            warrior_2.update()
            image(img36, 0, 700, width/2, 100)
            image(img36, width/2, 700, width/2, 100)

            push()
            translate(3900,0)
            translate(100, 50)
            textSize(80)
            fill('#708090')
            text('Click M', 188, height/2 - 90)
            pop()
            pop()
        }
    }

    switch(Screen_8)    
    {
        case LAST_SCENE:
        {
            background(220)
            image(img42, 0, 0, width, height)
            image(img43, 200,200,450, 500)

            push()
            noStroke()
            fill('green')
            rect(305, 674, 550, 200)
            fill('white')
            rect(305, 674, 520, 170)
            pop()  
          
            push()
            noStroke()
            fill('#2F4F4F')
            ellipse(700, 725, 200, 50)
            fill('white')
            textStyle(BOLD)
            text('Click H', 640, 740)
            pop()
          
            push()
            textSize(30)
            text('You are here.', 200, 635)
            text('Thank you for coming to the rescue.', 50, 685)
            text('Let us get out of here!', 150, 735)
            pop()
            if(keyCode === 72)
            {
                background(220)
                image(img42, 0, 0, width, height)
                image(img33,200,200,450, 600)
    
                push()
                noStroke()
                fill('green')
                rect(305, 674, 550, 200)
                fill('white')
                rect(305, 674, 520, 170)
                pop()  
              
                push()
                noStroke()
                fill('#2F4F4F')
                ellipse(700, 725, 200, 50)
                fill('white')
                textStyle(BOLD)
                text('Click K', 640, 740)
                pop()
              
                push()
                textSize(30)
                text('yes!', 250, 685)
                pop()
            }
            if(keyCode === 75)
            {
                background(220)
                image(img44, 0, 0, width, height)
                image(img43, 200,200,450, 500)

                push()
                noStroke()
                fill('green')
                rect(305, 674, 550, 200)
                fill('white')
                rect(305, 674, 520, 170)
                pop()  
              
                push()
                noStroke()
                fill('#2F4F4F')
                ellipse(700, 725, 200, 50)
                fill('white')
                textStyle(BOLD)
                text('Click C', 640, 740)
                pop()
              
                push()
                textSize(30)
                text('Father!!!', 250, 635)
                text('Why is the king here?!?!', 150, 685)
                text('Please enter the castle.', 150, 735)
                pop()
            }
            if(keyCode === 67)
            {
                background(220)
                image(img44, 0, 0, width, height)
                image(img45, 100,150,500, 500)

                push()
                noStroke()
                fill('green')
                rect(305, 674, 550, 200)
                fill('white')
                rect(305, 674, 520, 170)
                pop()  
              
                push()
                noStroke()
                fill('#2F4F4F')
                ellipse(700, 725, 200, 50)
                fill('white')
                textStyle(BOLD)
                text('Click T', 640, 740)
                pop()
              
                push()
                textSize(30)
                text('I am glad you did not get hurt.', 80, 635)
                text('Go ahead and get some rest.', 100, 685)
                text('warrior, you did a great job.', 90, 735)
                pop()
            }
            if(keyCode === 84)
            {
                background(220)
                image(img44, 0, 0, width, height)
                image(img33,200,200,450, 600)

                push()
                noStroke()
                fill('green')
                rect(305, 674, 550, 200)
                fill('white')
                rect(305, 674, 520, 170)
                pop()  
              
                push()
                noStroke()
                fill('#2F4F4F')
                ellipse(700, 725, 200, 50)
                fill('white')
                textStyle(BOLD)
                text('Click S', 640, 740)
                pop()
              
                push()
                textSize(30)
                text('thank you..', 230, 685)
                pop()
            }
            if(keyCode === 83)
            {
                background(220)
                image(img47, 0, 0, width, height+500)
                image(img46, 0, 0, width, height)
                image(img33,200,200,450, 600)

                push()
                noStroke()
                fill('green')
                rect(305, 674, 550, 200)
                fill('white')
                rect(305, 674, 520, 170)
                pop()  
              
                push()
                noStroke()
                fill('#2F4F4F')
                ellipse(700, 725, 200, 50)
                fill('white')
                textStyle(BOLD)
                text('Click L', 640, 740)
                pop()
              
                push()
                textSize(30)
                text('Princess, what are you going to', 70, 655)
                text('do from now on?', 180, 715)
                pop()
            }
            if(keyCode === 76)
            {
                background(220)
                image(img47, 0, 0, width, height+500)
                image(img46, 0, 0, width, height)
                image(img43, 200,200,450, 500)

                push()
                noStroke()
                fill('green')
                rect(305, 674, 550, 200)
                fill('white')
                rect(305, 674, 520, 170)
                pop()  
              
                push()
                noStroke()
                fill('#2F4F4F')
                ellipse(700, 725, 200, 50)
                fill('white')
                textStyle(BOLD)
                text('Click P', 640, 740)
                pop()
              
                push()
                textSize(30)
                text('I am thinking of going on a trip', 70, 635)
                text('to be stronger.', 200, 680)
                text('Will you follow me?', 170, 725)
                pop()
            }
            if(keyCode === 80)
            {
                background(0)
                push()
                textSize(250)
                fill('white')
                text('sure!', width/2-270, height/2)
                textSize(100)
                text('THE END', width/2-200, height/2+200)
                pop()
            }
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
    if(box2.mouseIsOver)
    {
        switch(CurrentScreen)
        {
            case MAIN_MENU:
                CurrentScreen = HOW_TO_PLAY_AND_STORY
            break
        }
    }
    if(box1.mouseIsOver)
    {
        switch(CurrentScreen)
        {
            case MAIN_MENU:
                CurrentScreen = CREDIT
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
    //SCREEN_4
    if(keyCode === 86)
    {
        switch(Screen_4)
        {
            case GAME_SCREEN_1_3:
                Screen_4 = GAME_SCREEN_1_3_Room3
            break
        }
    }
    //SCREEN_5
    if(keyCode === 89)
    {
        switch(Screen_5)
        {
            case GAME_SCREEN_1_3_Room3:
                Screen_5 = Room_3_Story_GAME
            break
        }            
    }
    //SCREEN_8
    if(keyCode === 77)
    {
        switch(Screen_8)
        {
            case Room_3_Story_GAME:
                Screen_8 = LAST_SCENE
            break
        }
    }
}

//MAIN_MENU
function IsMouseOnFace(face)
  {
    let dx = mouseX - face.x
    let dy = mouseY - face.y
    let distance_squared = dx * dx + dy * dy
    return distance_squared <= face.radius * face.radius
  }
  //MAIN_MENU
  function IsMouseInsideCanvas()
  {
    let is_inside_width = mouseX >= 0 && mouseX < width
    let is_inside_height = mouseY >= 0 && mouseY < height
    return is_inside_width && is_inside_height
  }
  //MAIN_MENU
  function DrawFaceWithEmotion(face, emotion)
  {
    push();
    translate(face.x, face.y)
  
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
        break
    }
    pop()
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