window.onload=function(){
$("1").observe("click",func);
$("2").observe("click",func);
$("3").observe("click",func);
$("4").observe("click",func);
$("5").observe("click",func);
$("6").observe("click",func);
$("7").observe("click",func);
$("8").observe("click",func);
$("9").observe("click",func);
$("0").observe("click",func);
$("delete").observe("click",func2);
}
var a="";
function func(){
a=a+this.innerHTML;
$("entry").innerHTML=a;
}

function func2(){
if(a!=""){
a=a.slice(0,-1);
$("entry").innerHTML=a;
}
}
