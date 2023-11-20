
var flag;
var vp;
var posy1, posy2;
var phsl;
var frqfng;
var axes = {};
var vmaxs;  //in volt
var tmaxs;// in msec  0.001; //in sec

function posiy1chnge() {
    posy1 = document.getElementById("positiony1").value;
    if (flag == 1) {
        drawsine();
    }
    if(flag==3){
      bthdhlfrc();
    }
    if(flag==4){
       grndhlfrc();
    }
}

function posiy2chnge() {
    posy2 = document.getElementById("positiony2").value;
    
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

function posix2chnge() {
    phsl = document.getElementById("positionx").value;
    if (flag == 1) {
        drawsine();
    }
    if (flag == 2) {
          drawhlfrectifier();;
    }
 if(flag==3){
       bthdhlfrc();
    }
    if(flag==4){
        grndhlfrc();
    }
}

function ampfng() {
    vp = document.getElementById("amp-knob-fng").value;
    if (flag == 1) {
        drawsine();
    }
    if (flag == 2) {
          drawhlfrectifier();;
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
          drawhlfrectifier();;
    }

   if(flag==3){
        bthdhlfrc();
    }
    if(flag==4){
        grndhlfrc();
    }
}

//----------------------------------------code for drawing sine wave and rectify output--------------------------------------------------//
function grndhlfrc() {
	var bttn = document.getElementById('onff').value;
    if (bttn == "Power:Off") {alert("Please turn on to draw the graph");}
	else{
    canvas = document.getElementById("mycanvas");
    if (null == canvas || !canvas.getContext)
        return;
    ctx = canvas.getContext("2d");
    // fill canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawGrid(ctx);
    drawAxis();
    sinerectifygrnd();
	}
}

function sinerectifygrnd(){
    flag=4;
      canvas = document.getElementById('mycanvas');
          ctx = canvas.getContext('2d');
		  var x=0;
		  var y=x.toString(2);
		  var z="";
		  for(var i=0;i<40;i++) z=z+y;
		  posy1 = document.getElementById("positiony1").value;
          p.x = 0;
          p.y = 150-parseInt(posy1) * 20;
 
          ctx.lineWidth = 1;
          ctx.strokeStyle = "blue";
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
		  posy2 = document.getElementById("positiony2").value;
          p.x = 0;
          p.y = 150-parseInt(posy2) * 20;
 
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


