let drumsound= document.querySelectorAll(".drum").length;
for(let i=0; i<drumsound; i++){
   document.querySelectorAll(".drum")[i].addEventListener("click" , clicked);

   function clicked(){
      let innerHTML = this.innerHTML;
      sound(innerHTML);
   }

}
     document.addEventListener("keypress", purpose);
  function purpose(key){
        sound(purpose.key);

  }

function sound(key){
    switch(key) 
    {
        case "w":
            var crash= new Audio('sounds_crash.mp3');
            crash.play();
            break;
        case "a":
            var tom2= new Audio('sounds_tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3= new Audio('sounds_tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom1= new Audio('sounds_tom-1.mp3');
            tom1.play();
            break;
        case "j":
            var snare= new Audio('sounds_snare.mp3');
            snare.play();
            break;
        case "k":
            var tom4= new Audio('sounds_tom-4.mp3');
            tom4.play();
            break;
        case "l":
            var kick= new Audio('sounds_kick-bass.mp3');
            kick.play();
            break;
        
        default:
             console.log(innerHTML);
    
    }
}