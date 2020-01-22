window.onload=function(){
  $("add").observe("click",func1);
  $("del1").observe("click",func2);
  $("del2").observe("click",func3);
  $("input").observe("click",func4);
}
function func1(){
if($("input").value!=""){
var list= document.createElement("li");
list.innerHTML=$("input").value;
$("list").appendChild(list);
}
}

function func2(){
var lists=document.getElementsByTagName("li");
if(lists.length>0){
$("list").removeChild(lists[lists.length-1]);
}
}

function func3(){
var index=$("textie").value;
var nindex=parseInt(index);
var lists=document.getElementsByTagName("li");
if(lists.length>=nindex){
$("list").removeChild(lists[nindex-1]);
}
}


function func4(){
this.value="";
}
