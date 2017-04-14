flag = true ;
function calC()
{ if(flag == true){
 mybody = document.getElementsByTagName("body")[0];
 div = document.createElement("div");
 display = document.createElement("input");
 display.setAttribute("type","text");
 //display.setAttribute("name","txt");
 display.setAttribute("value","");
 div.appendChild(display);
 arr = ["'1'","'2'","'3'","'+'","'4'","'5'","'6'","'-'","'7'","'8'","'9'","'*'","'C'","'0'","'='","'/'","'<'","'%'","'.'","'D'"];
 p = 0;
 for (var i=0;i<5;i++){
  var row = document.createElement("div");
  for (var j=0;j<4;j++){
  col = document.createElement("div");
  col.style.cssFloat = "left";
  cell = document.createElement("input");
  cell.setAttribute("type","button");
  cell.setAttribute("value",String.fromCharCode(arr[p].charCodeAt(1)));
  cell.setAttribute("onclick",'disBtn('+arr[p]+')');
  p++;
  col.appendChild(cell);
  row.appendChild(col);
}
  col.style.cssFloat = "initial";
  div.appendChild(row);
} 
 
/*div.style.width = "100px";
div.style.height = "100px";
div.style.background = "red";
div.style.color = "white";
div.innerHTML = "Hello";*/
mybody.appendChild(div);
}
flag = false;
}
function disBtn(num)
{  var last = display.value.substr(display.value.length-1,1);
 if (display.value=="" && (num =='+'||num =='-'||num =='*'||num =='/'||num =='C'||num =='0'||num =='='))
    display.value="";
	else if(num=='=')
   display.value = eval(display.value);
   else if(num=='C')
   	display.value ="";
   else if(num == '<')
   	display.value = display.value.substr(0, display.value.length - 1);
   else if(num == 'D')
   	display.value = display.value.substr(1,display.value.length);
  else if ((last =='+'||last =='-'||last =='*'||last =='/') && (num =='+'||num =='-'||num =='*'||num =='/') )
   display.value = display.value ;
   else
	display.value = display.value+num ;
 }
