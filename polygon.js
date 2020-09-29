class Polygon{
    constructor(x,y,radius){
        var options = {
           isStatic: false,
           restitution: 0.3,
           density: 3
       }

       this.polygon = Bodies.circle(x,y,radius);
       World.add(world,this.polygon);
    }

    display(){
       var pos = this.polygon.position;
       ellipseMode(RADIUS);
       fill("yellow")
       ellipse(pos.x,pos.y,radius,radius);
    }    
}