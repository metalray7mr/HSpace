const NODE=6;



CartisianWidth=document.getElementById("canvas-wrapper").clientWidth;
CartisianHeight=document.getElementById("canvas-wrapper").clientHeight;
dragX=0;
dragY=0;

var tp=false;
var tempCard=false;
selectedNode=-1;

SELECTEDOBJECT=-1;
HOVEROBJECT=-1;
SELECTEDOBJECTTYPE=-1;
RELEASEDOBJECT=-1;


CARDWIDTH=100;
CARDHEIGHT=70;

var g;
var a;
var b;

var clickedX=0;
var clickedY=0;

var ReleasedX=0;
var ReleasedY=0;