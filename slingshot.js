class Slingshot{
    constructor(a,b){
        var op={
            bodyA:a,
            bodyB:b,
            stiffness:0.4,
            length:5
        }
        
        this.slingshot=Constraint.create(op)
        World.add(world,this.slingshot)
    }
    display(){
        var posA=this.slingshot.bodyA.position
        var posB=this.slingshot.bodyB.position 
        push() 
        strokeWeight(5)
        line(posA.x,posA.y,posB.x,posB.y)
        pop()
    }
} 