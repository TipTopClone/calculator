const allBtns = [...document.getElementsByClassName('btn')];

let strToDisplay = '';

const displayElm = document.querySelector('.display');

const operators = ['+', '-', '*', '/', '%'];

let lastOperator = '';

const audio = new Audio('./prank.mp3');
// yo muniko btn chai initialize gareko ho yesko thau ma j lekhda ni hunxa
allBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    displayElm.style.background = '';
    displayElm.style.color = '';
    displayElm.classList.remove('prank');

    const val = btn.innerText;
    // console.log(val);

    if (val === 'AC') {
      strToDisplay = '';
      display(strToDisplay);
      return;
    }

    if (val === 'C') {
      strToDisplay = strToDisplay.slice(0, -1);
      return display(strToDisplay);
    }

    if (val === '=') {
      const lastChar = strToDisplay[strToDisplay.length - 1];
      if (operators.includes(lastChar)) {
        //remove the last char from the strToDisplay

        strToDisplay = strToDisplay.slice(0, -1);
      }
      return total();
    }

    if (operators.includes(val)) {
      lastOperator = val;
      const lastChar = strToDisplay[strToDisplay.length - 1];

      if (operators.includes(lastChar)) {
        //remove the last char from the strToDisplay

        strToDisplay = strToDisplay.slice(0, -1);
      }
    }

    if (val === '.') {
      const indexOfLastOperator = strToDisplay.lastIndexOf(lastOperator);

      const lastNumberSet = strToDisplay.slice(indexOfLastOperator);

      if (lastNumberSet.includes('.')) {
        return;
      }

      if (!lastOperator && strToDisplay.includes('.')) {
        return;
      }
    }

    strToDisplay += val;
    display(strToDisplay);
  });
});

const display = (str) => {
  displayElm.innerText = str || '0.00';
};

const total = () => {
  const extraVal = randomNumber();
  if (extraVal) {
    audio.play();
    displayElm.style.background = ' blue';
    displayElm.style.color = 'yellow';
    displayElm.classList.add('prank');
  }

  const ttl = eval(strToDisplay);
  display(ttl + extraVal);
  strToDisplay = ttl.toString();
};

const randomNumber = () => {
  const num = Math.round(Math.random() * 10);

  return num < 3 ? num : 0;
};
