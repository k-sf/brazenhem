function paintLine(divX,divY){
	var temp1 = 0;
	var oldposX;
	var oldposY;
	var canvas = document.getElementById("qwerty");//canvas элемен
	var size = parseInt($(".pixel").css('width'))+2;
	$("#qwerty").bind('mousemove',moveLine);
	$("#qwerty").click(onsecondclick);
	
	function moveLine(event){
		var paint = canvas.getContext('2d');
		paint.lineWidth = 3;
		paint.strokeStyle = 'red';
		posX = (event.offsetX-event.offsetX%size)+(size/2);
		posY = (event.offsetY-event.offsetY%size)+(size/2);
		if(temp1 === 0){
			oldposX = posX;
			oldposY = posY;
			temp1 = 1;
		}
		if(oldposX!==posX||oldposY!==posY){
			oldposX = posX;
			oldposY = posY;
			//claerbrez();
			brazenhem(divX,divY,posX,posY);
			paint.clearRect(0, 0, canvas.width, canvas.height);
			paint.beginPath();
			paint.moveTo(divX,divY);
			paint.lineTo(posX,posY);
			paint.stroke();
		}
	}
	function onsecondclick(){
		$("#qwerty").unbind('click',onsecondclick);
		$("#qwerty").unbind('mousemove',moveLine);
		//brazenhem(divX,divY,posX,posY);
	}
}

