let serialEle = document.getElementById("number");
let fnameEle = document.getElementById("fname");
let tamilEle = document.getElementById("tamil");
let englishEle = document.getElementById("english");
let mathsEle = document.getElementById("maths");
let scienceEle = document.getElementById("science");
let socialEle = document.getElementById("social");
let totalEle = document.getElementById("total");
let percentageEle = document.getElementById("percentage");
let addEle = document.getElementById("add");



addEle.addEventListener("click",function(){

    totalSub();
})



let totalSub = function(){

    if(serialEle!==""){
        let table = document.getElementById("table");
        let tablerow = document.getElementById("tablerow");


        let lengthEle = table.insertRow(table.length);

             let cell1 = lengthEle.insertCell(0);
             let cell2 = lengthEle.insertCell(1);
             let cell3 = lengthEle.insertCell(2);
             let cell4 = lengthEle.insertCell(3);
             let cell5 = lengthEle.insertCell(4);
             let cell6 = lengthEle.insertCell(5);
             let cell7 = lengthEle.insertCell(6);
             let cell8 = lengthEle.insertCell(7);
             let cell9 = lengthEle.insertCell(8);



             cell1.innerText = serialEle.value;
             cell2.innerText = fnameEle.value;
             cell3.innerText = tamilEle.value;
             cell4.innerText = englishEle.value;
             cell5.innerText = mathsEle.value;
             cell6.innerText = scienceEle.value;
             cell7.innerText = socialEle.value;
             

          
             let totalEle = parseInt(tamilEle.value)+parseInt(englishEle.value)+parseInt(mathsEle.value)+parseInt(scienceEle.value)+parseInt(socialEle.value);
             console.log(totalEle);
             
             cell8.innerText = totalEle;
             let easy = totalEle/5;
             cell9.innerText = easy;

            
             serialEle.value = "";
             fnameEle.value = "";
             tamilEle.value = "";
             englishEle.value = "";
             mathsEle.value = "";
             scienceEle.value = "";
             socialEle.value = "";
             totalEle.value = "";
             percentageEle.value = "";

            
   }

}


/*
function totalList(){
 

  let total = (totalMarks/5)*100
  cell9.innerText.value = total.value;
  total.value = "";
  /*
 tamilEle.value = cell1.innerText;
 englishEle.value = cell2.innerText;
 mathsEle.value = cell3.innerText;
 scienceEle.value = cell4.innerText;
  socialEle.value = cell5.innerText;

  
  

}


addEle.addEventListener("click",function(){

 totalList()
})

*/

