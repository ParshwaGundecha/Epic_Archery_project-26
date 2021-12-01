class Board
{
constructor(x,y,w,h){
 var options={
   isStatic:true  
 };

 this.body=Bodies.rectangle(x,y,w,h,options);
 this.w=w;
 this.h=h;

 this.image=loadImage("./assets/board.png");
 World.add(world,this.body);
}

display(){
 push();
 image(this.image,this.body.position.x,this.body.position.y,this.w,this.h);
 pop();
 }
}
