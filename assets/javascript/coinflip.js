
$(document).ready(function(){
    //variables
    var wins=0;
    var losses=0;
    var userChosen;
    var headsChosen=0;
    var tailsChosen=0;
    //what we see when the page loads
    $("#heads-chosen").html(headsChosen);
    $("#tails-chosen").html(tailsChosen);
    $("#losses").html(losses);
    $("#wins").html(wins);
 

  $("#heads").click(function(){

    userChosen=0;
    $("#guess").text("heads");
    headsChosen++;
    $("#heads-chosen").html(headsChosen);
    console.log($("#heads-chosen").html(headsChosen));
    coinFlip(userChosen);
  });


  $("#tails").click(function(){

    userChosen=1;
    $("#guess").text("tails");
    tailsChosen++;
    coinFlip(userChosen);
    $("#tails-chosen").html(tailsChosen);
 });


 function coinFlip(result){

    var computerGuessed=Math.floor(Math.random()*2);

    if (computerGuessed==0){
    $("#coin-image").html("<img src='http://random-ize.com/coin-flip/us-quarter/us-quarter-front.jpg'/>");
    }
    else{
    $("#coin-image").html("<img src='http://random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg' />");
    }

    if (result == computerGuessed){
    wins++;
    $("#win-lose").html("Winner!");
    $("#wins").html(wins);
    }
    else{
    losses++;
    $("#win-lose").html("Loser!");
    $("#losses").html(losses);
    console.log(losses);
    }
}
 
});
 