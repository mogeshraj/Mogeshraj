var upbutton=document.querySelector(".upbutton")
 function gotop(){
    window.scrollTo({top:0,behavior:"smooth"});
 }

var hearts=document.querySelectorAll(".fa.fa-heart")

hearts.forEach(function(heart){heart.addEventListener("click",function(){
    if(heart.style.color==="red"){
    heart.style.color="white";
    
}
    else{
        heart.style.color="red";

    }
});
});

var adds=document.querySelectorAll(".add")
adds.forEach(function(add){
    add.addEventListener("click",function(){
        alert('item added !!! :) ');
    })
}) 

var signup=document.querySelector(".signup")
var overlay=document.querySelector(".overlay")
var inputpopup=document.querySelector(".inputpopup")

signup.addEventListener("click",function(){
    overlay.style.display="block"
    inputpopup.style.display="block"
})

var cancel=document.querySelector(".cancel")

cancel.addEventListener("click",function(){
    overlay.style.display="none"
    inputpopup.style.display="none"
    
})
 
// var heart=document.querySelector(".heart")
// heart.addEventListener("click",function(){
//     heart.style.color="white";
// });