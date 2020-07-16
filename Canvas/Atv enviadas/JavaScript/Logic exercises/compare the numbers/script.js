function clic() {
  var firstNumber = document.querySelector('.n1');
  var secondNumber = document.querySelector('.n2');
  var first = Number(firstNumber.value);
  var second = Number(secondNumber.value);

  if (first > second) {
    alert('First greater than first');
  } else if (second > first) {
    alert('Second greater than first');
  } else if (first === second) {
    alert('Equal numbers');
  }
}
