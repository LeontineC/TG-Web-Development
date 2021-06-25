

let variableSlides = document.getElementsByClassName('slide');   //contains 3 slides
let visibleSlide = 0;
let numberOfSlides = variableSlides.length //there are 3 slides...making sure
let x = document.getElementById('image1').offsetWidth
console.log(x);  //but how to use it to move the images?


document.getElementById('goRight').addEventListener('click', function(){ //activates right arrow
    moveSlideRight(); //if click call on new function
    
})

document.getElementById('goLeft').addEventListener('click', function() {  //activates left arrow
    moveSlideLeft(); //if click call on new function
    
   
})

moveSlideRight = () => {  
    if(visibleSlide === 0) {  //if image 1 

        visibleSlide++;       //increment
        document.getElementById("image1").style.left = "-100%";
        document.getElementById("image2").style.left  =  ".2%";  //glitchy on first move. ???
    } else if(visibleSlide === 1) {    //if image2 

        visibleSlide++;                //increment
        document.getElementById("image2").style.left = "-100%";  //hide image2 
        document.getElementById("image3").style.left = "-.2%";  //make image3 visible
        
    }
   }

moveSlideLeft = () => {       //function when click left
    if(visibleSlide === 2) {   //if its image3

        visibleSlide--;        //decrement
        document.getElementById("image3").style.left = "100%";  // moves image3 back
        document.getElementById("image2").style.left = ".09%";  //moves image 2
        
    } else if (visibleSlide === 1) {    //if image2 

        visibleSlide--;                  //decrement
        document.getElementById("image2").style.left = "100%"; //moves image 2 back
        document.getElementById("image1").style.left = ".2%"; //moves image 1 back
        
    }
}



