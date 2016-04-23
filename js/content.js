// hide secondary a tertiary content by default 

$("#content2").hide();
$("#content3").hide();
$("#content4").hide();
$("#content6").hide();


document.getElementById("content1").onclick = function() {
	$("#content2").fadeIn(300);

// hide everything else 
	document.getElementById("content1").style.display = 'none';
}


document.getElementById("content2").onclick = function() {
	// document.getElementById("content3").style.display = 'block';
	$("#content3").fadeIn(300);


// hide everything else 
$("#content2").hide();
}

document.getElementById("content3").onclick = function() {
	$("#content4").fadeIn(300);

// hide everything else 
	document.getElementById("content3").style.display = 'none';

}

document.getElementById("content4").onclick = function() {
	$("#content1").fadeIn(300);

// hide everything else 

	document.getElementById("content4").style.display = 'none';
}

document.getElementById("content5").onclick = function() {
	$("#content6").fadeIn(300);

// hide everything else 

	document.getElementById("content5").style.display = 'none';

}

document.getElementById("content6").onclick = function() {
	$("#content5").fadeIn(300);

// hide everything else 
	
	document.getElementById("content6").style.display = 'none';

}
