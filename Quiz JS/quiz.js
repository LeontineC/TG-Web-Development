

let start = document.createElement('div');  
let startButton = document.createElement('button');
startButton.classList.add('startButton');
startButton.innerText = "Start";

document.body.append(start); 
start.append(startButton);

let geoProblem = document.createElement('div');
geoProblem.classList.add('geoProblem');
let titleGeo = document.createElement('h4');
titleGeo.innerText = "Geography Questions";
let page = document.createElement('h6');
page.classList.add('page');
let question = document.createElement('h6');
question.classList.add('question');
let answers = document.createElement('div');
answers.classList.add('answers');
let answerOne = document.createElement('button');
answerOne.classList.add('button');
let answerTwo = document.createElement('button');
answerTwo.classList.add('button');
let answerThree = document.createElement('button');
answerThree.classList.add('button');
let answerFour = document.createElement('button');
answerFour.classList.add('button');

let prev = document.createElement('button');
prev.classList.add('prevNextbtn');
prev.innerText = "Prev";
let next = document.createElement('button');
next.classList.add('prevNextbtn');
next.innerText = "Next";

document.body.append(geoProblem);
geoProblem.append(titleGeo);
geoProblem.append(page);
geoProblem.append(question);
geoProblem.append(answers);
answers.append(answerOne);
answers.append(answerTwo);
answers.append(answerThree);
answers.append(answerFour);

geoProblem.append(prev, next);

let end = document.createElement('div');
end.classList.add('end');
let textEnd = document.createElement('h4');

textEnd.innerText = "Yay you did it!";

let endResult = document.createElement('p');
endResult.classList.add('endResult');
let restartButton = document.createElement('button');
restartButton.classList.add('restartButton');

restartButton.innerText = 'Restart';

document.body.append(end);
end.append(textEnd);
end.append(endResult);
end.append(restartButton);



let quizQuestions = [{
  
  page: "1/6",
  question: 'What is the capital of Laos?',
  answers: ['Phnom Penh', 'Naypyitaw', 'Vientiane', 'Hanoi'],
  rightAnswer:  'Vientiane'

},
{
  page: "2/6",
  question: 'What is the capital of Latvia?',
  answers: [ 'Talinn', 'Riga', 'Vilnius', 'Helsinki' ],
  rightAnswer: 'Riga'
},
{
  page: "3/6",
  question: 'What is the capital of Kirghizia?',
  answers: [ 'Bishkek', 'Tashkent', 'Ashgabat', 'Dushanbe' ],
  rightAnswer: 'Bishkek'
 
},
{
  page: "4/6",
  question: 'What is the capital of Oman?',
  answers: [ 'Muscat', 'Sana\'a', 'Manama', 'Doha' ],
  rightAnswer: 'Muscat'
},
{
  page: "5/6",
  question: 'What is the capital of Mauritius?',
  answers: [ 'Moroni', 'Victoria', 'Antananarivo', 'Port Louis' ],
  rightAnswer: 'Port Louis'
},
{
  page: "6/6",
  question: 'what is the capital of Bhutan?',
  answers: [ 'Lhasa', 'Kathmandu', 'Thimpu', 'Dhaka' ],
  rightAnswer: 'Thimpu',
}
];

let buttonClicked = false; ///////////////////////////

let lastQuestion = quizQuestions.length;
let quizScore = 0;
let i = 0;

startButton.addEventListener('click', startQuiz)  
  
//combo doesnt work with arrow functions
function startQuiz (){

start.style.display = 'none';
geoProblem.style.display = 'block';

setNextQuestion ();
}

function setNextQuestion() {
    if(i < lastQuestion) {
page.innerHTML= quizQuestions[i].page; 
question.innerHTML= quizQuestions[i].question;
answerOne.innerHTML= quizQuestions[i].answers[0];
answerTwo.innerHTML= quizQuestions[i].answers[1];
answerThree.innerHTML= quizQuestions[i].answers[2];
answerFour.innerHTML= quizQuestions[i].answers[3]; }
else { 
  geoProblem.style.display = 'none';
  end.style.display = 'block';
}

answerOne.onclick = function(){
  
 if(quizQuestions[0].answers[0] == quizQuestions[i].rightAnswer ) {
   answerOne.style.background = "green";
    quizScore ++;
    
    
}
   else {
     answerOne.style.background = 'red';
     
     
   }
  }
  answerTwo.onclick = function(){
    if(quizQuestions[i].answers[1] == quizQuestions[i].rightAnswer) {
    answerTwo.style.background = "green";
    quizScore ++;
    
     
    }
    else {
      answerTwo.style.background = 'red';
     
     
    }
    }
    answerThree.onclick = function(){
      if(quizQuestions[i].answers[2] == quizQuestions[i].rightAnswer) {
        answerThree.style.background = "green";
        quizScore ++;
        
       }
        else {
          answerThree.style.background = 'red';
         
     
        }
        }
        answerFour.onclick = function(){
          if(quizQuestions[i].answers[3] == quizQuestions[i].rightAnswer) {
            answerFour.style.background = "green";
            quizScore ++;
            
            }
            else {
              answerFour.style.background = 'red';
              
     
            } 
          }
          
          //console.log(buttonClicked);
          
          //if(buttonClicked === true) {   
          //  next.disabled = true;
          //}
         
         

          answers.addEventListener('click', e=>{
               if(quizQuestions[i].answers[0] == quizQuestions[i].rightAnswer) {
                answerOne.style.background = 'green';
                
              } else if (quizQuestions[i].answers[1] == quizQuestions[i].rightAnswer) {
                answerTwo.style.background = 'green'; 
                
              } else if (quizQuestions[i].answers[2] == quizQuestions[i].rightAnswer) {
                answerThree.style.background = 'green'; 
                
              }  else if (quizQuestions[i].answers[3] == quizQuestions[i].rightAnswer) {
                answerFour.style.background = 'green'; 
                
              }
          })

         
          
          endResult.innerHTML = " You got " +  quizScore + " out of 6 right!";
}  

  
   

 
next.addEventListener('click', selectAnswer);

function selectAnswer(){
   
    i++;
    setNextQuestion();
    answerOne.style.background = 'white';
    answerTwo.style.background = 'white';
    answerThree.style.background = 'white';
    answerFour.style.background = 'white'; 
     } 


restartButton.addEventListener('click', e=> {
  end.style.display = 'none';
  start.style.display = 'block';
  i = 0;
  quizScore = 0;
  });

  
  
 

  
