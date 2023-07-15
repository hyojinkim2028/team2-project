// 야구게임

// 수정내용
// 1) 무작위수 추출 중복 제거
// 2) 게임 시작시 바로 시도 횟수 나오게
// 3) 3s 나 3b 시 딱 그것만 뜨게 ( 3b 0s 이렇게 말고)

let numbers = [];  // 0~9까지 담음
for (let n = 0; n < 9 ; n++ ) {
    numbers.push(n);
} 

let num  = [];
for( n = 0 ; n < 3 ; n ++) {  // numbers에서 무작위수 3개 추출
    let index = Math.floor(Math.random() * (numbers.length - n)); // 한자리 정수로 바꿈
    num.push(numbers[index]); // num배열에 추출된 값 추가
    numbers.splice(index,1); // 중복 제거
    
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

console.log(`${t}회차 시도입니다. 세 개의 숫자를 입력하세요`) // 1회 시도 실패 마다 횟수가 더해져 출력됨
console.log('예시) 123 ')

rl.on('line', (input) => {
      
    for( let i = 0 ; i < input.length ; i ++) {

        if(parseInt(input[i]) === num[i]) {
            s ++; // 무작위값과 입력값 배열의  숫자, 위치 모두 같으면 스트라이크 +1 씩
            //console.log(`num1 = ${num}`)
            //console.log(`i = ${input[i]}, num = ${num[i]}`)
        } 
        if(input.includes(num[i])) b ++; // 무작위값에 입력값이 위치는 다르나 포함되어 있으면 볼 +1 씩

        } ;
        b = b - s; // 스트라이크 값과 볼 값중 겹칠 수 있으므로 볼 값에서 스트라이크 값을 뺌


        if( s === 3) {

            console.log(`${s}S`)
            console.log('올스트라이크')
            console.log('게임 종료')
            rl.close();
            
        } else if( b === 3) {
            t ++ ;
            console.log(`${b}B, 아쉽지만 틀렸습니다.`)
            s = 0; // 스트라이크값 초기화
            b = 0; // 볼값 초기화
            console.log(`-------------------`)
            console.log(`${t}회차 시도입니다.`)

        } else { 
            t ++ ;
            console.log(`${b}B${s}S`)
            console.log('틀렸습니다. 다시하세요')
            s = 0; // 스트라이크값 초기화
            b = 0; // 볼값 초기화
            console.log(`-------------------`)
            console.log(`${t}회차 시도입니다.`)
            }

}); 
