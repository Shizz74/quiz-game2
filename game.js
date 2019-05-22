document.addEventListener("DOMContentLoaded", function() {
// Question list -------------------------------------
let que = [];
que[0] = ["Która liczba jest większa od 3?", "1", "2", "3", "4", "4"];
que[1] = ["Która liczba jest równa 2?", "1", "2", "3", "4", "2"];
que[2] = ["Która liczba jest mniejsza od 2?", "1", "2", "3", "4", "1"];
que[3] = ["Która liczba jest większa od 4?", "2", "3", "4", "5", "5"];
que[4] = ["Która liczba jest mniejsza od 3?", "2", "3", "4", "5", "2"];
que[5] = ["Która liczba jest równa 1?", "1", "2", "3", "4", "1"];
que[6] = ["Która liczba jest równa 3?", "1", "2", "3", "4", "3"];
que[7] = ["Która liczba jest równa 4?", "1", "2", "3", "4", "4"];
que[8] = ["Która liczba jest równa 10?", "10", "2", "3", "4", "10"];
que[9] = ["Która liczba jest równa 9", "1", "2", "9", "4", "9"];
que[10] = ["Która liczba jest równa 5", "1", "2", "3", "5", "5"];
que[11] = ["Który szczyt jest wyższy?", "Czomolungma", "K2", "Kangczengdzonga", "Lhotse", "Czomolungma"];
que[12] = ["Jak nazywał się 3 prezydent Stanów Zjednoczonych?", "Abraham Lincoln", "Benjamin Franklin", "Thomas Jefferson", "George Washington", "Thomas Jefferson"];


// Variables----------------------------------------
let counter = 0;
let score = 0;
let life = 3;
let a = que.length;
let questionNumber;
let correctAnswer;
let answerQue;
let questionBTN = document.querySelector("#nextQuestion");
const newGame = document.querySelector("#newGame");
let ans = document.querySelectorAll('.ans');
let timeOut = document.querySelector('.timeOut');
let timeRepeat;
let timeBar = document.querySelector(".time2");

//Time ----------------------------
function countDown(){ 
    let time = 5;
    timeRepeat = setInterval(function() {
   if (time >= 1){
    time -= 1;
   } 
   else {
    questionBTN.classList.remove("anvis");
    timeOut.classList.remove('anvis');
    counter+=1;
    life-=1;
    for(i=0;i<ans.length;i++){
      ans[i].disabled = true;
     }
    clearInterval(timeRepeat);
   }
 }, 1000);
};
let answerOrder = [1, 2, 3, 4];
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}
// Next question/round -------------------------------------------------------
function roundStart() {
  questionBTN.classList.add("anvis");
  timeOut.classList.add('anvis');
  timeBar.classList.remove("anvis");
  questionNumber = 1 + Math.floor(Math.random() * a);
      let indexNr = questionNumber - 1; 
      let index = que.indexOf(questionNumber);
      a-=1;
      counter += 1; 
      ///answerOrder.sort(function() { 
       // Math.random() - 0.5 ;
       // console.log(answerOrder);
    //  });
      document.querySelector("#score").innerHTML = "Punkty: " + score;
      document.querySelector("#life").innerHTML = "Życia: " + life;
      document.querySelector("#counter").innerHTML = "Pytanie: " + counter;
      document.querySelector("#question").innerHTML = que[questionNumber-1][0];
      document.querySelector("#answers").innerHTML =
      '<div class="container">'  +
      '<div class="row justify-content-around">' +
        '<button type="button" class="btn btn-outline-dark mb-2 ans col-lg-5" value="' + que[questionNumber-1][answerOrder[0]] + '">' +
        que[questionNumber-1][answerOrder[0]] +
        "</button>" +
        '<button type="button" class="btn btn-outline-dark mb-2 ans col-lg-5" value="' + que[questionNumber-1][answerOrder[1]] + '">' +
        que[questionNumber-1][answerOrder[1]] +
        "</button></div>" +
        '<div class="row justify-content-around">' +
        '<button type="button" class="btn btn-outline-dark mb-2 ans col-lg-5" value="' + que[questionNumber-1][answerOrder[2]] + '">' +
        que[questionNumber-1][answerOrder[2]] +
        "</button>" +
        '<button type="button" class="btn btn-outline-dark mb-2 ans col-lg-5" value="' + que[questionNumber-1][answerOrder[3]] + '">' +
        que[questionNumber-1][answerOrder[3]] +
        "</button>";
        document.querySelector(".time").innerHTML = '<div class="timeColor"></div>';
      correctAnswer = que[questionNumber-1][5];
      questionBTN.classList.add("anvis");
      que.splice(indexNr,1);
}


// Game condition-----------------------------------
document.querySelector("#nextQuestion").addEventListener("click", function() {
  questionBTN.innerHTML = " Następne ";
  let introText = document.querySelector(".intro-text").style.display = "none";
if (life > 0) {
  
    if (a > 0){
      shuffleArray(answerOrder);
      roundStart();
      countDown();
    }
    else {
      document.querySelector("#life").innerHTML = "Życia: " + life;
      document.querySelector("#counter").innerHTML = "Pytanie: " + counter;
      document.querySelector("#answers").innerHTML = " Zdobyłeś: " + score +"pkt";
      document.querySelector("#score").innerHTML = " ";
      document.querySelector("#question").innerHTML = " ";
      newGame.classList.remove("anvis");
      questionBTN.classList.add("anvis");
      timeOut.classList.add("anvis");
    }
    ans = document.querySelectorAll('.ans');

// Checking answer --------------------------------------
for(let i=0;i<ans.length;i++){
  ans[i].addEventListener('click',function(){
    clearInterval(timeRepeat);
    timeBar.classList.add("anvis");
    for(i=0;i<ans.length;i++){
     ans[i].disabled = true;
    }
    answerQue=this.value;
    if ( answerQue == correctAnswer){
      score +=1;
      this.classList.remove("btn-outline-dark");
      this.classList.add("btn-success");
      questionBTN.classList.remove("anvis");
    }
    else {
      --life;
      this.classList.remove("btn-outline-dark");
      this.classList.add("btn-danger");
      questionBTN.classList.remove("anvis");
      if (life == 0){
        questionBTN.innerHTML = " Koniec ";
      }
    }
  });
}
if (a==1 || life == 1){
  questionBTN.innerHTML = " Koniec ";
}
}
else {
  document.querySelector("#life").innerHTML = "Życia: " + life;
  document.querySelector("#counter").innerHTML = "Pytanie: " + counter;
  document.querySelector("#answers").innerHTML = " Zdobyłeś: " + score +"pkt"
  document.querySelector("#score").innerHTML = " ";
  document.querySelector("#question").innerHTML = " ";
  newGame.classList.remove("anvis");
  questionBTN.classList.add("anvis");
  timeOut.classList.add('anvis');
  timeBar.classList.add("anvis");
}
});
});