class Slingshot {
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            length : 7,
            stiffness : 0.01
        }

        this.sling = Constraint.create(options);
        this.pointB = pointB;
        World.add(world,this.sling)
    }

    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        var pointA = this.sling.bodyA.position
        var pointB = this.pointB;
        strokeWeight(3);
        stroke("red");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}