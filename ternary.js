function sum1()
{ var num1 = parseInt(document.getElementById('value1').value);
  var num2 = parseInt(document.getElementById('value2').value);	
  var sum = num1+num2;
  document.write(sum);
}
function sub1()
{ var num1 = parseInt(document.getElementById('value1').value);
  var num2 = parseInt(document.getElementById('value2').value);	
  var sub = num1-num2;
  document.write(sub);
}
function mul1()
{ var num1 = parseInt(document.getElementById('value1').value);
  var num2 = parseInt(document.getElementById('value2').value);	
  var mul = num1*num2;
  document.write(mul);
}
function div1()
{ var num1 = parseInt(document.getElementById('value1').value);
  var num2 = parseInt(document.getElementById('value2').value);
  if(num2!=0)	
  {var div = num1/num2;
  document.write(div);}
  else{
  document.write("value2 must not be 0");	
  }
}