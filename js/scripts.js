function Board (x,y,character){
  this.x = x;
  this.y = y;
  this.character = character;
}

function Player(name, character){
  this.name = name;
  this.character = character;
}


var player1 = [];
var player2 = [];

//UI
$(document).ready(function(){
  var turnTracker = 0;
  var oneBoolean = true;
  $("form#playerForm").submit(function(event){
    event.preventDefault();
    var name = $("input#playerName").val();
    var character = "X";
    var newPlayer = new Player(name, character);
    console.log(newPlayer);
  });
  $(".col-1").click(function(event){
    event.preventDefault();
    if (turnTracker % 2 === 0 || turnTracker === 0) {
      var test = $(this).val();
      debugger;
      player1.push($(this).val());
      $(this).text("X");
      turnTracker += 1;
      console.log(player1);
    } else {
      $(this).text("O");
      turnTracker += 1;
    }
    if (turnTracker === 9) {
      alert("Game Over");
    }
    $(this).addClass("unclickable");
  });
  $(".col-2").click(function(event){
    event.preventDefault();
    if (turnTracker % 2 === 0 || turnTracker === 0) {
      $(this).text("X");
      turnTracker += 1;
    } else {
      $(this).text("O");
      turnTracker += 1;
    }
    if (turnTracker === 9) {
      alert("Game Over");
    }
    $(this).addClass("unclickable");
  });
  $(".col-3").click(function(event){
    event.preventDefault();
    if (turnTracker % 2 === 0 || turnTracker === 0) {
      $(this).text("X");
      turnTracker += 1;
    } else {
      $(this).text("O");
      turnTracker += 1;
    }
    if (turnTracker === 9) {
      alert("Game Over");
    }
    $(this).addClass("unclickable");
  });
})
