function negativeOrPositive(){
  var num = parseFloat(document.getElementById("other").value);
  
  if (num > 0)
   alert(`${num} é positivo` );
  else
   if(num < 0)
    alert(`${num} é negativo`);
   else
    alert(`${num} é neutro`);
 }