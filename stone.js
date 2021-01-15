class Stone {
    constructor(x,y,r) {
      var options = {
          isStatic: false,
          restitution:0,
          friction:1,
          density:1.2
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.x = x;
      this.y = y;
      this.r=r;
      this.image=loadImage("Plucking+mangoes/stone.png")
      this.body=Bodies.rectangle(x,y,r,options);
      World.add(world, this.body);
    }
  };

