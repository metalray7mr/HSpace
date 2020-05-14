class card{
    constructor(x,y,id,title="",src="001"){
        //info feature
        this.id=id;
        this.title=title;

        //greometry feature
        this.fixedX=x;
        this.fixedY=y;
        this.x=x;
        this.y=y;
        this.w=CARDWIDTH;
        this.h=CARDHEIGHT;
        this.node=NODE;
        this.nodeX1=this.x+(this.w/5)-this.node/2;
        this.nodeX2=this.x+(this.w/5)*2-this.node/2;
        this.nodeX3=this.x+(this.w/5)*3-this.node/2;
        this.nodeX4=this.x+(this.w/5)*4-this.node/2;
        this.nodeLowerY=this.y+this.h;
        this.nodeUpperY=this.y-this.node;
        this.src=src;
        this.img=loadImage('./avtar/small/'+src+'.jpg');
        this.draw();
    }


    draw(){

        fill('rgba(0,255,0, 0.25)');
        strokeWeight(1);
        if(((this.x+this.w)> mouseX) && (this.x< mouseX) && ((this.y+this.h)> mouseY) && (this.y< mouseY) )
        {
            stroke(255);
            HOVEROBJECT=this.id;

        }else{
            stroke(156, 39, 176);

        }



        if(((this.x+this.w)> clickedX) && (this.x< clickedX) && ((this.y+this.h)> clickedY) && (this.y< clickedY) ){
            SELECTEDOBJECT=this.id;
        }

        if(((this.x+this.w)> ReleasedX) && (this.x< ReleasedX) && ((this.y+this.h)> ReleasedY) && (this.y< ReleasedY) ){
            //SELECTEDOBJECT=this.id;
            RELEASEDOBJECT=this.id;
        }

        if(SELECTEDOBJECT==this.id){
            stroke(156, 139, 236);
        }

        

        //let img=createImg('http://www.petwebsite.com/hamsters/hamsters_images/syrian-hamster_000008437184.jpg','0');
        //let img = loadImage('http://www.petwebsite.com/hamsters/hamsters_images/syrian-hamster_000008437184.jpg');
        //img.crossOrigin = "";

        // let circleMask = createGraphics(28, 28);
        // circleMask.circle(14, 14, 28);
        // this.img.mask(circleMask);
        fill(200)
        rect(this.x, this.y, this.w, this.h);
        image(this.img, this.x+70, this.y,30,30);

        fill(20);
        noStroke();
        text(this.title, this.x+5, this.y+5, 70, 80); 
        text(this.id, this.x+5, this.y+20, 70, 80);        


       
        let c=this;
        if(c.nodeX1<mouseX && (c.nodeX1+this.node)>mouseX && c.nodeLowerY<mouseY && (c.nodeLowerY+this.node)>mouseY ){
            stroke(156, 39, 176);
            fill(255, 204, 0)
            rect(this.nodeX1, this.nodeLowerY , this.node, this.node)
        }else if(c.nodeX2<mouseX && (c.nodeX2+this.node)>mouseX && c.nodeLowerY<mouseY && (c.nodeLowerY+this.node)>mouseY ){
            stroke(156, 39, 176);
            fill('red');
            rect(this.nodeX2, this.nodeLowerY , this.node, this.node)
        }else if(c.nodeX3<mouseX && (c.nodeX3+this.node)>mouseX && c.nodeLowerY<mouseY && (c.nodeLowerY+this.node)>mouseY ){
            stroke(156, 39, 176);
            fill('rgb(0,255,0)');
            rect(this.nodeX3, this.nodeLowerY , this.node, this.node)
        }else if(c.nodeX4<mouseX && (c.nodeX4+this.node)>mouseX && c.nodeLowerY<mouseY && (c.nodeLowerY+this.node)>mouseY ){
            stroke(156, 39, 176);
            fill(color(0, 0, 255));
            rect(this.nodeX4, this.nodeLowerY , this.node, this.node)
        }else if(c.nodeX1<mouseX && (c.nodeX1+this.node)>mouseX && c.nodeUpperY<mouseY && (c.nodeUpperY+this.node)>mouseY ){
            stroke(156, 39, 176);
            fill(255, 204, 0)
            rect(this.nodeX1, this.nodeUpperY , this.node, this.node)
        }else if(c.nodeX2<mouseX && (c.nodeX2+this.node)>mouseX && c.nodeUpperY<mouseY && (c.nodeUpperY+this.node)>mouseY ){
            stroke(156, 39, 176);
            fill('red');
            rect(this.nodeX2, this.nodeUpperY , this.node, this.node)
        }else if(c.nodeX3<mouseX && (c.nodeX3+this.node)>mouseX && c.nodeUpperY<mouseY && (c.nodeUpperY+this.node)>mouseY ){
            stroke(156, 39, 176);
            fill('rgb(0,255,0)');
            rect(this.nodeX3, this.nodeUpperY , this.node, this.node)
        }else if(c.nodeX4<mouseX && (c.nodeX4+this.node)>mouseX && c.nodeUpperY<mouseY && (c.nodeUpperY+this.node)>mouseY ){
            stroke(156, 39, 176);
            fill(color(0, 0, 255));
            rect(this.nodeX4, this.nodeUpperY , this.node, this.node)
        }


        if(c.nodeX1<clickedX && (c.nodeX1+this.node)>clickedX && c.nodeLowerY<clickedY && (c.nodeLowerY+this.node)>clickedY ){
            SELECTEDOBJECT=c.id;
            
            selectedNode=1;
            stroke(156, 49, 176);
            fill(255, 204, 0)
            rect(this.nodeX1, this.nodeLowerY , this.node, this.node)
        }else if(c.nodeX2<clickedX && (c.nodeX2+this.node)>clickedX && c.nodeLowerY<clickedY && (c.nodeLowerY+this.node)>clickedY ){
            SELECTEDOBJECT=c.id;
            
            selectedNode=2;
            stroke(156, 49, 176);
            fill('red');
            rect(this.nodeX2, this.nodeLowerY , this.node, this.node)
        }else if(c.nodeX3<clickedX && (c.nodeX3+this.node)>clickedX && c.nodeLowerY<clickedY && (c.nodeLowerY+this.node)>clickedY ){
            SELECTEDOBJECT=c.id;
            
            selectedNode=3;
            stroke(156, 49, 176);
            fill('rgb(0,255,0)');
            rect(this.nodeX3, this.nodeLowerY , this.node, this.node)
        }else if(c.nodeX4<clickedX && (c.nodeX4+this.node)>clickedX && c.nodeLowerY<clickedY && (c.nodeLowerY+this.node)>clickedY ){
            SELECTEDOBJECT=c.id;
            
            selectedNode=4;
            stroke(156, 49, 176);
            fill(color(0, 0, 255));
            rect(this.nodeX4, this.nodeLowerY , this.node, this.node)
        }else if(c.nodeX1<clickedX && (c.nodeX1+this.node)>clickedX && c.nodeUpperY<clickedY && (c.nodeUpperY+this.node)>clickedY ){
            SELECTEDOBJECT=c.id;
            
            selectedNode=5;
            stroke(156, 49, 176);
            fill(255, 204, 0)
            rect(this.nodeX1, this.nodeUpperY , this.node, this.node)
        }else if(c.nodeX2<clickedX && (c.nodeX2+this.node)>clickedX && c.nodeUpperY<clickedY && (c.nodeUpperY+this.node)>clickedY ){
            SELECTEDOBJECT=c.id;
            
            selectedNode=6;
            stroke(156, 49, 176);
            fill('red');
            rect(this.nodeX2, this.nodeUpperY , this.node, this.node)
        }else if(c.nodeX3<clickedX && (c.nodeX3+this.node)>clickedX && c.nodeUpperY<clickedY && (c.nodeUpperY+this.node)>clickedY ){
            SELECTEDOBJECT=c.id;
            
            selectedNode=7;
            stroke(156, 49, 176);
            fill('rgb(0,255,0)');
            rect(this.nodeX3, this.nodeUpperY , this.node, this.node)
        }else if(c.nodeX4<clickedX && (c.nodeX4+this.node)>clickedX && c.nodeUpperY<clickedY && (c.nodeUpperY+this.node)>clickedY ){
            SELECTEDOBJECT=c.id;
            
            selectedNode=8;
            stroke(156, 49, 176);
            fill(color(0, 0, 255));
            rect(this.nodeX4, this.nodeUpperY , this.node, this.node)
        }



        noStroke();
        //lower nodes
       fill(255, 204, 0)
       rect(this.nodeX1, this.nodeLowerY , this.node, this.node)
       
       fill('red');
       rect(this.nodeX2, this.nodeLowerY , this.node, this.node)
       
       fill('rgb(0,255,0)');
       rect(this.nodeX3, this.nodeLowerY , this.node, this.node)
       
       fill(color(0, 0, 255));
       rect(this.nodeX4, this.nodeLowerY , this.node, this.node)

       //upper nodes
       fill(255, 204, 0)
       rect(this.nodeX1, this.nodeUpperY , this.node, this.node)
       
       fill('red');
       rect(this.nodeX2, this.nodeUpperY , this.node, this.node)
       
       fill('rgb(0,255,0)');
       rect(this.nodeX3, this.nodeUpperY , this.node, this.node)
       
       fill(color(0, 0, 255));
       rect(this.nodeX4, this.nodeUpperY , this.node, this.node)
        
        
    }

    changeXY(){
        if(SELECTEDOBJECT==this.id){
        if(((this.x+this.w)> mouseX) && (this.x< mouseX) && ((this.y+this.h)> mouseY) && (this.y< mouseY) )
        {
            this.x = mouseX - this.w/2 ;
            this.y = mouseY - this.h/2 ;
                
            this.nodeX1=this.x+(this.w/5)-this.node/2;
            this.nodeX2=this.x+(this.w/5)*2-this.node/2;
            this.nodeX3=this.x+(this.w/5)*3-this.node/2;
            this.nodeX4=this.x+(this.w/5)*4-this.node/2;
            this.nodeLowerY=this.y+this.h;
            this.nodeUpperY=this.y-this.node;
            this.draw();
        }
        }else if(HOVEROBJECT==-1){
            
            //  this.x = this.fixedX +dragX ;
            //  this.y = this.fixedY +dragY;

            // this.nodeX1=this.fixedX+(this.w/5)-this.node/2 +dragX;
            // this.nodeX2=this.fixedX+(this.w/5)*2-this.node/2 +dragX;
            // this.nodeX3=this.fixedX+(this.w/5)*3-this.node/2 +dragX;
            // this.nodeX4=this.fixedX+(this.w/5)*4-this.node/2 +dragX;
            // this.nodeLowerY=this.fixedY+this.h +dragY;
            // this.nodeUpperY=this.fixedY-this.node +dragY;
            // this.draw();

        }
    }
    
}

