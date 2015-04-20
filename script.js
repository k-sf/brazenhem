$(function(){
	var i;
	var j;
	var temp = true;

	var wrapper = $(".wrapper");///j,обертка
	var conteiner = $(".conteiner");//рабочее пространсво
	var TextHeight = $(".heder").height()+$(".about").height();
	var size = parseInt($(".pixel").css('width'))+2;
	//console.log(sizePixel.val());
	////////////////////////////определение размеров рабочего пространства
	var SpaceWidth = (window.innerWidth)*0.8;
	var SpaceHeight = (window.innerHeight)*0.95-TextHeight;

	var ConteinerWidth = SpaceWidth-SpaceWidth%size;
	var ConteinerHeight = SpaceHeight-SpaceHeight%size;
	///////////////////////////////////определение количество пикселей в рабочем пространстве
	var QuantityDivX = ConteinerWidth/size;
	var QuantityDivY = ConteinerHeight/size;
	///////////////////////////////////////задание размера и позиционирования обертке рабочего пространства
	wrapper.width(ConteinerWidth);
	wrapper.height(ConteinerHeight);
	var PositionLeft = (window.innerWidth-ConteinerWidth)/2-parseInt($(".wrapper").css('border-width'));
	var PositionTop = (window.innerHeight-ConteinerHeight)/2-parseInt($(".wrapper").css('border-width'));
	wrapper.css("left",PositionLeft);
	//wrapper.css("top",PositionTop);
	//////////////при изменении размеров окна перерисовать страницу
	$(window).resize(function(){location.reload(false);});
	//////////////заполнение пространства пикселями
	for(i=0;i<QuantityDivY;i++){
		for(j=0; j<QuantityDivX;j++){
			var div = conteiner.append("<div class ='pixel'id ='X"+j+"Y"+i+"'></div>");
		}
	}
	//console.log("fdfsdf");
	//console.log($(".pixel").css('width'));
	//////////////////добавление canvas элемента
	wrapper.append("<canvas id ='qwerty' class ='canvas' width  = "+ConteinerWidth+" height = "+ConteinerHeight+"></canvas>");
	////////////////
	
	$("#qwerty").click(onclick);

	function onclick(e){
		divX = (e.offsetX-e.offsetX%size)+(size/2);
		divY = (e.offsetY-e.offsetY%size)+(size/2);
		if(temp === true){
			paintLine(divX,divY);
			temp = false;
		}else{
			//brazenhem()
			temp  = true;
		}
	}
});