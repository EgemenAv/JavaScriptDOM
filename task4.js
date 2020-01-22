var images=["01.png", "02.png", "03.png", "04.png", "05.png", "06.png", "07.png", "08.png"];
var i=0;
var j=1;
var timer1=null;
var timer2=null;
window.onload=function(){
$("bar").observe("mouseover",func1);
$("bar").observe("mouseout",func2);
}
function func1(){
timer1=setInterval(func3,170);
timer2=setInterval(func4,130);
$("result").innerHTML="Spin";
$("bar").innerHTML="Move off to stop"
$("bar").style.backgroundColor="grey";
}

function func2(){
clearInterval(timer1);
clearInterval(timer2);
$("bar").innerHTML="Move on to spin"
$("bar").style.backgroundColor="white";

if(i==j){
$("result").innerHTML="You Win";
}
else {
$("result").innerHTML="You Lose";
}
}




function func3(){
i++;
if(i==8){
i=0;
}
$("img1").src=images[i];
}



function func4(){
  j++;
  if(j==8){
  j=0;
  }
  $("img2").src=images[j];
}
