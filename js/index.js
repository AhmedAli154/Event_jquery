/// <reference types="../@types/jquery" />
 
var daysE1 =document.getElementById("Days")
var hoursE1 =document.getElementById("Hours")
var minutesE1 =document.getElementById("Minute")
var secoundsE1 =document.getElementById("Secound")
 
    $('#openbtn').on('click',function(){

    $('.leftDiv').animate({width:'350px'},600)
    $('.leftDivv').animate({marginLeft:'150px'},600)
    $('#homeCenter').animate({marginLeft:'80px'},800)
    $('#openbtn').animate({marginLeft:'180px'},600)

    })

    $('#closeBtn').on('click',function(){

    $('.leftDiv').animate({width:'0px'},500)
    $('.leftDivv').animate({marginLeft:'-200px'},500)
    $('#homeCenter').animate({marginLeft:'0px'},200)
    $('#openbtn').animate({marginLeft:'0px'},400)
    })
// -------------------home----------------------------

function countDownTimer() {
    const countDownDate =new Date('12/07/2024 11:00').getTime()

    const secound=1000
    const minute=secound*60
    const hour=minute*60
    const day=hour*24
const interval =setInterval(() => {
  const now =new Date().getTime()
var distancee = countDownDate - now
 
daysE1.innerText=formatNumber(Math.floor(distancee/day))+ "D"
hoursE1.innerText=formatNumber(Math.floor((distancee%day)/hour))+ "H"
minutesE1.innerText=formatNumber (Math.floor((distancee%hour)/minute))+ "M" 
secoundsE1.innerText=formatNumber(Math.floor((distancee%minute)/secound))+ "S" 

if (distancee<=0) {
    document.getElementById("headLine").innerText="our party is ready"
     document.getElementById("countDown").style.display='none'
    clearInterval(interval)
 }

}, 1000);
 
    
}

function formatNumber(number) {
   if (number<10) {
     return '0'+ number
   }else{
    return number
   }
    
}

countDownTimer()
// ------------------count----------------------------- 

$('.hideDiv').on('click',function (){
    
    $('.innerText').not($(this).next()).slideUp(500);
      $(this).next().slideToggle(500);

})
//---------------slider--------------------------

var muximum = 100;
$('textarea').on('keyup',function() {
  var length = $(this).val().length;
  var residualNum = muximum-length;
  if(residualNum<=0)
        {
          $("#charsNum").text("your available character is finished");
       }
        else{
        
        $("#charsNum").text(residualNum + 'Characyer Reamining');
        }
});   
 //------------------------textarea---------------------------
