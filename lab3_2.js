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

function f2()
{
var a = parseFloat($('tx11').value);
var b = parseFloat($('tx22').value);
var c = parseFloat($('tx33').value);
min=a;
if (min > b)
min=b;
if (min > c)
min=c;
$('tx9').value=min;
}
