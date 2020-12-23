class Block {
    constructor(x, y, width, height){
      var options ={
        //isStatic: true,
        restitution: 0.4,
        friction: 0
      }
      
      this.Visibility = 255;
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
      World.add(world,this.body);
    }

    display(){
      
      if(this.body.speed < 3){
        var angle = this.body.angle;
        var pos = this.body.position;
        
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }
      else{
        World.remove(world,this.body);
        push();
        this.Visibility = this.Visibility - 5;
        tint(255,this.Visiblity);
        pop();
      }
    }

    score(){
      if(this.Visibility < 0 && this.Visibility > -105){
        score++;
      }
  }
  };
  