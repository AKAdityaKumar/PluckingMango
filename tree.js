class Tree{
    constructor(x,y,width,height){
    var options={
    isStatic: true,
    restitution:0,
    friction:0  
        }
    this.x=x 
    this.y=y
    this.width=width
    this.height=height
    this.image=loadImage("Plucking+mangoes/tree.png")
    this.body=Bodies.rectangle(x,y,width,height,options);
    World.add(world, this.body);
    }
}