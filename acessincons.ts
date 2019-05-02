class Point{
  
 constructor(private x?:number,private y?:number)//if we prefix a constructor parameter with access
 //modifier ts compiler will generate a field with exact same name and also
 //will initialise that field with value of arguement
 {
 
 }
 draw(){
     console.log('x is'+this.x + 'y is' +this.y)
 }
 }
 let point:Point=new Point(1,2);
 
 point.draw();