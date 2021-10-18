import kaboom from "kaboom";

// initialize context
kaboom();

// load assets
loadSprite("bean", "sprites/bean.png");
loadSprite("ice_box", "sprites/ice_box.png");
loadSprite("wood_box", "sprites/wood_box.png");
loadSprite("bg", "sprites/bg.png");


add([
  sprite("bg", {width: width(), height: height()}),
]);

function chunk1() {
  let pos_x = 0
  let pos_y = 0

// top row of ice
for (pos_x = 0; pos_x < width(); ) {
  debug.log(pos_x)
  add([
  sprite("ice_box"),
  area(),
  solid(),
  scale(.5),
  pos(pos_x, pos_y),
  'border'
])
  pos_x += 50
}

//bottom row of ice
for (pos_x = 0; pos_x < width(); ) {
  debug.log(pos_x)
  add([
  sprite("ice_box"),
  area(),
  solid(),
  scale(.5),
  pos(pos_x, pos_y + height()),
  'border'
])
  pos_x += 50
}

// reset x and y for left and right ice
pos_y = 0
pos_x = 0

// left row of ice
for (pos_y = 0; pos_y < height(); ) {
  debug.log(pos_y)
  add([
  sprite("ice_box"),
  area(),
  solid(),
  scale(.5),
  pos(pos_x, pos_y),
  'border'
])
  pos_y += 50
}

// right row of ice
for (pos_y = 0; pos_y < height(); ) {
  debug.log(pos_y)
  add([
  sprite("ice_box"),
  area(),
  solid(),
  scale(.5),
  pos(width(), pos_y),
  'border'
])
  pos_y += 50
}

}

// function to create ice box
chunk1()

// add a character to screen
const player = add([
	// list of components
	sprite("bean"),
	pos(180, 140),
	area(), 
  solid(),
  

]);

// makes camera follow player
player.action(() => {
    debug.log(player.pos.x - 25)
    camPos(player.pos.x + 50, player.pos.y);
});

// movement speed
const SPEED = 200


// key inputs
keyDown('left', () => {
  player.move(-SPEED,2)
})

keyDown('right', () => {
  player.move(SPEED,2)
})

keyDown('up', () => {
  player.move(0, -SPEED,2)
})

keyDown('down', () => {
  player.move(0, SPEED,2)
})