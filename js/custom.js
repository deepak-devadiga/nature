$(document).ready(function(){
	function wallpaper(){
		var hr = (new Date()).getHours();
	console.log(hr);
	if(hr >= 5 && hr <= 7){
		console.log('its morning');
		$('#morning').show();
		$('#night').hide();
		$('#page1').css("background", "url(./images/early_morning.jpg) no-repeat center center fixed");
		$('#page1').css("background-size", 'cover');
		$('#page2').css('background','-webkit-linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(51, 255, 51, 1))');
			$('#page2').css('background','-o-linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(51, 255, 51, 1))');
			$('#page2').css('background','-moz-linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(51, 255, 51, 1))');
			$('#page2').css('background','linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(51, 255, 51, 1))');
	}
	if(hr >= 8 && hr <= 12){
		$('#morning').show();
		$('#night').hide();
		console.log('its morning');
		$('#page1').css("background", "url(./images/morning.jpg) no-repeat center center fixed");
		$('#page1').css("background-size", 'cover');
		$('#page2').css('background','-webkit-linear-gradient(to bottom, rgba(255, 204, 102, 0), rgba(51, 255, 51, 1))');
			$('#page2').css('background','-o-linear-gradient(to bottom, rgba(255, 204, 102, 0), rgba(51, 255, 51, 1))');
			$('#page2').css('background','-moz-linear-gradient(to bottom, rgba(255, 204, 102, 0), rgba(51, 255, 51, 1))');
			$('#page2').css('background','linear-gradient(to bottom, rgba(255, 204, 102, 1), rgba(51, 255, 51, 1))');
	}else if(hr > 12 && hr <= 16){
		$('#morning').show();
		$('#night').hide();
		console.log('its afternoon');
		$('#page1').css("background", "url(./images/afternoon.jpg) no-repeat center center fixed");
			$('#page1').css("background-size", 'cover');
			$('#page2').css('background','-webkit-linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(51, 255, 51, 1))');
			$('#page2').css('background','-o-linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(51, 255, 51, 1))');
			$('#page2').css('background','-moz-linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(51, 255, 51, 1))');
			$('#page2').css('background','linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(51, 255, 51, 1))');
	}else if(hr > 16 && hr <= 18){
		$('#morning').show();
		$('#night').hide();
		console.log('its evening');
		$('#page1').css("background", "url(./images/evening.jpg) no-repeat center center fixed");
			$('#page1').css("background-size", 'cover');
			
			$('#page2').css('background','-webkit-linear-gradient(to bottom, rgba(128, 64, 0, 0), rgba(51, 255, 51, 1))');
			$('#page2').css('background','-o-linear-gradient(to bottom, rgba(128, 64, 0, 0), rgba(51, 255, 51, 1))');
			$('#page2').css('background','-moz-linear-gradient(to bottom, rgba(128, 64, 0, 0), rgba(51, 255, 51, 1))');
			$('#page2').css('background','linear-gradient(to bottom, rgba(128, 64, 0, 1), rgba(51, 255, 51, 1))');
	}else{
		$('#morning').hide();
		$('#night').show();
		console.log('its night');
		$('#page1').css("background", "url(./images/night.jpg) no-repeat center center fixed");
		$('#page1').css("background-size", 'cover');
		$('#page2').css('background','-webkit-linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 1))');
			$('#page2').css('background','-o-linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 1))');
			$('#page2').css('background','-moz-linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 1))');
			$('#page2').css('background','linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(0, 0, 0, 1))');
	}
	}
	window.setInterval(function(){
		wallpaper();
	},500);
	
	
	
	


});


function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
