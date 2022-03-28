let drumSound = document.querySelector("body")
let buttons = document.querySelectorAll(".button")








drumSound.addEventListener("keydown", function(e){
   

   

    //get the sound to act on key
    switch(e.key) {
        case "j" : 
        console.log("j key pressed")
        let clap = document.querySelector("#clap")
        document.querySelector("#clapButton")
        document.getElementById("clapButton").click();
        clap.play()
        
        
        break

        case "k" :
        console.log("k key pressed")
        let hihat = document.querySelector("#hihat")
        document.getElementById("hihatButton").click();
        hihat.play()
        break

        case "l" :
        console.log("l key pressed")
        let kick = document.querySelector("#kick")
        document.getElementById("kickButton").click();
        kick.play()
        break

        case "ø" :
        console.log("ø key pressed")
        let openhat = document.querySelector("#openhat")
        document.getElementById("openHatButton").click();
        openhat.play()

        break

        case "u" :
        console.log("u key pressed")
        let ride = document.querySelector("#ride")
        document.getElementById("rideButton").click();
        ride.play()

        break

        case "i" :
        console.log("i key pressed")
        let snare = document.querySelector("#snare")
        document.getElementById("snareButton").click();
        snare.play()

        break

        case "o" :
        console.log("o key pressed")
        let tink = document.querySelector("#tink")
        document.getElementById("tinkButton").click();
        tink.play()

        break
        case "p" :
          console.log("p key pressed")
          let tom = document.querySelector("#tom")
          document.getElementById("tomButton").click();
          tom.play()
  
          break


        default:

        
        
        
   
}
}
)




//connect the button/transiton to the sounds
buttons.forEach( button => {
  button.addEventListener("click", function(e){
      
    console.log(e.target.classList)
    e.target.classList.add("active") 

  })

  
  button.addEventListener( "transitionend", function(e){

    e.target.classList.remove("active")
  })
}

)

   


 
   
    




