$(document).ready(function(){
	//clock function
	function findTime() {
	    var today = new Date();
	    var h = today.getHours();
	    var m = today.getMinutes();
	    var s = today.getSeconds();
	    var ms = today.getMilliseconds();
	    $('#hours').text(h);
	    $('#minutes').text(theTen(m));
	    $('#seconds').text(theTen(s));

	ifMinOdd(m);
	changeBackgroundColor(m, s, ms);
	changeCornerColor(m, s, ms);	
	}

//runs the function every millisecond
	window.setInterval(findTime, 1);

//correctly formats minutes and seconds by adding a 0 in front of single digit numbers
	function theTen(i) {
	    if (i < 10) {i = "0" + i}; 
	    return i;
	}
//changes clock background color every minute
	function ifMinOdd(value){
		if (value % 2 === 0){
			$('#clock').css({'backgroundColor':'white', 'color':'black'});
		}
		else {
			$('#clock').css({'backgroundColor':'black', 'color':'white'});
		}
	}

//preselected list of "AWESOME" colors that will be randomly selected by the following "background-color-changing" functions
	var bodyArray = ["#3399ff", "#40e0d0", "#a155e7", "#ff8746", "#f983f9", "#ff0080", "#ffff58", "#ff4040", "#7bc675"]

//randomly selects a background color upon pageload
	$('window').ready(function(){
		var bodyColor = bodyArray[Math.floor(Math.random()*bodyArray.length)];
		$('body').css('backgroundColor', bodyColor);	
	});

// function that randomly selects a new background color every 5 minutes
	function changeBackgroundColor(val, val2, val3){
		var bodyColor2 = bodyArray[Math.floor(Math.random()*bodyArray.length)];
		if (val % 5 === 0 && val2 === 0 && val3 < 10){
			$('body').css('backgroundColor', bodyColor2);
		}
		else{
			;
		}
	}

//function that randomly selects and sets the original background color of the corner pieces
	$('window').ready(function(){
		var bodyColor = bodyArray[Math.floor(Math.random()*bodyArray.length)];
		$('.random').css('backgroundColor', bodyColor);	
	});

//function that selects random new color in the corners ever hour
	function changeCornerColor(val, val2, val3){
		var bodyColor3 = bodyArray[Math.floor(Math.random()*bodyArray.length)];
		if (val % 1 === 0 && val2 === 0 && val3 < 50){
			$('.random').css('backgroundColor', bodyColor3);
		}
		else{
			;
		}
	}



});