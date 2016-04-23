// initial hide
document.getElementById("back1").style.display = 'none';
document.getElementById("back2").style.display = 'none';
document.getElementById("back3").style.display = 'none';
document.getElementById("back4").style.display = 'none';
document.getElementById("back5").style.display = 'none';
document.getElementById("back6").style.display = 'none';
document.getElementById("back7").style.display = 'none';
document.getElementById("back8").style.display = 'none';

// list item one
document.getElementById("1st").onclick = function() {overone()};
document.getElementById("1st").onmouseout = function() {outone()};

function overone() {
	document.getElementById("1st").style.fontSize = "25pt";
		document.getElementById("1st").style.opacity = "1";
				$("#back1").fadeIn(300);

		// hide others
				document.getElementById("back2").style.display = 'none';
				document.getElementById("back3").style.display = 'none';
				document.getElementById("back4").style.display = 'none';

		// make others small
		document.getElementById("2nd").style.fontSize = "20pt";
		document.getElementById("3rd").style.fontSize = "20pt";
		document.getElementById("4th").style.fontSize = "20pt";
		// make others half opacity		
			document.getElementById("2nd").style.opacity = "0.5";
			document.getElementById("3rd").style.opacity = "0.5";
			document.getElementById("4th").style.opacity = "0.5";


}

function outone() {


}

// list item two
document.getElementById("2nd").onclick = function() {overtwo()};
document.getElementById("2nd").onmouseout = function() {outtwo()};

function overtwo() {
	document.getElementById("2nd").style.fontSize = "25pt";
		document.getElementById("2nd").style.opacity = "1";
			$("#back2").fadeIn(300);
			// hide others
			document.getElementById("back1").style.display = 'none';
			document.getElementById("back3").style.display = 'none';
			document.getElementById("back4").style.display = 'none';
			// make others small
		document.getElementById("1st").style.fontSize = "20pt";
		document.getElementById("3rd").style.fontSize = "20pt";
		document.getElementById("4th").style.fontSize = "20pt";
		// make others half opacity		
			document.getElementById("1st").style.opacity = "0.5";
			document.getElementById("3rd").style.opacity = "0.5";
			document.getElementById("4th").style.opacity = "0.5";

}

function outtwo() {

}

// list item three
document.getElementById("3rd").onclick = function() {overthree()};
document.getElementById("3rd").onmouseout = function() {outthree()};


function overthree() {
	document.getElementById("3rd").style.fontSize = "25pt";
		document.getElementById("3rd").style.opacity = "1";
		$("#back3").fadeIn(300);

			// hide others
			document.getElementById("back1").style.display = 'none';
			document.getElementById("back2").style.display = 'none';
			document.getElementById("back4").style.display = 'none';
			// make others small
		document.getElementById("1st").style.fontSize = "20pt";
		document.getElementById("2nd").style.fontSize = "20pt";
		document.getElementById("4th").style.fontSize = "20pt";
		// make others half opacity		
			document.getElementById("1st").style.opacity = "0.5";
			document.getElementById("2nd").style.opacity = "0.5";
			document.getElementById("4th").style.opacity = "0.5";




}

function outthree() {
}

// list item four
document.getElementById("4th").onclick = function() {overfour()};
document.getElementById("4th").onmouseout = function() {outfour()};


function overfour() {
	document.getElementById("4th").style.fontSize = "25pt";
		document.getElementById("4th").style.opacity = "1";
					$("#back4").fadeIn(300);

			// hide others
			document.getElementById("back1").style.display = 'none';
			document.getElementById("back2").style.display = 'none';
			document.getElementById("back3").style.display = 'none';


			// make others small		
			document.getElementById("1st").style.fontSize = "20pt";
			document.getElementById("2nd").style.fontSize = "20pt";
			document.getElementById("3rd").style.fontSize = "20pt";
			// make others half opacity		
			document.getElementById("1st").style.opacity = "0.5";
			document.getElementById("2nd").style.opacity = "0.5";
			document.getElementById("3rd").style.opacity = "0.5";



}

function outfour() {
}

// list item five
document.getElementById("5th").onclick = function() {overfive()};
document.getElementById("5th").onmouseout = function() {outfive()};


function overfive() {
	document.getElementById("5th").style.fontSize = "25pt";
		document.getElementById("5th").style.opacity = "1";
}

function outfive() {
	document.getElementById("5th").style.fontSize = "20pt";
		document.getElementById("5th").style.opacity = "0.5";
			document.getElementById("back5").style.display = 'none';
}

// list item six
document.getElementById("6th").onclick = function() {oversix()};
document.getElementById("6th").onmouseout = function() {outsix()};


function oversix() {
	document.getElementById("6th").style.fontSize = "25pt";
		document.getElementById("6th").style.opacity = "1";
			document.getElementById("back6").style.display = "block";

}

function outsix() {
	document.getElementById("6th").style.fontSize = "20pt";
		document.getElementById("6th").style.opacity = "0.5";
			document.getElementById("back6").style.display = 'none';
}

// list item seven
document.getElementById("7th").onclick = function() {overseven()};
	document.getElementById("7th").onmouseout = function() {outseven()};


function overseven() {
	document.getElementById("7th").style.fontSize = "25pt";
		document.getElementById("7th").style.opacity = "1";
			document.getElementById("back7").style.display = "block";

}

function outseven() {
	document.getElementById("7th").style.fontSize = "20pt";
		document.getElementById("7th").style.opacity = "0.5";
			document.getElementById("back7").style.display = 'none';
}

// list item eight
document.getElementById("8th").onclick = function() {overeight()};
document.getElementById("8th").onmouseout = function() {outeight()};


function overeight() {
	document.getElementById("8th").style.fontSize = "25pt";
		document.getElementById("8th").style.opacity = "1";
			document.getElementById("back8").style.display = "block";

}

function outeight() {
	document.getElementById("8th").style.fontSize = "20pt";
		document.getElementById("8th").style.opacity = "0.5";
			document.getElementById("back8").style.display = 'none';
}



