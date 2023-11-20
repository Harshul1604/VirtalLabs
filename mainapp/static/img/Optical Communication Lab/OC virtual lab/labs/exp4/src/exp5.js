

var flag;
var vp;
var  posy2;
var phsl;
var frqfng;
var axes = {};
var vmaxs;  //in volt
var tmaxs;// in msec  0.001; //in sec

//----------------------------------------Channel 2------------------------------------------------------------//


function posiy2chnge() {
    posy2 = document.getElementById("positiony2").value;
    
    if (flag == 2) {
       drawhlfrectifier();
    }

   
}

function posix2chnge() {
    phsl = document.getElementById("positionx").value;
    if (flag == 1) {
        drawsine();
    }
    if (flag == 2) {
       drawhlfrectifier();
    }

   
}

function ampfng() {
    vp = document.getElementById("amp-knob-fng").value;
    if (flag == 1) {
        drawsine();
    }
    if (flag == 2) {
        drawhlfrectifier();
    }

   if(flag==3){
        bthdhlfrc();
    }
    if(flag==4){
       grndhlfrc();
    }
}

function freqfng() {
    frqfng = document.getElementById("fq-knob-fng").value;
    if (flag == 1) {
        drawsine();
    }
    if (flag == 2) {
       drawhlfrectifier();
    }
if(flag==3){
        bthdhlfrc();
    }
    if(flag==4){
       grndhlfrc();
    }
   
}

//----------------------------------------code for drawing rectify output--------------------------------------------------//
function drawhlfrectifier() {
	var bttn = document.getElementById('onff').value;
    if (bttn == "Power:Off") {alert("Please turn on to draw graph");}
	else{
    canvas = document.getElementById("mycanvas");
    if (null == canvas || !canvas.getContext)
        return;
    ctx = canvas.getContext("2d");
    // fill canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    document.getElementById("chhn1").disabled = false;
        document.getElementById("chhn2").disabled = false;
        document.getElementById("dual").disabled = false;
        document.getElementById("grnd").disabled = false;
    drawGrid(ctx);
    drawAxis();
    rectfy();
    //peakcurrent();
    }
}

function rectfy() {
	flag=2;
    vp = parseFloat(document.getElementById("amp-knob-fng").value);
    frqfng = parseFloat(document.getElementById("fq-knob-fng").value);
	xpos=parseInt((parseInt(document.getElementById("positionx").value))/36);
	tdv=parseInt(document.getElementById("fq-knob").value);
	tmaxs= parseFloat(Math.pow(frqfng,(0.1-0.09*tdv))*400);
	amp=parseFloat(document.getElementById("amp-knob2").value);
			//alert(vp+"\n"+frqfng+"\n"+tmaxs);
          canvas = document.getElementById('mycanvas');
          ctx = canvas.getContext('2d');
		  var x=2;
		  var y=x.toString(2);
		  var z="0";
		  var t=36;
		  for(var i=(t+xpos);i<1500;i++) z=z+y;
		  posy1 = document.getElementById("positiony2").value;
		  //phsl = document.getElementById("positionx").value;
          p.x = 0;
          //p.x = -35;
          p.y = 189+(8.2*(vp-amp))-(posy1*30);
 
          ctx.lineWidth = 1;
          ctx.strokeStyle = "#ff6600";
         // m = setInterval(wav_squre_update, 1000/60);
		 //var str = gstr.substr(k,12);
		 ctx.beginPath();
          ctx.moveTo(p.x, p.y);
			
          //console.log(str);
 
          wav_squre_analysis(ctx, p, z);
		  //p.x = 430;
          //p.y = 350;
 
          //k += 1;
		  ctx.stroke();

}

