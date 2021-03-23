class Bird extends parent{
    constructor(x, y){
   super(x,y)
   this.image=loadImage("sprites/bird.png");
    };
    display(){
       this.body.position.x = mouseX;
       this.body.position.y = mouseY;
        super.display();
    }
  };

