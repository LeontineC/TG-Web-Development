
let pausedTimeCS=0;  //variables pause global scope//
let pausedTimeS=0;
let pausedTimeM=0;

//function attached to onclick in html//
startSign = () => {   



let totalTimeCS = parseInt(pausedTimeCS); // innerText pausedTime nan bc  ":" and "0"  //
let totalTimeS = parseInt(pausedTimeS); //therefore parseInt  used on string to return integer//
let totalTimeM = parseInt(pausedTimeM); //important string must start with something that can be a number so NOT ":" !!! //



//setInterval start//
let timeRun = setInterval(function(){
  
  /*document.getElementById('start').onclick;     this is double already activated with function*/
  
  
  totalTimeCS += 1; //centiseconds increment by 1//
    
   
     
 
  if(totalTimeCS < 10 ){ 
   document.getElementById("totalTimeCS").innerText =  "0" + totalTimeCS;
   //to add extra zero in front if single digit//

  } if (totalTimeCS >= 10) {
    document.getElementById("totalTimeCS").innerText =  totalTimeCS;

  } if (totalTimeCS > 99) { //returns MS to 0 after reaching 99//
    totalTimeCS = 0; 
    totalTimeS += 1; //counts up, starts next column//
    document.getElementById("totalTimeS").innerText = totalTimeS + ":";

  }  if (totalTimeS < 10) { //again adds 0 to parseInt less than 10//
    document.getElementById("totalTimeS").innerText =  "0" + totalTimeS + ":";

  } if (totalTimeS > 59) { //returns seconds to 0 after reaching 59//
    totalTimeS = 0;
    totalTimeM +=1; //starts next column count , minutes//
    document.getElementById("totalTimeM").innerText = totalTimeM + ":";

  } if (totalTimeM < 10) { //adds 0 to parseInt < 10//
    document.getElementById("totalTimeM").innerText = "0" + totalTimeM + ":";
  }}
    

  , 10); //speed for centisecond//

 
  
  
  
  pause = () => {     //click pause  HTML browser//
  clearInterval(timeRun);   //clearInterval stops setInterval continuation //
  
   if (totalTimeM  > 0 || totalTimeS > 0 || totalTimeCS > 0) {   //if greater than 0 has values //
    pausedTimeCS = //do not use let //
    document.getElementById("totalTimeCS").innerText;  //captures time CentiSeconds moment of pause click//

    pausedTimeS =
    document.getElementById("totalTimeS").innerText;  //ibid seconds//

    pausedTimeM =
    document.getElementById("totalTimeM").innerText;  //ibid minutes//
    /*console.log(pausedTimeM,pausedTimeS,pausedTimeCS);    just checking*/  
  }}
    
 
    
   



stop = () => {       //stops timer, returns 00:00:00 to html timer watch//
  clearInterval(timeRun);
  totalTimeCS = 0;
  totalTimeM = 0;
  totalTimeS = 0;
  document.getElementById("totalTimeCS").innerText = ":00";
  document.getElementById("totalTimeS").innerText = ":00";
  document.getElementById("totalTimeM").innerText = "00";
}

} //end of entire function//

    
 /*clearInterval */



 