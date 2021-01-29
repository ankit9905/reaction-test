var start=new Date().getTime();
var z=document.querySelector("body");
z.style.background="linear-gradient(to right,transparent,grey)";
var bt=document.getElementById("x");
var bt2=document.querySelector("span");
bt2.textContent="";
var disp=document.getElementById("ankit");
var result=document.querySelector("h1");
var button=document.querySelector("button");
button.addEventListener("click",function(){
    generateshape();
    bt2.textContent="";
    disp.textContent="1";
});
 
bt.addEventListener("click",function(){
    var end=new Date().getTime();
    var c=(end-start)/1000;
    bt2.textContent=c+" s";
    bt.style.display="none";
    if(c<ankit.textContent){
        ankit.textContent=c+" ";
        z.style.background="linear-gradient(to right,green,yellow)";
        result.textContent="Hooray, You Created a new record!";
        
 }
    setTimeout(generateshape,Math.random()*2000); 
    

   

});
setTimeout(generateshape,Math.random()*2000);
function generateshape(){
 
    start=new Date().getTime();
    var top =Math.random()*310;
    var left =Math.random()*1400;
    var height =Math.random()*250+80;

    bt.style.background=random();
    if(Math.random()>0.5){
        bt.style.borderRadius="50%";
    }
    else{
        bt.style.borderRadius="5%";
    }
    bt.style.display="block";
    bt.style.top=top+"px";
    bt.style.left=left+"px";
    bt.style.height=height+"px";
    bt.style.width=height+"px";
    z.style.background="linear-gradient(to right,transparent,grey)";
    result.textContent="Test Your Reactions!"
}
function random(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    
   return "rgb(" + r +", " + g +", " + b +")";
  
}