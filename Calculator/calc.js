
var addButton = document.getElementsByClassName("number");
addButton.addEventListener("click",showNumber);


function showNumber()
{
    var number = document.getElementsByClassName("number").value;
    console.log(number);
}