

var flag;
var vp;
var posy1;
var phsl;
var frqfng;
var axes = {};
var vmaxs;  //in volt
var tmaxs;
var m;
var amp;
var p = {};
//----------------------------------------Channel 1------------------------------------------------------------//

function posiy1chnge() {
    posy1 = document.getElementById("positiony1").value;
    if (flag == 1) {
        drawsine();
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

//----------------------------------------code for drawing sine wave--------------------------------------------------//

      
 
      function wav_squre_0_0(ctx, p)
      {
          ctx.lineTo(p.x+40, p.y);
          p.x += 40;
      }
 
      function wav_squre_0_1(ctx, p)
      {
          ctx.lineTo(p.x, p.y-((vp-amp)*24.2));
          ctx.lineTo(p.x+tmaxs, p.y-((vp-amp)*24.2));
          p.x += tmaxs;
          p.y -= ((vp-amp)*24.2);
      }
 
      function wav_squre_1_0(ctx, p)
      {
          ctx.lineTo(p.x, p.y+((vp-amp)*24.2));
          ctx.lineTo(p.x+tmaxs, p.y+((vp-amp)*24.2));
          p.x += tmaxs;
          p.y += ((vp-amp)*24.2);
      }
	  
 
      function wav_squre_m_n(ctx, p, m, n)
      {
          if(m == '0' && n == '0')
          {
              wav_squre_0_0(ctx, p);
          }
          if(m == '0' && n == '1')
          {
              wav_squre_0_1(ctx, p);
          }
          else if(m == '1' && n == '0')
          {
              wav_squre_1_0(ctx, p);
          }
      }
 
      function wav_squre_analysis(ctx, p, str)
      {
          var i = 0;
 
          //wav_squre_m_n(ctx, p, '0', str[0]);
 
          for(i=0; i<str.length-1; i++)
          {
              wav_squre_m_n(ctx, p, str[i], str[i+1]);
          }
      }
	  function drawsine() {
	var bttn = document.getElementById('onff').value;
    if (bttn == "Power:Off") {alert("Please turn on to draw graph");}
	else {
    canvas = document.getElementById("mycanvas");
    if (null == canvas || !canvas.getContext)
        return;
    ctx = canvas.getContext("2d");
    // fill canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
	document.getElementById("chhn1").disabled = false;
    drawAxis();
	drawGrid(ctx);
    sinwv();
     document.getElementById("rectifiedop").disabled = false;
    
	}
}
      function sinwv()
      {
		  vp = parseFloat(document.getElementById("amp-knob-fng").value);
    frqfng = parseFloat(document.getElementById("fq-knob-fng").value);
	tdv=parseInt(document.getElementById("fq-knob").value);
	tmaxs= parseFloat(Math.pow(frqfng,(0.1-0.09*tdv))*400);
	amp=parseFloat(document.getElementById("amp-knob1").value);
	xpos=parseInt((parseInt(document.getElementById("positionx").value))/36);
			//alert(vp+"\n"+frqfng+"\n"+tmaxs);
          canvas = document.getElementById('mycanvas');
          ctx = canvas.getContext('2d');
		  var x=2;
		  var y=x.toString(2);
		  var z="0";
		  var t=36;
		  for(var i=(t+xpos);i<1500;i++) z=z+y;
		  posy1 = document.getElementById("positiony1").value;
          p.x=0;
          p.y = 189+(8.2*vp-(0.1*amp))-(posy1*30);
 
          ctx.lineWidth = 1;
          ctx.strokeStyle = "blue";
         // m = setInterval(wav_squre_update, 1000/60);
		 //var str = gstr.substr(k,12);
		 ctx.beginPath();
          ctx.moveTo(p.x, p.y);
			flag=1;
          //console.log(str);
 
          wav_squre_analysis(ctx, p, z);
		  //p.x = 430;
          //p.y = 350;
 
          //k += 1;
		  ctx.stroke();

	  }