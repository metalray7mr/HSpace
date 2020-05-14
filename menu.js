class menu { 
    constructor(){
        this.h=30;
        this.w=100;
        this.x=CartisianWidth-20;
        this.y=20;
        this.hover=false;
        this.selected=false;
    }

    updateState(){
        if (dist(mouseX, mouseY, this.x,this.y) < this.h/2) {
            fill(170);
            this.hover=true;
        }else{
            fill(150)
            this.hover=false;
        }

        if (dist(clickedX, clickedY, this.x,this.y) < this.h/2) {
            this.selected=true;

        }else{
            this.selected=false;
        }

        
    }
    draw(){
        this.updateState();
        noStroke()
        
        // console.log(this.x,clickedX)

        

        circle(this.x,this.y,this.h)
        fill(255)
        rect(this.x-2, this.y-7,4, 14);
        rect(this.x-7, this.y-2,14, 4);

        fill(0)
        this.hover?text("Click and Drag",this.x-100,this.y+5):"";
        
    }
}