const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//랜덤한 숫자를 생성
function getRandomNumber() { 
    return Math.floor(Math.random()*10)
}

// 퀴즈문제를 만듬 
function generateQuiz() {
  let quiz = "";
  for (let i = 0; i < 3; i++) {
    quiz += getRandomNumber().toString();
  }
  return quiz;
}

const quiz = generateQuiz();
//console.log(quiz);  정답입니다.
var pattern1 = /[0-9]/; 
quizCount = 1;
console.log("컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!");


rl.on("line", function(x) {
  if(x===""||!pattern1.test(x)) console.log("숫자를 입력하세요.")
  else if(x.length !== 3) console.log("3개의 숫자를 입력해주세요")
  else{
    if (x === quiz) {
      console.log(`${quizCount}번째 시도: ${x}`);
      console.log("3S");
      console.log(`정답입니다! ${quizCount}번만에 맞추셨습니다.`)
      console.log("게임을 종료합니다.")
      rl.close();
    }else {
      console.log(`${quizCount}번째 시도: ${x}`);
      checkQuiz(quiz,x);
      quizCount++;
    }
}
}).on("close", function() {
  process.exit();
});

// 스트라이크인지 볼인지 판단
function checkQuiz(x,y) {
  strike =0;
  ball =0;
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < x.length; j++) {
      if(x[i]===y[j]&&i===j)  strike++;
      else if(x[i]===y[j]&&i!==j) ball++;
    }
  }
  if(strike === 0&&ball === 0) console.log(`${strike}S${ball}B`);
  else if(strike === 0) console.log(`${ball}B`)
  else if(ball === 0) console.log(`${strike}S`)
  else console.log(`${strike}S${ball}B`);
}




