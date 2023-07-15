
let num = [];  // 무작위수 담을 배열 

for( i = 0 ; i < 3 ; i ++) {  // 무작위수 3개 추출
    let n = Math.floor(Math.random() * 9)
    num.push(n);
}

console.log(`무작위수: ${num}`) // 무작위수 콘솔창에 띄움


const readline = require('readline');  // 입력받는 창 만들기
const rl = readline.createInterface({ 
input: process.stdin,
output: process.stdout
});

let s = 0; // 스트라이크 갯수
let b = 0; // 볼 갯수
let t = 1; // 시도 횟수

rl.on('line', (input) => {

    console.log(`${t}회차 시도입니다.`)  // 1회 시도 실패 마다 횟수가 더해져 출력됨

    for( let i = 0 ; i < input.length ; i ++) {
        if(parseInt(input[i]) === num[i]) {
            s ++; // 무작위값과 입력값 배열의  숫자, 위치 모두 같으면 스트라이크 +1 씩
            console.log(`num1 = ${num}`)
            console.log(`i = ${input[i]}, num = ${num[i]}`)
        } 
        
        if(input.includes(num[i])) b ++; // 무작위값에 입력값이 위치는 다르나 포함되어 있으면 볼 +1 씩
        // console.log(input);
         console.log(num[i]);
       
        } ;
        b = b - s; // 스트라이크 값과 볼 값중 겹칠 수 있으므로 볼 값에서 스트라이크 값을 뺌

        if( s === 3) {
            console.log('올스트라이크')
            console.log('게임 종료')
            rl.close();
        } else t ++ ;
        console.log(`${b}B${s}S`)
        s = 0; // 스트라이크값 초기화
        b = 0; // 볼값 초기화
}); 
