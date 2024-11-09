var change = 100;
var intervaildID = 0;



function start() //start button functions and movement
{
    document.getElementById ("stopButton").disabled = false;
    document.getElementById("startButton").disabled = true;
    var image = document.getElementById("sword");
    intervaildID = setInterval (function()
    {
    image.style.left = change + "px";
    

    
   
    change +=5; //change + change + 5;
    }, 50); 
}
function stop() //stop button functions
{
    document.getElementById ("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
   //stoping movement
    clearInterval (intervaildID);
    
    
}



