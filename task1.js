/* EECS1012 - Practice Lab Test #2 */
 window.onload = function() {
$("cardId").observe("keyup",func1);
$("countryCode").observe("keyup",func2);
$("amount").observe("keyup",func3);
$("submitButton").observe("click",func5);
func4();
}
var c1=false;
var c2=false;
var c3=false;

 function func4(){
  $("cardId").style.backgroundColor="mistyrose";
  $("countryCode").style.backgroundColor="mistyrose";
  $("amount").style.backgroundColor="mistyrose";
 }

 function func1(){
  var re=/^[AC][0-9][0-9][0-9][0-9][A-Za-z]$/;

if(re.test(this.value)){
this.style.backgroundColor="lightblue";
c1=true;
}
else {
this.style.backgroundColor="mistyrose";
c1=false;
}
 }

 function func2(){
var countries=["usa","can","mex","eur","other"];
if(countries.includes(this.value.toLowerCase())){
this.style.backgroundColor="lightblue";
c2=true;
}
else {
this.style.backgroundColor="mistyrose";
c2=false;
}
 }

 function func3(){
   var re=/^\$[0-9]+[\.]?[0-9]*$/;

   if(re.test(this.value)){
   this.style.backgroundColor="lightblue";
   c3=true;
   }
   else {
   this.style.backgroundColor="mistyrose";
   c3=false;
   }

 }


 function func5(){
  if(c1&&c2&&c3){
    this.style.backgroundColor="lightblue";
  }
  else {
    this.style.backgroundColor="mistyrose";
  }
 }
