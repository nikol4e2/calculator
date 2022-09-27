let now;
let prev;
let nowNumber;
let prevNumber;
let screen;

function init()
{
    now=document.getElementById("now");
    prev=document.getElementById("prev");
    nowNumber="";
    prevNumber="";
    screen=document.getElementById("screen-portion");
}

function addNumber(n)
{
   nowNumber+=n;
    now.value=nowNumber;
  

}
function calculate(operation)
{
    switchScreens();
    
}

function switchScreens()
{
    prev.value=now.value;
    now.value="";
    nowNumber="";
}