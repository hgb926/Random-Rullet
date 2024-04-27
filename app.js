// =================== 전역변수 영역 =================== //


const $lottoBtn = document.querySelector('.lotto');
const $lotto = document.querySelector('.lottoWrap');
const $lottoResult = document.querySelector('.resultInner')
const $makeLottoResult = document.querySelector('.lottoBtn')





// =================== 함수 정의 영역 =================== //

// 로또 창 오픈
function lottoOpen() {
  $lotto.classList.toggle('none') // 애니메이션 추가
}

// 1~45 숫자 6개를 배열에 담아.. 하나하나 출력?

function makeLottoNums() {
  let lottoArr = [];
  $lottoResult.innerHTML = '';
  while (lottoArr.length < 6) {
    let num = Math.floor(Math.random() * (45)) + 1; // 배열에 담아서 정렬
    if (!lottoArr.includes(num)) {
      lottoArr.push(num);
    }
  }
  lottoArr.sort((a, b) => a - b);
  for (let i = 0; i < 6; i++) {
    const $lottoLi = document.createElement('li')
    $lottoLi.classList.add('lottonums')
    $lottoLi.textContent = lottoArr[i];

    if (lottoArr[i] <= 10) {
      $lottoLi.classList.add('yellow');
    } else if (lottoArr[i] <= 20 && lottoArr[i] > 10) {
      $lottoLi.classList.add('blue')
    } else if (lottoArr[i] <= 30 && lottoArr[i] > 20) {
      $lottoLi.classList.add('red')
    } else if (lottoArr[i] <= 40 && lottoArr[i] > 30) {
      $lottoLi.classList.add('grey')
    } else {
      $lottoLi.classList.add('green')
    }

    $lottoResult.appendChild($lottoLi);
  }
}



// =================== 함수 바인딩 영역 ================== //

// 로또 창 오픈
$lottoBtn.addEventListener('click', lottoOpen)

// 결과 출력
$makeLottoResult.addEventListener('click', makeLottoNums)


