class Rope {
    constructor(body1, body2){
        var rope_options ={
            bodyA: body1,
            bodyB : body2,
            length:200,
            stiffness: 0.01
        }
        this.rope = Constraint.create(rope_options);
        World.add(world, this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(5);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
