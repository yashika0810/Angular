class Point{
    x:number;
    y:number;//fields for storing data
    draw(x,y)
{
    this.x=x+1;
    this.y=y+1;
    console.log('x is:'+this.x + 'y is'+this.y);
}
    getdistance(another: Point){

    }
}
let point: Point=new Point();

point.draw(2,3); 
