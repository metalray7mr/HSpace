class grid{
    constructor(){
        this.cards=[];
        this.path=[];
        this.menu=new menu();
    }

    addCard(x,y,title){
        var c= new card(x,y,this.cards.length,title);
        this.cards.push(c);
    }

    addPath(c1,c2,type){
        var p= new path(c1,c2,type,this.path.length);
        this.path.push(p);
    }

    drawCards(){
        for(let i=0;i<this.cards.length;i++){
            this.cards[i].draw();
        }
    }

    drawPaths(){
        for(let i=0;i<this.path.length;i++){
            this.path[i].draw();
        }
    }

    drawMenu(){
        this.menu.draw();
    }

    updateCardPosition(){
        
        
        for(let i=0;i<this.cards.length;i++){
            let c=this.cards[i];
            if(c.nodeX1<clickedX && (c.nodeX1+NODE)>clickedX && c.nodeLowerY<clickedY && (c.nodeLowerY+NODE)>clickedY ){
                tp=true;
                selectedNode=1;
                

            }else if(c.nodeX2<clickedX && (c.nodeX2+NODE)>clickedX && c.nodeLowerY<clickedY && (c.nodeLowerY+NODE)>clickedY ){
                tp=true;
                selectedNode=2;
                

            }else if(c.nodeX3<clickedX && (c.nodeX3+NODE)>clickedX && c.nodeLowerY<clickedY && (c.nodeLowerY+NODE)>clickedY ){
                tp=true;
                selectedNode=3;
                

            }else if(c.nodeX4<clickedX && (c.nodeX4+NODE)>clickedX && c.nodeLowerY<clickedY && (c.nodeLowerY+NODE)>clickedY ){
                tp=true;
                selectedNode=4;
                

            }else if(c.nodeX1<clickedX && (c.nodeX1+NODE)>clickedX && c.nodeUpperY<clickedY && (c.nodeUpperY+NODE)>clickedY ){
                tp=true;
                selectedNode=5;
                

            }else if(c.nodeX2<clickedX && (c.nodeX2+NODE)>clickedX && c.nodeUpperY<clickedY && (c.nodeUpperY+NODE)>clickedY ){
                tp=true;
                selectedNode=6;
                

            }else if(c.nodeX3<clickedX && (c.nodeX3+NODE)>clickedX && c.nodeUpperY<clickedY && (c.nodeUpperY+NODE)>clickedY ){
                tp=true;
                selectedNode=7;
                

            }else if(c.nodeX4<clickedX && (c.nodeX4+NODE)>clickedX && c.nodeUpperY<clickedY && (c.nodeUpperY+NODE)>clickedY ){
                tp=true;
                selectedNode=8;
                

            }else{
                this.cards[i].changeXY();

            }

        }
    }
    
    tempPath(x1,y1,x2,y2,type){
        noFill()
        stroke(0, 102, 153);
        strokeWeight(2);
        
        
        if(type==1 || type==5){
            stroke(255, 204, 0)
            bezier(x1, y1, x1, (y1+y2)/2, x2, (y1+y2)/2, x2, y2);
            fill(255, 204, 0)
            circle(x1, y1, NODE);
            circle(x2, y2, NODE);
        }else if(type==2 || type==6){
            stroke('red')
            bezier(x1, y1, x1, (y1+y2)/2, x2, (y1+y2)/2, x2, y2);
            fill('red');
            circle(x1, y1, NODE);
            circle(x2, y2, NODE);
        }else if(type==3 || type==7){
            stroke('rgb(0,255,0)')
            bezier(x1, y1, x1, (y1+y2)/2, x2, (y1+y2)/2, x2, y2);
            fill('rgb(0,255,0)');
            circle(x1, y1, NODE);
            circle(x2, y2, NODE);
        }else if(type==4 || type==8){
            stroke(color(0, 0, 255))
            bezier(x1, y1, x1, (y1+y2)/2, x2, (y1+y2)/2, x2, y2);
            fill(color(0, 0, 255));
            circle(x1, y1, NODE);
            circle(x2, y2, NODE);
        }
    }
    
}