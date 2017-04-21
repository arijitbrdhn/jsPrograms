var idt;
var final = [] ;
var newArr = []; 
var resetArr = [] ;
var insert = 0 ;
function sudoku9()
{ 
 
 var mybody = document.getElementsByTagName("body")[0];
 mybody.style.background = "#ADD8E6";
 var div = document.createElement("div");
 div.align = 'center';
 var arr = [];
 var mask = [];
 var btnArr = ["'1'","'2'","'3'","'4'","'5'","'6'","'7'","'8'","'9'"];
 var p = 0; 
 var start = 0;
 for (var k = 0; k < 9;k++){
     
      arr[k] = [];
      final[k] = [];

   for (var m = 0; m < 9;m++){
     
      arr [k][m] = (k*3 + Math.floor(k/3) + m) % 9 + 1;
      final [k][m] = [];

     }
}
  
  //fisherYates(arr);

 
   for (var k = 0; k < 9;k++){
      newArr[k] = [];
   for (var m = 0; m < 9;m++){
        newArr [k][m] = arr [k][m];
     }
}
//console.log(newArr);
var arrNew = []
while(arrNew.length < 38){
    var randomnumber = Math.floor(Math.random()*9)
   //console.log(randomnumber);
    if(arrNew.indexOf(randomnumber) > -1) continue;
    arrNew[arrNew.length] = randomnumber;
}
   arrNew.sort(function(a, b){return a - b});

  //console.log(arrNew);
  //console.log(newArr);



  var count = 0;
  for (var i=0;i<9;i++){
  var row = document.createElement("div");
  row.style.width = "42px";
  row.style.height = "378px";
  for (var j=0;j<1;j++){
   var col = document.createElement("div");
   //col.setAttribute("type","text");
   //col.style.visibility = "hidden";
  col.style.cssFloat = "left";
  col.style.width = "378px";
  col.style.height = "42px";
  cell = document.createElement("input");
  cell.setAttribute("type","div");
  //cell.setAttribute("value", "");
  cell.setAttribute("id",count);
  //cell.disabled = true ;
  cell.setAttribute("onkeypress","reset(this.id)");

    if (cell.id == arrNew[start] )
    {
      cell.setAttribute("onclick","redirect()");
      cell.style.background = "grey";
      var content = arrNew[start];
      var rowVal = Math.floor(content%9);
      var colVal = content%9 ;
      cell.setAttribute("value",newArr[rowVal][colVal]);
       final[rowVal][colVal] = cell.value ; 
       start++ ;
  }

   else {

    resetArr[insert] = cell.id ;
    cell.style.background = "white";
    cell.setAttribute("onclick","get(this.id)");
    insert++ ; 
}
  //cell.setAttribute("type","text");
  //cell.setAttribute("value",mask[i][j]);
  cell.style.textAlign = "center";
  cell.style.width = "36px";
  cell.style.height = "36px";
  
  col.appendChild(cell);
  row.appendChild(col);
  count++ ;
}
  div.appendChild(row);

 } 
 





 for (var j=0;j<9;j++){
  var button = document.createElement("input");
  button.setAttribute("type","button");
  button.style.background = "#D8BFD8";
  button.style.width = "30px";
  button.style.height = "30px";
  button.style.margin  = "30px 0px 0px 10px";
  button.setAttribute("value",String.fromCharCode(btnArr[p].charCodeAt(1)));
  button.setAttribute("onclick", "disVal(this.value)");
  p++;
  div.appendChild(button);
} 



  var temp1=document.createElement("br");
  div.appendChild(temp1);
  var button2 = document.createElement("input");
  button2.setAttribute("type","button");
  button2.style.background = "#ff6961";
  button2.style.width = "60px";
  button2.style.height ="40px";
  button2.style.margin  = "30px 0px 0px 10px";
  button2.setAttribute("value","Submit");
  button2.setAttribute("onclick", "finalFun()");
  div.appendChild(button2);
  //console.log(final);
  //console.log(arrNew);

 var temp2=document.createElement("br");
  div.appendChild(temp2);
  var button3 = document.createElement("input");
  button3.setAttribute("type","button");
  button3.style.background = "#ff6961";
  button3.style.width = "60px";
  button3.style.height ="40px";
  button3.style.margin  = "30px 0px 0px 10px";
  button3.setAttribute("value","Reset");
  button3.setAttribute("onclick", "restart()");
  div.appendChild(button3);

  //console.log(newArr);

  mybody.appendChild(div);

 }

 function fisherYates ( myArray ) 
 {
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


function get(elem)
 {

  idt = elem ;
  
  }


function disVal(vall)
{  //console.log(idt) ;
   //console.log(vall);
   var rowVall = Math.floor(idt%9);
    var colVall = idt%9 ;

 var txtVal = document.getElementById(idt);
  txtVal.disabled = false ;
  txtVal.value = vall ;
//console.log(rowVal,colVal);
 final[rowVall][colVall] = vall ;

}
 

function finalFun(){
  var show = 0 ;
  for (var d=0; d<9;d++){
    for (var e=0; e<9;e++){

     if(final[d][e]==newArr[d][e])
      show++;
   
    }
   }
if(show==9)
  {
   alert ("Correct");
   location.reload();
  
   }
else
 {
   alert ("Wrong"); 
   location.reload();
  }
 
}


function reset(pass){
  var remover = pass ;
  var removed = document.getElementById(remover);
  removed.disabled = true ;
  }


function redirect()
 {

  idt = "";
  
  }



function restart()
{
  for(var sz=0;sz<43;sz++)
  {
    var idf = resetArr[sz];
    var newCell = document.getElementById(idf);
    newCell.value = ""; 

  }

}