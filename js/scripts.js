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

// Game.prototype.win = function(){
// var wins = ["square01","square02","square03"]
//   if(this.currentPlayer.spaces.contains === wins) {
//     console.log("currentPlayer won");
// console.log(this.currentPlayer.spaces);
//   } else {
//     console.log("sorry!");
//   }
}



//function to display X/O ...add this line to html (onclick="myFunction()")
// function myFunction() {
//     document.getElementById("square01").innerHTML = "x";
// }

// switch player logic//
// var letter = "x";
//
// if (letter === "x") {
//   letter = "y";
// } else {
//   letter = "x";
// }


//user interface logic//
$(document).ready(function() {
  var playerOne = new Player("X"); //instantiate new instance of Player object
  var playerTwo = new Player("O");

  var newGame = new Game(playerOne, playerTwo);
  $("#gameBoard td").one('click',function(event) {
    var spaceId = $(this).attr('id');
    newGame.currentPlayer.spaces.push(spaceId);
    console.log(newGame.currentPlayer);
    console.log(newGame.currentPlayer.spaces);
    console.log(newGame.win());
    // newGame.switchPlayer();
  });
 });
