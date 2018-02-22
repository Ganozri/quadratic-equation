module.exports = function solveEquation(equation)
{
var aa="";
var bb="";
var cc="";
var d;
var x1=undefined;
var x2=undefined;

var damn = equation.split('*');
var a = damn[0];
aa = Number(a);

var b = damn[1];
b=b.split('');
b=b.splice(5,b.length-1);
b.pop();
for(var i = 0;i<b.length;i++)
{
if(i!=1)
	{
bb+=b[i];
	}
}
bb = Number(bb);

var c = damn[2];
c=c.split('');
if(c[3]!='-')
{
c=c.splice(4,c.length-1);
for(var i = 0;i<c.length;i++)
{
cc+=c[i];
}
cc = Number(cc);
}
if(c[3]=='-')
{
c=c.splice(4,c.length-1);
for(var i = 0;i<c.length;i++)
{
cc+=c[i];
}
cc = Number(cc);
cc = (-1)*cc;
}
d=bb*bb-4*aa*cc;
if(d>0)
{
	x2=Math.round(-(bb-Math.sqrt(d))/(2*aa));
  x1=Math.round(-(bb+Math.sqrt(d))/(2*aa));
}
if(d=0)
{

x2=bb/(2*aa);
x1=x1;
x1=Number(x1);
x2=Number(x2);
}

if(x1>x2)
{
	x1=Number(x1);
	x2=Number(x2);
var solutions=[x2,x1];
}
else
{
	x1=Number(x1);
	x2=Number(x2);
var solutions=[x1,x2];
}
return solutions;

}
