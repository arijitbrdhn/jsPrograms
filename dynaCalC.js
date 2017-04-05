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
 arr = ["'1'","'2'","'3'","'+'","'4'","'5'","'6'","'-'","'7'","'8'","'9'","'*'","'C'","'0'","'='","'/'"];
 p = 0;
 for (var i=0;i<4;i++){
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
{   if (display.value=="" && (num =='+'||num =='-'||num =='*'||num =='/'||num =='C'||num =='0'||num =='='))
    display.value="";
	else if(num=='=')
   display.value = eval(display.value);
   else if(num=='C')
   	display.value ="";
   else
	display.value = display.value+num ;
 }
