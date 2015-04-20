function brazenhem(firstX,firstY,lastX,lastY){
	var pixelX;
	var pixelY;
	var tempY;
	var size = parseInt($(".pixel").css('width'))+2;
		firstPixelX = (firstX-(size/2))/size;
		firstPixelY = (firstY-(size/2))/size;
		lastPixelX = (lastX-(size/2))/size;
		lastPixelY = (lastY-(size/2))/size;

	var deltaX = Math.abs(lastPixelX-firstPixelX);
	var deltaY = Math.abs(lastPixelY-firstPixelY);
	var error = 0;
	var deltaErrorY = deltaY/deltaX;
	var deltaErrorX = deltaX/deltaY;

	var currentX = firstPixelX;
	var currentY = firstPixelY;
	
	var shiftX = Math.abs(lastPixelX-firstPixelX);
	var shiftY = Math.abs(lastPixelY-firstPixelY);
	claerbrez();
	if(shiftX>=shiftY){
			if(lastPixelX-firstPixelX>0&&lastPixelY-firstPixelY>0){ ///слева на право, сверху вниз.
				do{
					paintPixel(currentX,currentY);
					error = error+deltaErrorY;
					if(error>0.5){
						currentY = currentY+1;
						error = error -1;
					}
					currentX = currentX+1;
				}while(currentX<=lastPixelX);


			}else if(lastPixelX-firstPixelX>0&&lastPixelY-firstPixelY<0){////слева на право, снизу вверх.
				do{
					paintPixel(currentX,currentY);
					error = error+deltaErrorY;
					if(error>0.5){
						currentY = currentY-1;
						error = error -1;
					}
					currentX = currentX+1;
				}while(currentX<=lastPixelX);

			}else if(lastPixelX-firstPixelX<0&&lastPixelY-firstPixelY>0){///справо на лево, сверху вниз.

				do{
					paintPixel(currentX,currentY);
					error = error+deltaErrorY;
					if(error>0.5){
						currentY = currentY+1;
						error = error -1;
					}
					currentX = currentX-1;
				}while(currentX>=lastPixelX);

			}else if(lastPixelX-firstPixelX<0&&lastPixelY-firstPixelY<0){///справо на лево, снизу вверх.

				do{
					paintPixel(currentX,currentY);
					error = error+deltaErrorY;
					if(error>0.5){
						currentY = currentY-1;
						error = error -1;
					}
					currentX = currentX-1;
				}while(currentX>=lastPixelX);
		///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			}else if(lastPixelY-firstPixelY===0){////смещение по горизонтали
				paintPixel(firstPixelX,firstPixelY);
				if(lastPixelX>firstPixelX){
					do{
						paintPixel(currentX,firstPixelY);
						currentX = currentX+1;
					}while(currentX<=lastPixelX);
				}
				else if(lastPixelX<firstPixelX){
					do{
						paintPixel(currentX,firstPixelY);
						currentX = currentX-1;
					}while(currentX>=lastPixelX);
				}
			 }
	}else if(shiftY>shiftX){//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			if(lastPixelX-firstPixelX>0&&lastPixelY-firstPixelY>0){ ///слева на право, сверху вниз.
				do{
					paintPixel(currentX,currentY);
					error = error+deltaErrorX;
					if(error>0.5){
						currentX = currentX+1;
						error = error -1;
					}
					currentY = currentY+1;
				}while(currentY<=lastPixelY);


			}else if(lastPixelX-firstPixelX>0&&lastPixelY-firstPixelY<0){////слева на право, снизу вверх.
				do{
					paintPixel(currentX,currentY);
					error = error+deltaErrorX;
					if(error>0.5){
						currentX = currentX+1;
						error = error -1;
					}
					currentY = currentY-1;
				}while(currentY>=lastPixelY);

			}else if(lastPixelX-firstPixelX<0&&lastPixelY-firstPixelY>0){///справо на лево, сверху вниз.

				do{
					paintPixel(currentX,currentY);
					error = error+deltaErrorX;
					if(error>0.5){
						currentX = currentX-1;
						error = error -1;
					}
					currentY = currentY+1;
				}while(currentY<=lastPixelY);

			}else if(lastPixelX-firstPixelX<0&&lastPixelY-firstPixelY<0){///справо на лево, снизу вверх.

				do{
					paintPixel(currentX,currentY);
					error = error+deltaErrorX;
					if(error>0.5){
						currentX = currentX-1;
						error = error -1;
					}
					currentY = currentY-1;
				}while(currentY>=lastPixelY);
		///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			}else if(lastPixelX-firstPixelX===0){ ////смещение по вертикали
				if(lastPixelY>firstPixelY){
					do{
						paintPixel(firstPixelX,currentY);
						currentY = currentY+1;
					}while(currentY<=lastPixelY);
				}
				else if(lastPixelY<firstPixelY){
					do{
						paintPixel(firstPixelX,currentY);
						currentY = currentY-1;
					}while(currentY>=lastPixelY);
				}
			}
	}
}
function claerbrez(){
	$(".pixel").removeClass("black");
}
function paintPixel(pixelX,pixelY){
	currentPixel = $("#X"+pixelX+"Y"+pixelY+"");
	currentPixel.addClass("black");
}