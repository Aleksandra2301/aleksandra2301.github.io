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

function f11()
{
$('p1').src="чирва.png";
}
function f22()
{
$('p1').src="бубна.png";
}
function f33()
{
$('p1').src="трефа.png";
}
function f44()
{
$('p1').src="пика.png";
}
function rr()
{
$('area1').value="Привет, Мир!!!";
}