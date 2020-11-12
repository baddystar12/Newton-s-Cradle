class Bob {
    constructor(x, y, radius){
        var bob_options = {
            friction : 0.5,
            density : 2,
            restitution: 1
        }
        this.radius = radius;
        this.body = Matter.Bodies.circle(x,y,this.radius/2, bob_options);
        World.add(world, this.body);
    }
    display(){
        var position = this.body.position;
        fill("royalblue");
        ellipseMode(RADIUS);
        ellipse(position.x, position.y, this.radius, this.radius);
    }
}
