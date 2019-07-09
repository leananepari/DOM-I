let secondTens = document.querySelector('#secondTens');
let secondOnes = document.querySelector('#secondOnes');
let msHundreds = document.querySelector('#msHundreds');
let msTens = document.querySelector('#msTens');
let msOnes = document.querySelector('#msOnes');
console.log(msHundreds)

function timer() {
  let second = 1;
  let ms = 0;

  let msH = 0;
  let msT = 1;

  function loop() {
    setTimeout(function() {
    if (ms < 100 && second < 10) {
      setTimeout(function() { 
        if (msT < 10) {
          msTens.innerHTML = msT;
          msT++;
          ms++;
          loop();
          console.log(ms);
          console.log('SECOND', second)
        } else if (msT === 10 && msH < 10) {
          msT = 0;
          msH ++;
          msTens.innerHTML = msT;
          msHundreds.innerHTML = msH;
          ms++;
          loop();
          console.log(ms)
          console.log('SECOND', second)
        } else if (msT === 10 && msH === 10) {
          msH = 0;
          msHundreds.innerHTML = msH;
          msT = 0;
          msTens.innerHTML = msT;
          ms++;
          loop();
          console.log(ms)
          console.log('SECOND', second)
        }
      }, 10)

    }  else if (ms === 100 && second < 10) {
      console.log('HERE', ms, 'SECOND', second);
      console.log('SECOND', second)
        secondOnes.innerHTML = second;
        second++;
        ms = 1;
        msH = 0;
        msT = 0;
        msO = 1;
        // msTens.innerHTML = ms;
        loop();
        
    }  else if (second === 10) {
        secondTens.innerHTML = 1;
        secondOnes.innerHTML = 0;
        msHundreds.innerHTML = 0;
        msTens.innerHTML = 0;
        document.querySelector('.digits').classList.add('redDigit')
    }
  }, 10)
  }

  loop();
}
timer();