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

let counter = 0;
let score = 0;
let life = 3;
let a = que.length;
let questionNumber;
let correctAnswer;
let answerQue;
let questionBTN = document.querySelector("#nextQuestion");

// Next question -------------------------------------------------------

function roundStart() {
  questionNumber = 1 + Math.floor(Math.random() * a);
      let indexNr = questionNumber - 1; 
      console.log("nr index " + indexNr);
      //let index = que.indexOf(questionNumber);
      a-=1;
      counter += 1; 
      
      console.log("nr pytanie " + questionNumber);
    console.log("pytanie " + que[questionNumber-1]);
    console.log(que);
      document.getElementById("score").innerHTML = "Punkty: " + score;
      document.getElementById("life").innerHTML = "Życia: " + life;
      document.getElementById("counter").innerHTML = "Pytanie: " + counter;
      document.getElementById("question").innerHTML = que[questionNumber-1][0];
      document.getElementById("answers").innerHTML =
        '<button type="button" class="btn btn-outline-dark mr-2 ans" value="' + que[questionNumber-1][1] + '">' +
        que[questionNumber-1][1] +
        "</button>" +
        '<button type="button" class="btn btn-outline-dark mr-2 ans" value="' + que[questionNumber-1][2] + '">' +
        que[questionNumber-1][2] +
        "</button>" +
        '<button type="button" class="btn btn-outline-dark mr-2 ans" value="' + que[questionNumber-1][3] + '">' +
        que[questionNumber-1][3] +
        "</button>" +
        '<button type="button" class="btn btn-outline-dark ans" value="' + que[questionNumber-1][4] + '">' +
        que[questionNumber-1][4] +
        "</button>";
      correctAnswer = que[questionNumber-1][5];
      questionBTN.classList.add("anvis");
      que.splice(indexNr,1);
}


// Game condition-----------------------------------
if (life > 1) {
  document.getElementById("nextQuestion").addEventListener("click", function() {
    
    
    console.log("A= "+a);

    if (a > 0){
      roundStart();
    }
    else {
      document.getElementById("life").innerHTML = "Życia: " + life;
      document.getElementById("counter").innerHTML = "Pytanie: " + counter;
      document.getElementById("answers").innerHTML = " Zdobyłeś: " + score +"pkt";
      document.getElementById("score").innerHTML = " ";
      document.getElementById("question").innerHTML = " ";
    }
    let ans = document.querySelectorAll('.ans');
// Checking answer --------------------------------------
for(let i=0;i<ans.length;i++){
  ans[i].addEventListener('click',function(){
    answerQue=this.value;
    console.log(answerQue);
    if ( answerQue == correctAnswer){
      console.log("correct");
      score +=1;
      this.classList.remove("btn-outline-dark");
      this.classList.add("btn-success");
      questionBTN.classList.remove("anvis");
    }
    else {
      console.log("błąd");
      console.log(correctAnswer);
      --life;
      this.classList.remove("btn-outline-dark");
      this.classList.add("btn-danger");
      questionBTN.classList.remove("anvis");
    }
  });
}

  });

} else {
  document.getElementById("life").innerHTML = "Życia: " + life;
  document.getElementById("counter").innerHTML = "Pytanie: " + counter;
  document.getElementById("answers").innerHTML = " Zdobyłeś: " + score +"pkt"
  document.getElementById("score").innerHTML = " ";
  document.getElementById("question").innerHTML = " ";
}








//-------------------------------------
/*
document.getElementById("answers").innerHTML =
        '<button type="button" class="btn btn-outline-dark mr-2 ans" onclick="answer()" value="' + que[questionNumber-1][1] + '">' +
        que[questionNumber-1][1] +
        "</button>" +
        '<button type="button" class="btn btn-outline-dark mr-2 ans" onclick="answer()" value="' + que[questionNumber-1][2] + '">' +
        que[questionNumber-1][2] +
        "</button>" +
        '<button type="button" class="btn btn-outline-dark mr-2 ans" onclick="answer()" value="' + que[questionNumber-1][3] + '">' +
        que[questionNumber-1][3] +
        "</button>" +
        '<button type="button" class="btn btn-outline-dark ans" onclick="answer()" value="' + que[questionNumber-1][4] + '">' +
        que[questionNumber-1][4] +
        "</button>";
      correctAnswer = que[questionNumber-1][5];
      que.splice(indexNr,1);*/
      