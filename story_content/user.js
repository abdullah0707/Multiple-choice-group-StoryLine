window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var player = GetPlayer();
var timerCounter = setInterval(Timer, 1000);
var numberTimer;
var actionTimer

function Timer () {
	numberTimer = player.GetVar("timer");
 	actionTimer = player.GetVar("action_timer");
	actionTimer ? numberTimer-- : numberTimer;
	player.SetVar("timer", numberTimer);
	if ( numberTimer == 0 || !actionTimer ){
			clearInterval(timerCounter);
		}
}
}

};
