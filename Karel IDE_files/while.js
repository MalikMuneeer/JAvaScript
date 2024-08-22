// var nam=prompt("What is your name:");
// var num=prompt("Enter A number you want to print:")
var a=1;


while(a<=10){
    document.write( a + ")My name is Muneer:<br>");

    a=a+1;
}
//  while(num=nam){
//      document.write( nam);

     
//  }
var result = prompt("Give number between 4-10"); 
    while (result<4||result>10||result==isNaN(result)) 
    {
        var result = prompt("You need to give number between 4-10!");
    }
  alert ("success")