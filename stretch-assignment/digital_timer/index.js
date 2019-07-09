let secondTens = document.querySelector('#secondTens');
let secondOnes = document.querySelector('#secondOnes');
let msHundreds = document.querySelector('#msHundreds');
let msTens = document.querySelector('#msTens');


function timer() {
  let second = 1;
  let ms = 1;

  let msH = 1;
  let msT = 1;

  function loop() {
    setTimeout(function() {
      if (ms < 99 ) {
        if (msT < 10) {
          msTens.innerHTML = msT;
          msT++;
          ms++;
          loop();
        } else if (msT === 10 && msH < 10) {
          msT = 1;
          msTens.innerHTML = 0;
          msHundreds.innerHTML = msH;
          msH ++;
          ms++;
          loop();
        } else if (msH === 10) {
          msH = 0;
          msHundreds.innerHTML = msH;
          msT = 0;
          msTens.innerHTML = msT;
          ms++;
          loop();
        }

      } else if (ms === 99 && second < 10) {
          secondOnes.innerHTML = second;
          msTens.innerHTML = 0;
          msHundreds.innerHTML = 0;
          second++;
          ms = 1;
          msH = 1;
          msT = 1;
          loop();

      } else if (second === 10) {
          document.querySelector('.digits').classList.add('redDigit')
          secondTens.innerHTML = 1;
          secondOnes.innerHTML = 0;
          msHundreds.innerHTML = 0;
          msTens.innerHTML = 0;
      }
    }, 10)
  }
  loop();
}
timer();