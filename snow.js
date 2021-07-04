class Snowfall{ constructor(x,y,w,h)}
{ var options = { restitution:0.8 } 
                friction:1.0
               density:1.0 
}
{
this.body = Bodies.rectangle(x,y,w,h,options) 
this.w=w.h=h 
this.image=loadImage("snow4.webp") 
World.add(world,this.body)
}
{
display()
var pos=this.body.position 
push()
var angle=this.body.angle 
translate(pos.x,pos.y) 
rotate(angle) 
translate(pos.x,pos.y)
rotate(angle) 
imageMode(CENTER) 
image(this.image,0,0,this.w,this.h)  
pop()
}