function clic() {
  var number1 = document.querySelector('.n1').value;
  var number2 = document.querySelector('.n2').value;

  var result = parseFloat(number1) * parseFloat(number2);

  document.querySelector('.result').innerHTML = result;
}
