$(document).ready(function(){

	function findTime() {
	    var today = new Date();
	    var h = today.getHours();
	    var m = today.getMinutes();
	    var s = today.getSeconds();
	    var ms = today.getMilliseconds();
	    $('#hours').text(h);
	    $('#minutes').text(theTen(m));
	    $('#seconds').text(theTen(s));
	    // $('#milliseconds').text(theTen(ms));



	ifMinOdd(m);
	changeBackgroundColor(m, s, ms);	
	}

	window.setInterval(findTime, 1);

	function theTen(i) {
	    if (i < 10) {i = "0" + i}; 
	    return i;
	}

	function ifMinOdd(value){
		if (value % 2 === 0){
			$('#clock').css({'backgroundColor':'white', 'color':'black'});
		}
		else {
			$('#clock').css({'backgroundColor':'black', 'color':'white'});
		}
	}

	var bodyArray = ["#3399ff", "#7bc675", "#a155e7", "#ff8746", "#f983f9", "#ff0080", "#ffff58", "#ff4040", "#40e0d0"]
		var bodyColor = bodyArray[Math.floor(Math.random()*bodyArray.length)];


	$('window').ready(function(){
		$('body').css('backgroundColor', bodyColor);	
	});


	function changeBackgroundColor(val, val2, val3){
		var bodyColor2 = bodyArray[Math.floor(Math.random()*bodyArray.length)];
		if (val % 5 === 0 && val2 === 0 && val3 < 8){
			$('body').css('backgroundColor', bodyColor2);
		}
		else{
			;
		}
	}



});