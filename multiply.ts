class Demo{
    x:number;
    y:number;
    multiply(x,y)
{
  
   
    this.x=x*2
    console.log('value of x is'+x);
   
    this.y=y*2
    console.log('value of y is'+y);
console.log('x is'+this.x + 'y is'+this.y)
}
}
let point:Demo=new Demo();
point.multiply(4,5);
