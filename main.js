


function setup() {
    
    var cnv=createCanvas(CartisianWidth, CartisianHeight);
    cnv.parent('canvas-wrapper');
    background(220);
    g= new grid();

    // g.addPath(g.cards[1],g.cards[2],4)
    // g.addPath(g.cards[1],g.cards[3],3)

    
}

function draw() {
    background(220);

    g.drawCards();
    g.drawPaths();

    g.drawMenu()
    if(tp){
        g.tempPath(clickedX,clickedY,mouseX,mouseY,selectedNode)
    }

    // console.log(SELECTEDOBJECT,RELEASEDOBJECT,selectedNode);
    if(selectedNode!=-1 && RELEASEDOBJECT!=-1 && SELECTEDOBJECT!=-1 && SELECTEDOBJECT!=RELEASEDOBJECT){
        console.log("yes");
        g.addPath(g.cards[SELECTEDOBJECT],g.cards[RELEASEDOBJECT],selectedNode);
        ReleasedX=0;
        ReleasedY=0;
    }
    

    HOVEROBJECT=-1;
    RELEASEDOBJECT=-1;
    selectedNode=-1;
}

function mouseDragged() {
    cursor('grab');
    g.updateCardPosition();
    dragX=(mouseX-clickedX);
    dragY=(mouseY-clickedY);
}

function mousePressed() {
    clickedX=mouseX;
    clickedY=mouseY;
   
}


function mouseReleased() {
    cursor(ARROW);
    
    ReleasedX=mouseX;
    ReleasedY=mouseY;
    tp=false;
    //SELECTEDOBJECT=-1;
    
    if( !(ReleasedX<CartisianWidth && ReleasedX>0 && ReleasedY>0 && ReleasedY<CartisianHeight)){
        if(SELECTEDOBJECT!==-1)
        updateCardInfo();
    }else if(SELECTEDOBJECT!==-1){
        renderProperties();
    }else if((ReleasedX<CartisianWidth && ReleasedX>0 && ReleasedY>0 && ReleasedY<CartisianHeight)){
        SELECTEDOBJECT=-1
    }



    //add new card

    if(NEWCLICKED===1){
        g.addCard(ReleasedX,ReleasedY);
    }
    selectedNode=-1;
    
}

function renderProperties(){
    let el=document.getElementById("title");
    el.value=g.cards[SELECTEDOBJECT].title;
}

function updateCardInfo(){
    document.getElementById("savebtn").onclick=()=>{
        let el=document.getElementById("title");
        g.cards[SELECTEDOBJECT].title=el.value;
    }
}
