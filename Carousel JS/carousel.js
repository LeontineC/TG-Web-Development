

let variableSlides = document.getElementsByClassName('slide');   //contains 3 slides
let visibleSlide = 0;
let numberOfSlides = variableSlides.length //makes array like object?



document.getElementById('goRight').addEventListener('click', function(){ //activates right arrow
    moveSlideRight(); //if click call on new function
    
})

document.getElementById('goLeft').addEventListener('click', function() {  //activates left arrow
    moveSlideLeft(); //if click call on new function
    
   
})

moveSlideRight = () => {  //to start image1 is 0 in array like object
    if(visibleSlide === 0) {  //if 0/image 1 

        visibleSlide++;       //increment
        document.getElementById("image2").style.left  = ".2%";
        document.getElementById("image1").style.left = "-100%";

    } else if(visibleSlide === 1) {    //if image2 is visible

        visibleSlide++;                //increment
        document.getElementById("image2").style.opacity = "0";  //hide image2 
        document.getElementById("image3").style.left = "-.2%";  //make image3 visible
    }
   }

moveSlideLeft = () => {       //function when click left
    if(visibleSlide === 2) {   //if its image3

        visibleSlide--;        //decrement
        document.getElementById("image3").style.left = "100%";  // moves image3 back
        document.getElementById("image2").style.opacity = "1";  //make visible image2 
        
    } else if (visibleSlide === 1) {    //if image2 

        visibleSlide--;                  //decrement
        document.getElementById("image2").style.left = "50%"; //moves image 2 back
        document.getElementById("image1").style.left = ".2%"; //moves image 3 back
        
    }
}

let x = document.getElementById('image1').offsetWidth
console.log(x);  //maybe 

