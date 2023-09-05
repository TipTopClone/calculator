const allBtns = [...document.getElementsByClassName('btn')];

let strToDisplay = '';

const displayElm = document.querySelector('.display');

const operators = ['+', '-', '*', '/', '%'];
// yo muniko btn chai initialize gareko ho yesko thau ma j lekhda ni hunxa
allBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
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
      const lastChar = strToDisplay[strToDisplay.length - 1];

      if (operators.includes(lastChar)) {
        //remove the last char from the strToDisplay

        strToDisplay = strToDisplay.slice(0, -1);
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
  const ttl = eval(strToDisplay);
  display(ttl);
  strToDisplay = ttl.toString();
};
