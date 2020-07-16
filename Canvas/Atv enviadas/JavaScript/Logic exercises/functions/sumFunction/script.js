function sum() {
  var tn1 = window.document.getElementById('n1');
  var tn2 = window.document.querySelector('input#n2');
  var res = window.document.getElementById('res');
  var n1 = Number(tn1.value);
  var n2 = Number(tn2.value);
  var s = n1 + n2;

  res.innerHTML = `The sum between ${n1} and ${n2} is equal to <strong> ${s}</strong>`;
}