
// Name       : Hyunjun Lee
// Assignment : Final Project - Make a Game
// Course     : CS099
// Spring 2021

var button_left = 250
var button_bottom = 400
var button_width  = 200
var button_height = 70
var button_label = 'START'
var button_mouseIsOver = false
var button_mouseWasPressed = false

function setup()
{
    createCanvas( 800, 800 );
}

const title_size = 128

function draw()
{
    background( 220 );
    const left = button_left
    const right = button_left + button_width
    const bottom = button_bottom
    const top = button_bottom + button_height

    const within_x = mouseX > left && mouseX < right
    const within_y = mouseY > bottom && mouseY < top
    button_mouseIsOver = 

    fill(0)
    translate(button_left, button_bottom)
    rect(0, 0, button_width, button_height)
}
