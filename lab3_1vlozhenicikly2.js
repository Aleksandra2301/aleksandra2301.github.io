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

function f11()
{
	A=parseFloat($('tx11').value);
	B=parseFloat($('tx22').value);
	result='';
	for(var i=A; i<=B; i++)
	{
		for(var j=1; j<= i; j++)
			result=result+i;
	}
	$('tx44').value=result;
}
