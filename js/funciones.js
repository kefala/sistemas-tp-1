function pulsacion(n){
	
	var DIG = new Array('0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','.');
	
	switch(n){
		case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:
		case 11:case 12:case 13:case 14:case 15:case 16:
			document.getElementById("dis").value += DIG[n];
			
			break;
		}

};

document.getElementById("bin").style.opacity = "0.1";




