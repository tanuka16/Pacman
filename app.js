document.addEventListener( 'DOMContentLoaded', () =>{
  const grid = document.querySelector('.grid')

  const scoreDisplay = document.getElementById('score')

  const width = 28    // 28 * 28 = 784 squares

  // layout of the grid
  // make sure the layout has 784 squares in the grid
  let layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
  ]
/* Lagend
     0 - pac-dots
     1 - wall
     2 - ghost-lair
     3 - power-pellet
     4 - empty
*/
const squares = []
// draw the grid and render it
function createBoard(){

  for (var i = 0; i < layout.length; i++) {
    //create a div for all 744 squares
    const square = document.createElement('div')
    // place the squares in the grid
    grid.appendChild(square)
    // add all the square/item in the new array called squares
    squares.push(square)

    // add layout to the board
    // if the 1st item in the layout arr = 0 , go into the new squares arr, find the same item in it & add the class name pac-dot
    if( layout[i] === 0){
      squares[i].classList.add('pac-dot')

    }else if (layout[i] === 1) {
      // repeat for items wall & power-pellet
      squares[i].classList.add('wall')

    }else if(layout[i] === 2){
      squares[i].classList.add('ghost-lair')

    }else if (layout[i] === 3) {

      squares[i].classList.add('power-pellet')
    }
  }
}
createBoard()



// starting position of pac-man -> passing through the number into the square array

let pacmanCurrentIndex = 490
// adding class to the number 490
squares[pacmanCurrentIndex].classList.add('pac-man')

// pac-man on the move
function movePacman(e) {

    square[pacmanCurrentIndex].classList.remove('pac-man')
    // use switch cases add movements to  each arrow key pressed on the key board
    switch (e.keyCode) {

      case : 37
        // pacmanCurrentIndex is divisible by width & doesn't have a remainder,
        // pacmanCurrentIndex-1 doesnt include a wall, move pacman down by 1 idx
        if(pacmanCurrentIndex % width !== 0
            && !squares[pacmanCurrentIndex - 1].classList.contains('wall')
            && !squares[pacmanCurrentIndex - 1].classList.contains('ghost-lair'))  pacmanCurrentIndex--

        if(pacmanCurrentIndex - 1 === 363){
          pacmanCurrentIndex = 391
        }
        break;

      case : 38
        if(pacmanCurrentIndex - width >= 0
          && !squares[pacmanCurrentIndex - width].classList.contains('wall')
          && !squares[pacmanCurrentIndex - width].classList.contains('ghost-lair'))  pacmanCurrentIndex -= width
        break

      case : 39
        if(pacmanCurrentIndex % width < width - 1
            && !squares[pacmanCurrentIndex + 1].classList.contains('wall')
            && !squares[pacmanCurrentIndex - width].classList.contains('ghost-lair'))  pacmanCurrentIndex++

        if(pacmanCurrentIndex + 1 === 392){
          pacmanCurrentIndex = 364
        }

        break

      case : 40
        if(pacmanCurrentIndex + width < width * width
            && !squares[pacmanCurrentIndex + width].classList.contains('wall')
            && !squares[pacmanCurrentIndex - width].classList.contains('ghost-lair'))  pacmanCurrentIndex += width
        break
    }

    squares[pacmanCurrentIndex].classList.add('pac-man')
}


document.addEventListener('keyup', movePacman)





})
