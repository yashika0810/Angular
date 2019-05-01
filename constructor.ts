class Point{
    x:number;
    y:number;

    constructor( x?:number , y?:number)// this ? makes x optional(makes parameter optional)
    {
       this.x=x;
       this.y=y;
    }
    draw(){
    console.log('x is' + this.x + 'y is' +this.y);
}
}
let point=new Point();//here comes error bcz we have to supply values for x and y
point.draw();
//in typescrip we cant have multiple constructors
