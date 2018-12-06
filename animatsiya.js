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

var t;
var r1= 0;
var g1= 255;
var b1= 0;
function f()
{	
var x1 = document.getElementById('b1');

x1.style.left=(parseInt(x1.style.left)-30)+'px';
x1.style.down=(parseInt(x1.style.top)+50)+'px';
if(parseInt(x1.style.left) <=0)
{

} 
g1 = g1-6;
color ='rgb('+r1+', '+g1+', '+b1+')';
x1.style.backgroundColor= color;
}

function r()
{
var x = document.getElementById('b1');
x.style.left = "1000px";
t = setInterval('f()',100);
}
function s()
{
clearInterval(t);
}
