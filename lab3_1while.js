﻿function $()
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
A=parseFloat($('tx1').value);
B=parseFloat($('tx2').value);



}
$('tx4').value=;
}