var equation = '';
var showEquation = '';
var numOkay = true
var optTrue = false

$('.buttons').children().on('click', function(e) {

  if (e.target.textContent === '=') {
    if (optTrue) {
      equation = eval(equation);
      numOkay = false;
      optTrue = false;
    }
  } else if (e.target.textContent === 'C') {
    equation = '';
    numOkay = true;
    optTrue = false;

  } else if (e.target.textContent === 'x') {
    equation += '*';
    optTrue = true;

  } else if (e.target.textContent === '\xF7') {
    equation += '/';
    optTrue = true

  } else if (e.target.textContent === '+') {
    equation += '+';
    optTrue = true;

  } else if (e.target.textContent === '-') {
    equation += '-';
    optTrue = true;

  } else {
    if (numOkay === true || optTrue === true) {
      equation += (e.target.textContent);

    }
  }
  console.log(equation);
  $('#screen').html(equation)
})
