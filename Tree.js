class Tree{
    constructor(){
        var options = {
            isStatic:true
        }
        this.body =Bodies.rectangle(555,230,225,400,options);
        this.image = loadImage("tree.png");
    }
    display(){
        image(this.image,555,230,225,400);
    }
}