for(var i=0;i<7;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var drumInnerHtml=this.innerHTML;
    makeSound(drumInnerHtml);
    clickAnimation(drumInnerHtml);
});
}
document.addEventListener("keypress",function(event){
    var eventKey=event.key;
    makeSound(eventKey);
    clickAnimation(eventKey);
})
function makeSound(key){
    switch(key){
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
             audio.play();
             break;
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
    }
}

function clickAnimation(pressedKey){
    document.querySelector("."+pressedKey).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+pressedKey).classList.remove("pressed");
    },100);
}