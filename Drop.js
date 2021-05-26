class Drop{
    constructor(x, y) {
        var options = {
            'friction': 0.1,
        }
        this.body = Bodies.circle(x, y, 5, options);
        this.r = 5;
        World.add(world, this.body);
      }
      update(){
          if(this.body.position.y > height){
              Matter.Body.setPosition(this.body, {x:random(0,400),y:random(0,400)})
          }
        }
      display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill("blue");
        ellipse(0, 0, this.r, this.r);
        pop();
      }
}