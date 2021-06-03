class Mango{
    constructor(x,y,r){

        var options = {
            isStatic:true,
            restitution:0,
            friction:1
        }

        this.image = loadImage("mango.png");
        this.mango = Bodies.circle(x,y,r,options);
        World.add(world,this.mango);

        this.x = x;
        this.y = y;
        this.r = r;
        
    }

    display(){
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.r,this.r);
    }
}