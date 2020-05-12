class menu extends object{ 
    constructor(){
        super();
        this.h=30;
        this.w=100;
        this.x=700;
        this.y=20;
    }

    draw(){
        noStroke()
        
        // console.log(this.x,clickedX)

        if (dist(clickedX, clickedY, this.x,this.y) < this.h/2) {
 
            fill(255, 0, 0);
            console.log("Yes")
            NEWCLICKED=1;
        }else{
            fill(123,63,81)
            NEWCLICKED=-1;
        }

        
        circle(this.x,this.y,this.h)
    }
}