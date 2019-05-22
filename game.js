document.addEventListener("DOMContentLoaded", function() {
// Question list -------------------------------------
let que = [];
que[0] = ["Ile państw znajduje się w Europie?", "109", "46", "47", "34", "46"];
que[1] = ["Rok wybuchu I wojny światowej", "1914", "1912", "1939", "1904", "1914"];
que[2] = ["Najdłuższa rzeka Azji to?", "Jangcy", "Huang He", "Mekong", "Lena", "Jangcy"];
que[3] = ["Jak się nazywa mieszkańka Gwadelupy?", "Gwadelupka", "Gwadelupkini", "Gwadelka", "Gwaludczyni", "Gwadelupka"];
que[4] = ["W którym roku powstał film 'Władca Pierścieni: Druzyna Pierścienia?'", "2001", "2011", "2000", "2005", "2001"];
que[5] = ["Kto namalował słynny obraz 'Mona Lisa'", "Leonardo da Vinci", "Michał Anioł", "Donatello", "Rafael Santi", "Leonardo da Vinci"];
que[6] = ["Ostatni władca Rzeczypospolitej Obojga Narodów to?", "Stanisław August Poniatowski", "Mieszko II Lambert", "August III Sas", "Jan III Sobieski", "Stanisław August Poniatowski"];
que[7] = ["W jakich latach budowano kolej Transsyberyjską?", "1891–1916", "1899–1944", "1891–1900", "1887–1916", "1891–1916"];
que[8] = ["Jak nazywa sie pierwszy samochód w kosmosie?", "Tesla Roadster", "Spyker C8 Spyder", "EF7 Vision Gran Turismo Concept", "Alpine A110 Berlinette", "Tesla Roadster"];
que[9] = ["Krzem to?", "Metal", "Półmetal", "Gaz szlachetny", "Ciecz", "Półmetal"];
que[10] = ["Jak nazywa się najstarsze drzewo w Polsce", "Cis Henrykowski", "Dąb Bartek", "Sosna Kozłowskiego", "Grab Mieszka", "Cis Henrykowski"];
que[11] = ["Który szczyt jest najwyższy?", "Czomolungma", "K2", "Kangczengdzonga", "Lhotse", "Czomolungma"];
que[12] = ["Jak nazywał się 3 prezydent Stanów Zjednoczonych?", "Abraham Lincoln", "Benjamin Franklin", "Thomas Jefferson", "George Washington", "Thomas Jefferson"];
que[13] = ["Kto wyreżyserował film Rocky 3?", "Sylvester Stallone", "Ben Affleck", "Tom Brady", "Bracia Wachowscy", "Sylvester Stallone"];
que[14] = ["Pierwsza fotografia powstała w roku:", "1826", "1912", "1802", "1893", "1826"];
que[15] = ["Lądowanie Apollo 11, na księżycu nastąpiło dnia:", "20 lipca 1969", "5 czerwca 1969", "20 czerwca 1969", "5 lipca 1969", "20 lipca 1969"];
que[16] = ["Piatą częścią filowej serii Harre'go Potter'a ze światową premierą 28 czerwca 2007 roku, jest?", "Harry Potter i Zakon Feniksa", "Harry Potter i Czara Ognia", "Harry Potter i Kamień Filozoficzny", "Harry Potter i więzień Azkabanu", "2Harry Potter i Zakon Feniksa"];
que[17] = ["1 listopada 1993 roku powstała?", "Unia Europejska", "Organizacja Traktatu Północnoatlantyckiego", "Ukraina", "Słowacja", "Unia Europejska"];
que[18] = ["'Can't Help Falling In Love' to piosenka jakiego wykonawcy?", "Elvis Presley", "Dawid Bowie", "Michael Jackson", "James Brown", "Elvis Presley"];
que[18] = ["W którym roku Japonia zaatakowała Pearl Harbor?", "1941", "1940", "1942", "1939", "1941"];

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
      counter += 1;
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