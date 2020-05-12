class path{
    constructor(c1,c2,type,id){

        this.id=id;
        this.type=type;
        this.c1=c1;
        this.c2=c2;
        this.draw();
        
    }

    draw(){
        noFill()
        stroke(0, 102, 153);
        strokeWeight(2);
        let y1=this.c1.nodeLowerY+NODE/2;
        let y2=this.c2.nodeUpperY+4
        
        if(this.type==1 ||this.type==5 ){
            let x1=this.c1.nodeX1+NODE/2;
            let x2=this.c2.nodeX1+NODE/2;

            stroke(255, 204, 0)

            bezier(x1, y1, x1, (y1+y2)/2, x2, (y1+y2)/2, x2, y2);
            fill(255, 204, 0)
            circle(x1, y1, NODE);
            circle(x2, y2, NODE);
        }else if(this.type==2 ||this.type==6){
            let x1=this.c1.nodeX2+NODE/2;
            let x2=this.c2.nodeX2+NODE/2;

            stroke('red')

            bezier(x1, y1, x1, (y1+y2)/2, x2, (y1+y2)/2, x2, y2);
            fill('red');
            circle(x1, y1, NODE);
            circle(x2, y2, NODE);
        }else if(this.type==3 ||this.type==7){
            let x1=this.c1.nodeX3+NODE/2;
            let x2=this.c2.nodeX3+NODE/2;

            stroke('rgb(0,255,0)')

            bezier(x1, y1, x1, (y1+y2)/2, x2, (y1+y2)/2, x2, y2);
            fill('rgb(0,255,0)');
            circle(x1, y1, NODE);
            circle(x2, y2, NODE);
        }else if(this.type==4 ||this.type==8){
            let x1=this.c1.nodeX4+NODE/2;
            let x2=this.c2.nodeX4+NODE/2;

            stroke(color(0, 0, 255))

            bezier(x1, y1, x1, (y1+y2)/2, x2, (y1+y2)/2, x2, y2);
            fill(color(0, 0, 255));
            circle(x1, y1, NODE);
            circle(x2, y2, NODE);
        }
    }

    
    
}