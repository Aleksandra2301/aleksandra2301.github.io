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
N=parseInt($('tx11').value);
A0=2;
$('tx44').value='A0='+A0+'; ';
AP=2;
for( k = 1; k <= N; k++)
{
AN=A0+1/AP;

$('tx44').value=$('tx44').value+'A'+k+'='+AN+'; ';
AP=AN
}
}

