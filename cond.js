function and()
{
  var id1 = parseInt(document.getElementById('value1').value);
  var id2 = parseInt(document.getElementById('value2').value);
  if ((id1==0 || id1 ==1) && (id2 ==0 || id2==1))
  {
  	if (id1==1 && id2==1)
  		alert("1");
  	else
  		alert("0");
  }
  else
  	document.write ("please give a binary input");
}
function or()
{
  var id1 = parseInt(document.getElementById('value1').value);
  var id2 = parseInt(document.getElementById('value2').value);
  if ((id1==0 || id1 ==1) && (id2 ==0 || id2==1))
  {
  	if (id1==0 && id2==0)
  		alert("0");
  	else
  		alert("1");
  }
  else
  	document.write ("please give a binary input");
}

