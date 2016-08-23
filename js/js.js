var hourNode=document.getElementById("hour");
var minuteNode=document.getElementById("minute");
var secondNode=document.getElementById("second");

function clock(){
    var nowTime=new Date();
    var hour=nowTime.getHours();
    var minute=nowTime.getMinutes();
    var second=nowTime.getSeconds();

    second=second*6;//一秒转6度
    minute=minute*6+second/60;//一分转6度
    hour=hour*30+minute/12;//分针转360度时针转30度

    hourNode.style.transform="rotate("+hour+"deg)";
    minuteNode.style.transform="rotate("+minute+"deg)";
    secondNode.style.transform="rotate("+second+"deg)";


}
clock();
window.setInterval(clock,1000);

