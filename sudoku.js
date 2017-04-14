function sudo()
{ 
 var mybody = document.getElementsByTagName("body")[0];
 var div = document.createElement("div");
 div.align = 'center';
 var arr = [];
 var newArr = [];
 var mask = [];
 var btnArr = ["'1'","'2'","'3'"];
 var p = 0; 
 var idt;
 for (var k = 0; k < 3;k++){
      arr[k] = [];
   for (var m = 0; m < 3;m++){
        arr [k][m] = (k*1 + Math.floor(k/3) + m) % 3 + 1;
     }
}
  fisherYates(arr);
   for (var k = 0; k < 3;k++){
      newArr[k] = [];
   for (var m = 0; m < 3;m++){
        newArr [k][m] = arr [k][m];
     }
}
  console.log(arr);
  console.log(newArr);
  var count = 0;
 for (var i=0;i<3;i++){
  mask[i] = [];
  var row = document.createElement("div");
   row.style.width = "126px";
   row.style.height = "42px";
  for (var j=0;j<3;j++){
   var col = document.createElement("div");
   //col.setAttribute("type","text");
   //col.style.visibility = "hidden";
  col.style.cssFloat = "left";
  col.style.width = "42px";
  col.style.height = "42px";
  cell = document.createElement("input");
  cell.setAttribute("type","text");
  cell.setAttribute("value", "");
  cell.setAttribute("id",count);
  cell.setAttribute("onclick","get(this.id)");
  
  //cell.setAttribute("type","text");
  //cell.setAttribute("value",mask[i][j]);
  cell.style.textAlign = "center";
  cell.style.width = "36px";
  cell.style.height = "36px";
  cell.style.background = "grey";
  col.appendChild(cell);
  row.appendChild(col);
  count++ ;
}
  div.appendChild(row);

 } 
 
 for (var j=0;j<3;j++){
  var button = document.createElement("input");
  button.setAttribute("type","button");
  button.setAttribute("value",String.fromCharCode(btnArr[p].charCodeAt(1)));
  button.setAttribute("onclick", "disVal(this.value)");
  p++;
  div.appendChild(button);
} 

mybody.appendChild(div);

}
function fisherYates ( myArray ) {
  var i = myArray.length;
  if ( i == 0 ) return false;
  while ( --i ) {
     var j = Math.floor( Math.random() * ( i + 1 ) );
     var tempi = myArray[i];
     var tempj = myArray[j];
     myArray[i] = tempj;
     myArray[j] = tempi;
   }
}

function get(elem){
  idt = elem ;
  ;
}

function disVal(vall)
{  console.log(idt) ;
   console.log(vall);
 var txtVal = document.getElementById(idt);
 txtVal.value = vall ;

}



























