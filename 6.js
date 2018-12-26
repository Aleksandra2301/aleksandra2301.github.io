function Complex(x,y)
{
this.x=x;
this.y=y;
this.real=_Complexreal;
this.image=_Compleximage;
this.toString=_ComplextoString;
this.conj=_Complexconj;
this.norm=_Complexnorm;
this.add(c)=_Complexadd(c);
}
function _Complexreal()
{
return (this.x)?this.x:0;
}
function _Compleximage()
{
return (this.y)?this.y:0;
}
function _ComplextoString()
{
str=(this.image()<0)?"":"+"
return this.real()+str+this.image()+'i';
}
var x1=new Complex(2);
var x2=new Complex();
var x3=new Complex(0,-5);
var x4=new Complex(-2,-5);
document.write(x1+'<br>'+x2+'<br>'+x3+'<br>'+x4+'<br>');