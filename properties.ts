class Point{
  
    constructor(private x?:number,private y?:number)
    {
    
    }
    draw(){
        console.log('x is'+this.x + 'y is' +this.y)
    }
    get X()//after function name set a property//
    //we can use these properties as fields
    {
        return this.x;
    }
    get Y()
    {
        return this.y;
    }
    set X(value){
        if (value<5)
        throw new Error('value cannot be less than zero');

        this.x=value;

    }
    set Y(value){
        if (value>5)
        throw new Error('error');

        this.y=value*6;
    }

    }
    let point:Point=new Point();
    let x= point.X;//here the methods will be used as fields//can be read like this
    point.X=7;//we can set the value like this
    point.Y=3;
    point.draw(); 