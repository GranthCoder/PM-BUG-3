class Ground{
    constructor(){
        var options = {
            isStatic:true
        }
        this.body =Bodies.rectangle (400,725,800,100);
    }

    display(){
        rectMode(CENTER);
        fill(176, 206, 63);
        rect(400,675,800,125);
    }
}