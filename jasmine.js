/**
 * @author Nick Carlson
 * @author Jasmine Studios
 * @date 4-11-14
 * 
 * A set of convenience functions.  Requires jquery
 */

/**
 * Produces a richer version of the object jquery produces.  Gives functions that simulate java and openGL, and 
 * removes some of the dependency of css on the programmer's side.
 * @param {} tag
 * @return element
 */
function J(tag) {
	var element = $(tag);
	/**
	 * Description
	 * @method setY
	 * @param {} y
	 * @return element
	 */
	element.setY=function(y) {
		var safeY=~~y;
		$(this).css({"top": safeY+"px", "position":"absolute"});
		return element;
	};
	/**
	 * Description
	 * @method getY
	 * @return MemberExpression
	 */
	element.getY=function() {
		return element.offset().top;
	};
	/**
	 * Description
	 * @method setX
	 * @param {} x
	 * @return element
	 */
	element.setX=function(x) {
		var safeX=~~x;
		$(this).css({"left": safeX+"px", "position":"absolute"});
		return element;
	};
	/**
	 * Description
	 * @method getX
	 * @return MemberExpression
	 */
	element.getX=function() {
		return element.offset().left;
	};
	/**
	 * Description
	 * @method setZ
	 * @param {} z
	 * @return element
	 */
	element.setZ=function(z) {
		var safeZ=~~z;
		$(this).css({"z-index": safeZ});
		return element;
	};
	/**
	 * Description
	 * @method getZ
	 * @return CallExpression
	 */
	element.getZ=function() {
		return element.zIndex();
	};		
	/**
	 * Description
	 * @method setWidth
	 * @param {} w
	 * @return element
	 */
	element.setWidth=function(w) {
		var safeWidth=~~w;
		$(this).css({"width": safeWidth+"px"});
		return element;
	};
	/**
	 * Description
	 * @method setHeight
	 * @param {} h
	 * @return element
	 */
	element.setHeight=function(h) {
		var safeHeight=~~h;
		$(this).css({"height": safeHeight+"px"});
		return element;
	};
	/**
	 * Description
	 * @method setVisibility
	 * @param {} isVisible
	 * @return element
	 */
	element.setVisibility=function(isVisible) {
		if (isVisible) {
			$(this).css({"visibility":"visible"});	
		}
		else {
			$(this).css({"visibility":"hidden"});
		}
		return element;
	};
	/**
	 * Description
	 * @method setVisible
	 * @param {} isVisible
	 * @return element
	 */
	element.setVisible=function(isVisible) {
		if (isVisible) {
			$(this).css({"visibility":"visible"});	
		}
		else {
			$(this).css({"visibility":"hidden"});
		}
		return element;
	};
	/**
	 * Description
	 * @method addImage
	 * @param {} src
	 * @param {} idTag
	 * @param {} isHidden
	 * @param {} classTag
	 * @return CallExpression
	 */
	element.addImage=function(src,idTag,isHidden, classTag) {
		if (isHidden==true) {
			$(this).append('<img src="'+src+'" id="'+idTag+'" class="'+classTag+'" style="visibility:hidden;position:absolute"/>');
		}
		else {
			$(this).append('<img src="'+src+'" id="'+idTag+'" class="'+classTag+'" />');
		}
		return J("#"+idTag);
	};
	/**
	 * Description
	 * @method addDiv
	 * @param {} idTag
	 * @return CallExpression
	 */
	element.addDiv=function(idTag) {
		$(this).append("<div id="+idTag+"></div>");
		return J("#"+idTag);
	};
	/**
	 * Description
	 * @method setBounds
	 * @param {} x
	 * @param {} y
	 * @param {} w
	 * @param {} h
	 * @return element
	 */
	element.setBounds=function(x,y,w,h) {
		element.setX(x).setY(y).setWidth(w).setHeight(h);
		return element;
	};
	/**
	 * Description
	 * @method setFontSize
	 * @param {} size
	 * @return element
	 */
	element.setFontSize=function(size) {
		element.css({"font-size":size+"px"});
		return element;
	};
	/**
	 * Description
	 * @method setFontColor
	 * @param {} color
	 * @return element
	 */
	element.setFontColor=function(color) {
		element.css({"color":color});
		return element;
	};
	/**
	 * Description
	 * @method centerText
	 * @return element
	 */
	element.centerText=function() {
		element.css({'margin-left':'auto','margin-right':'auto','text-align':'center'});
		return element;
	};
	/**
	 * Description
	 * @method centerTextVertically
	 * @param {} height
	 * @return element
	 */
	element.centerTextVertically=function(height) {
		element.css({"vertical-align":"middle","line-height": height+"px"});
		return element;
	};
	/**
	 * Description
	 * @method setBackgroundColor
	 * @param {} color
	 * @return element
	 */
	element.setBackgroundColor=function(color) {
		element.css({"background-color":color});
		return element;
	};
	/**
	 * Description
	 * @method setBGColor
	 * @param {} color
	 * @return element
	 */
	element.setBGColor=function(color) {
		element.css({"background-color":color});
		return element;
	};
	
	element.center=function() {
		if (element.parent().is('body')) {
			var x=(getWindowWidth()/2)-(element.width()/2);
			var y=(getWindowHeight()/2)-(element.height()/2);
		}
		else {
			var x=element.parent().width()/2-element.width()/2;
			var y=element.parent().width()/2-element.width()/2;
		}
		
		
		element.setX(x);
		element.setY(y);
		return element;
	};
	
	element.centerX=function() {
		if (element.parent().is('body')) {
			var x=(getWindowWidth()/2)-(element.width()/2);
		}
		else {
			var x=element.parent().width()/2-element.width()/2;
		}
		
		
		element.setX(x);
		return element;
	};
	
	element.centerY=function() {
		if (element.parent().is('body')) {
			var y=(getWindowHeight()/2)-(element.height()/2);
		}
		else {
			var y=element.parent().height()/2-element.height()/2;
		}
		
		
		element.setY(y);
		return element;
	};
	
	/**
	 * Description
	 * @method addFunction
	 * @param {} name
	 * @param {} func
	 * @return element
	 */
	element.addFunction=function(name,func) {
		element[""+name+""]=func;
		return element;
	};
	return element;
}

/**
 * Description
 * @method getWidthOfText
 * @param {} text
 * @param {} fontSize
 * @return w
 */
function getWidthOfText(text,fontSize) {
	$(document.body).append('<span id="textWidthTemp" ></span>');
	J("#textWidthTemp").css({'font-family':'Old Standard TT','font-style':'italic'});
	J("#textWidthTemp").setFontSize(fontSize).append(text);
	var w=J("#textWidthTemp").width();
	J("#textWidthTemp").remove();
	return w;
}

/**
 * Description
 * @method setWidth
 * @param {} element
 * @param {} width
 * @return 
 */
function setWidth(element, width) {
	var safeWidth=~~width;
	element.css({"width": safeWidth+"px"});
}

/**
 * Description
 * @method setHeight
 * @param {} element
 * @param {} height
 * @return 
 */
function setHeight(element, height) {
	var safeHeight=~~height;
	element.css({"height": safeHeight+"px"});
}

/**
 * Description
 * @method setX
 * @param {} element
 * @param {} x
 * @return element
 */
function setX(element, x) {
	console.log(x);
	var safeX=~~x;
	element.css({"left": safeX+"px", "position":"absolute"});
	return element;
}

/**
 * Description
 * @method setY
 * @param {} element
 * @param {} y
 * @return element
 */
function setY(element, y) {
	console.log(y);
	var safeY=~~y;
	element.css({"top": safeY+"px", "position":"absolute"});
	return element;
}

/**
 * Description
 * @method center
 * @param {} element
 * @return element
 */
function center(element) {
	var imageX=(getWindowWidth()/2)-(element.width()/2);
	var imageY=(getWindowHeight()/2)-(element.height()/2);
	setX(element, imageX);
	setY(element, imageY);
	return element;
}

/**
 * Description
 * @method drawImage
 * @param {} parent
 * @param {} URL
 * @param {} idTag
 * @return 
 */
function drawImage(parent, URL, idTag) {
	parent.append('<img src="'+URL+'" id="'+idTag+'" style="visibility:hidden"/>');
}

/**
 * Description
 * @method drawDiv
 * @param {} parent
 * @param {} idTag
 * @return 
 */
function drawDiv(parent, idTag) {
	parent.append('<div id="'+idTag+'"></div>');
}

//Preloads images into cache
/**
 * Description
 * @method preload
 * @param {} arrayOfImages
 * @return 
 */
function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
    });
}

/**
 * Description
 * @method setWindowDimensions
 * @return 
 */
function setWindowDimensions() {
	var maxX=1000;
	var maxY=600;
	var minX=100;
	var minY=60;
	var winX=getWindowWidth();
	var winY=getWindowHeight()-20;
	var x=0;
	var y=0;
	var q=1;
	
	var aspectRatioX=maxX/maxY;
	var aspectRatioY=maxY/maxX;
	
	// //Does the optimum size fit in the window
	// if (winX>maxX && winY>maxY) {
		// x=maxX;
		// y=maxY;
	// }
	// //Is the window aspect ratio too small vertically
	if(winY/winX<aspectRatioY) {
		console.log("Window is too short.  Resizing based on Y");
		y=winY;
		x=aspectRatioX*y;
		q=y/maxY;
	}
	//The window aspect ratio must be too small horizontally
	else {
		console.log("Window is too narrow.  Resizing based on X");
		x=winX;
		y=aspectRatioY*x;
		q=x/maxX;
	}
	
	window.winSizeQ=q;
	window.screenWidth=x;
	window.screenHeight=y;
	window.windowWidth=x;
	window.windowHeight=y;
}

/**
 * Description
 * @method getWindowWidth
 * @return w
 */
function getWindowWidth() {
	var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	return w;
}

/**
 * Description
 * @method getWindowHeight
 * @return h
 */
function getWindowHeight() {
	var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	return h;
}


