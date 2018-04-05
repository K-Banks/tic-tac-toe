// function Player (name,mark){
//   this.name = name;
//   this.mark = mark;
// }
// function Space (mark,x,y){
//   this.x = x;
//   this.y = y;
//   this.mark = mark;
// }
// function Board (){
//   this
// }
// function Board (x,y,character){
//   this.x = x;
//   this.y = y;
//   this.character = character;
// }
//
// function Player(name, character){
//   this.name = name;
//   this.character = character;
// }


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
      var target = this.firstElementChild;
      var spaceNumber = parseInt($(target).val());
      player1.push(spaceNumber);
      $(this).text("X");
      turnTracker += 1;
    } else {
      var target = this.firstElementChild;
      var spaceNumber = parseInt($(target).val());
      player2.push(spaceNumber);
      $(this).text("O");
      turnTracker += 1;
    }
    if (player1.includes(1)===true && player1.includes(2)===true && player1.includes(3)===true ||  player1.includes(7)===true && player1.includes(8)===true && player1.includes(9)===true || player1.includes(2)===true && player1.includes(5)===true && player1.includes(8)===true || player1.includes(1)===true && player1.includes(5)===true && player1.includes(9)===true || player1.includes(4)===true && player1.includes(5)===true && player1.includes(6)===true || player1.includes(1)===true && player1.includes(4)===true && player1.includes(7)===true || player1.includes(3)===true && player1.includes(6)===true && player1.includes(9)===true || player1.includes(3)===true && player1.includes(5)===true && player1.includes(7)===true) {
      $("div.winner1").show();
      $("div.row").addClass("unclickable");
      $("button.refresh").show();
    } else if (player2.includes(1)===true && player2.includes(2)===true && player2.includes(3)===true ||  player2.includes(7)===true && player2.includes(8)===true && player2.includes(9)===true || player2.includes(2)===true && player2.includes(5)===true && player2.includes(8)===true || player2.includes(1)===true && player2.includes(5)===true && player2.includes(9)===true || player2.includes(4)===true && player2.includes(5)===true && player2.includes(6)===true || player2.includes(1)===true && player2.includes(4)===true && player2.includes(7)===true || player2.includes(3)===true && player2.includes(6)===true && player2.includes(9)===true || player2.includes(3)===true && player2.includes(5)===true && player2.includes(7)===true) {
      $("div.winner2").show();
      $("div.row").addClass("unclickable");
      $("button.refresh").show();
    } else if (turnTracker === 9) {
      $("div.tie").show();
      $("div.row").addClass("unclickable");
      $("button.refresh").show();
    }
    $(this).addClass("unclickable");
  });
  $(".col-2").click(function(event){
    event.preventDefault();
    if (turnTracker % 2 === 0 || turnTracker === 0) {
      var target = this.firstElementChild;
      var spaceNumber = parseInt($(target).val());
      player1.push(spaceNumber);
      $(this).text("X");
      turnTracker += 1;
    } else {
      var target = this.firstElementChild;
      var spaceNumber = parseInt($(target).val());
      player2.push(spaceNumber);
      $(this).text("O");
      turnTracker += 1;
    }
    if (player1.includes(1)===true && player1.includes(2)===true && player1.includes(3)===true ||  player1.includes(7)===true && player1.includes(8)===true && player1.includes(9)===true || player1.includes(2)===true && player1.includes(5)===true && player1.includes(8)===true || player1.includes(1)===true && player1.includes(5)===true && player1.includes(9)===true || player1.includes(4)===true && player1.includes(5)===true && player1.includes(6)===true || player1.includes(1)===true && player1.includes(4)===true && player1.includes(7)===true || player1.includes(3)===true && player1.includes(6)===true && player1.includes(9)===true || player1.includes(3)===true && player1.includes(5)===true && player1.includes(7)===true) {
      $("div.winner1").show();
      $("div.row").addClass("unclickable");
      $("button.refresh").show();
    } else if (player2.includes(1)===true && player2.includes(2)===true && player2.includes(3)===true ||  player2.includes(7)===true && player2.includes(8)===true && player2.includes(9)===true || player2.includes(2)===true && player2.includes(5)===true && player2.includes(8)===true || player2.includes(1)===true && player2.includes(5)===true && player2.includes(9)===true || player2.includes(4)===true && player2.includes(5)===true && player2.includes(6)===true || player2.includes(1)===true && player2.includes(4)===true && player2.includes(7)===true || player2.includes(3)===true && player2.includes(6)===true && player2.includes(9)===true || player2.includes(3)===true && player2.includes(5)===true && player2.includes(7)===true) {
      $("div.winner2").show();
      $("div.row").addClass("unclickable");
      $("button.refresh").show();
    } else if (turnTracker === 9) {
      $("div.tie").show();
      $("div.row").addClass("unclickable");
      $("button.refresh").show();
    }
    $(this).addClass("unclickable");
  });
  $(".col-3").click(function(event){
    event.preventDefault();
    if (turnTracker % 2 === 0 || turnTracker === 0) {
      var target = this.firstElementChild;
      var spaceNumber = parseInt($(target).val());
      player1.push(spaceNumber);
      $(this).text("X");
      turnTracker += 1;
    } else {
      var target = this.firstElementChild;
      var spaceNumber = parseInt($(target).val());
      player2.push(spaceNumber);
      $(this).text("O");
      turnTracker += 1;
    }
    if (player1.includes(1)===true && player1.includes(2)===true && player1.includes(3)===true ||  player1.includes(7)===true && player1.includes(8)===true && player1.includes(9)===true || player1.includes(2)===true && player1.includes(5)===true && player1.includes(8)===true || player1.includes(1)===true && player1.includes(5)===true && player1.includes(9)===true || player1.includes(4)===true && player1.includes(5)===true && player1.includes(6)===true || player1.includes(1)===true && player1.includes(4)===true && player1.includes(7)===true || player1.includes(3)===true && player1.includes(6)===true && player1.includes(9)===true || player1.includes(3)===true && player1.includes(5)===true && player1.includes(7)===true) {
      $("div.winner1").show();
      $("div.row").addClass("unclickable");
      $("button.refresh").show();
    } else if (player2.includes(1)===true && player2.includes(2)===true && player2.includes(3)===true ||  player2.includes(7)===true && player2.includes(8)===true && player2.includes(9)===true || player2.includes(2)===true && player2.includes(5)===true && player2.includes(8)===true || player2.includes(1)===true && player2.includes(5)===true && player2.includes(9)===true || player2.includes(4)===true && player2.includes(5)===true && player2.includes(6)===true || player2.includes(1)===true && player2.includes(4)===true && player2.includes(7)===true || player2.includes(3)===true && player2.includes(6)===true && player2.includes(9)===true || player2.includes(3)===true && player2.includes(5)===true && player2.includes(7)===true) {
      $("div.winner2").show();
      $("div.row").addClass("unclickable");
      $("button.refresh").show();
    } else if (turnTracker === 9) {
      $("div.tie").show();
      $("div.row").addClass("unclickable");
      $("button.refresh").show();
    }
    $(this).addClass("unclickable");
  });
})
