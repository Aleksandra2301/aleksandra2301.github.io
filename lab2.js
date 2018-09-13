function $() 
{ var elements = new Array(); 
for (var i = 0; i < arguments.length; i++) 
{ var element = arguments[i]; 
if (typeof element == 'string') 
element = document.getElementById(element); 
if (arguments.length == 1) 
return element; 
elements.push(element); 
} 
return elements; } 


function f1()
{
$('x1').style.color='red';
}
function f2()
{
$('x1').style.color='green';
}
function f3()
{
$('x1').style.color='blue';
}
function f4()
{
$('x1').style.color='yellow';
}
function f5()
{
$('tx1').value="Привет,Мир!";
alert("Привет,Мир!");
}