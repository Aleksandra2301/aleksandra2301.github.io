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
var a=parseFloat($('tx1').value);
if(a>0)
{x1=a+1;}
else
{
if(a<0)
{x1=a;}
}
$('tx2').value=x1;}