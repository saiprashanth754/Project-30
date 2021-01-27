class block {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.shade = 250;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;

      if(this.body.speed < 5) {
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
      }else{
        push()
        World.remove(world, this.body);
        this.shade = this.shade - 10;
        tint(255,this.shade);
        pop()
      }
    }
  };