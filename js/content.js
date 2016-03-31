// hide secondary a tertiary content by default 
document.getElementById("content2").style.display = 'none';
document.getElementById("content3").style.display = 'none';
document.getElementById("content4").style.display = 'none';
document.getElementById("content6").style.display = 'none';



document.getElementById("content1").onclick = function() {
	document.getElementById("content2").style.display = 'block';

// hide everything else 
	document.getElementById("content1").style.display = 'none';
}


document.getElementById("content2").onclick = function() {
	document.getElementById("content3").style.display = 'block';


// hide everything else 
	document.getElementById("content2").style.display = 'none';
}

document.getElementById("content3").onclick = function() {
	document.getElementById("content4").style.display = 'block';

// hide everything else 
	document.getElementById("content1").style.display = 'none';
	document.getElementById("content2").style.display = 'none';
	document.getElementById("content3").style.display = 'none';


	document.getElementById("content6").style.display = 'none';
}

document.getElementById("content4").onclick = function() {
	document.getElementById("content1").style.display = 'block';

// hide everything else 

	document.getElementById("content4").style.display = 'none';
}

document.getElementById("content5").onclick = function() {
	document.getElementById("content6").style.display = 'block';

// hide everything else 

	document.getElementById("content5").style.display = 'none';

}

document.getElementById("content6").onclick = function() {
	document.getElementById("content5").style.display = 'block';

// hide everything else 
	
	document.getElementById("content6").style.display = 'none';

}
