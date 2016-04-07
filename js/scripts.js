//business logic//
function Player (mark) {
  this.mark = mark;
  this.spaces = [];
}

function Game(playerOne, playerTwo) {
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
  this.currentPlayer = playerOne;
}

Game.prototype.switchPlayer = function () {
  if (this.currentPlayer === this.playerOne) {
    this.currentPlayer = this.playerTwo;
  } else {
    this.currentPlayer = this.playerOne;
  }
}
//first attempt to define winning game:
// var win = function(){
//   if(currentPlayer === spaceId[1,2,3]) {
//     alert("currentPlayer won")
//   }
// }



// switch player logic//
// var letter = "x";
//
// if (letter === "x") {
//   letter = "y";
// } else {
//   letter = "x";
// }

// what is this??
//  function Board (number) {
//   var board = [];
//   for (var x = 0; x <= number; x++);
//     board.push([]);
//     for (var y = 0; y <= number; y++);
//       board.push([]);
//       return board;
// }

//user interface logic//
$(document).ready(function() {
  var playerOne = new Player("X"); //instantiate new instance of Player object
  var playerTwo = new Player("O");

  var newGame = new Game(playerOne, playerTwo);
  $("#gameBoard td").click(function(event) {
    var spaceId = $(this).attr('id');
    newGame.currentPlayer.spaces.push(spaceId);
    console.log(newGame.currentPlayer);
    console.log(newGame.currentPlayer.spaces);
    newGame.switchPlayer();
  });
 });
