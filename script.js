// Math.random() : 0 ~ 1미만사이의 랜덤한 소수
// Math.floor() : 내림처리해서 정수로 변경

/*
    1. 번호를 담을 배열 타입의 변수 lotto를 생성하세요.
    2. for문을 사용하여 랜덤한 정수 6개를 만드세요.
    3. document에 작성하세요.

    난이도 UP!
    - 만약! 같은 숫자가 나오면 새로운 랜덤한 정수를 넣으세요.

    난이도 UP!
    - Ul 안에 li 요소에 넣어서 클래스를 적용시켜 보세요.

*/

const lotto = [];
const ulList = document.querySelector('#lotto');

for(let i=0; i<6; i++){
    let num = Math.floor(Math.random() * 6) + 1
    console.log(`중복되기 전 : ${num}`);

    /*
    for(let j=0; j<lotto.length; j++){
        if(num === lotto[j]){
            num = Math.floor(Math.random() * 6) + 1
            j = -1;
            console.log(`중복되서 바꾼 숫자 : ${num}`);
        }
    }
    */
    
    while(lotto.includes(num)){
        num = Math.floor(Math.random() * 6) + 1;
        console.log(`중복되서 바꾼 숫자 : ${num}`);
    }

    lotto.push(num);
    
    const liList = document.createElement('li');
    liList.innerHTML = lotto[i];
    liList.classList.add(`num${num}`);
    // console.log(liList);
    ulList.appendChild(liList);
}