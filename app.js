// =================== 전역변수 영역 =================== //
let lottoResult = [];
const $lottoBtn = document.querySelector('.lotto');
const $lotto = document.querySelector('.lottoWrap');
const $lottoResult = document.querySelector('.result')
const $makeLottoResult = document.querySelector('.lottoBtn')





// =================== 함수 정의 영역 =================== //

// 로또 창 오픈
function lottoOpen() {
  $lotto.classList.toggle('none') // 애니메이션 추가
}

// 1~45 숫자 6개를 배열에 담아.. 하나하나 출력?
function makeLottoNums() {
  
  for (let i = 1; i < 7; i++) {
    let num = Math.floor(Math.random() * (45)) + 1;
    lottoResult.push(num)
    if (lottoResult[i - 1] === lottoResult[i]) {
      lottoResult.push(num+1);
    }
  }
  lottoResult.sort((a, b) => a - b);
  $lottoResult.textContent = lottoResult;
}



// =================== 함수 바인딩 영역 ================== //

// 로또 창 오픈
$lottoBtn.addEventListener('click', lottoOpen)
$makeLottoResult.addEventListener('click', makeLottoNums)

