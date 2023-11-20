var count=0;
var id;
var l=[];
var len;
	function dragStart(ev) {
            ev.dataTransfer.effectAllowed='move';
            ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
            ev.dataTransfer.setDragImage(ev.target,0,0);
			document.getElementById("5").style.border="1px solid black";
			document.getElementById("6").style.border="1px solid black";
			document.getElementById("7").style.border="1px solid black";
			//document.getElementById("8").style.border="1px solid black";
			//document.getElementById("9").style.border="1px solid black";
			id=parseInt(ev.target.id);
			if(!(l.includes(id)))
			l.push(id);
			len=l.length;
            return true;
    }
	function drop(event) {
			var flag=0;
			var div_id=id+10;
			if((id+5)==parseInt(event.target.id)) {
				event.preventDefault();
				var data = event.dataTransfer.getData("Text");
				event.target.appendChild(document.getElementById(data));
				document.getElementById(div_id).remove();
			}
			else {alert("Place in the right box\nTo know the right box please click the HELP icon");len=len-1;}
			for(var i=5;i<=7;i++){
				document.getElementById(i).style.removeProperty('border');
			}
			if(len==2) {
				document.getElementById('1').style.cursor="move";
				document.getElementById('1').draggable=true;
			}
			if(len==3) {
				document.getElementById('s').innerHTML="";
				document.getElementById('s').style.height='90px';
				document.getElementById("st").style.cursor="pointer";
				document.getElementById("st").disabled=false;
				document.getElementById("st").style.backgroundColor="green";
				document.getElementById("st").style.color="white";
			}
			
	}
	function allowDrop(event) {
			event.preventDefault();
	}
	