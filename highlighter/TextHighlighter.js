var sStr
var lastCipher = ""
var cipherGroup
var cipherNames = ["Reduced", "S Exception", "K/V Exception", "K/S/V Exception", 
	"Ordinal", "Sumerian", "Francis Bacon", "Reverse Ordinal", "Jewish", "English", "Septenary", "Alphanumeric"]

class cipher {

	constructor (cName) {
		var x
		this.gemClass = ""

		this.Nickname = cName

		switch (this.Nickname) {
			case "Ordinal":
			case "Reduced":
			case "Alphanumeric":
				this.is_On = true;
				break;
			default:
				this.is_On = false;
		}

		switch (this.Nickname) {
			case "Reduced":
			case "S Exception":
			case "K/V Exception":
			case "K/S/V Exception":
				this.valArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8];
				this.gemClass = "Pythagorean";
				break;
			case "Ordinal":
			case "Alphanumeric":
			case "Francis Bacon":
			case "Sumerian":
			case "Reverse Ordinal":
				this.valArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
				this.gemClass = "Alphabetic";
				break;
			case "Jewish":
				this.valArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 600, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 700, 900, 300, 400, 500];
				break;
			case "English":
				this.valArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800];
				break;
			case "Septenary":
				this.valArr = [1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1, 1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1];
				break;
		}

		switch (this.Nickname) {

			case "S Exception":
				this.valArr[18] = 10;
				this.rgbArr = [142, 169, 219];
				break;
			case "K/V Exception":
				this.valArr[10] = 11;
				this.valArr[21] = 22;
				this.rgbArr = [142, 169, 219];
				break;
			case "K/S/V Exception":
				this.valArr[18] = 10;
				this.valArr[10] = 11;
				this.valArr[21] = 22;
				this.rgbArr = [0, 176, 240];
				break;
			case "Sumerian":
				for (x = 0; x < this.valArr.length; x++) {
					this.valArr[x] *= 6
				};
				this.rgbArr = [169, 208, 142];
				break;
			case "Alphanumeric":
				for (x = 0; x < this.valArr.length; x++) {
					this.valArr[x] += 9
				};
				this.rgbArr = [191, 195, 127];
				break;
			case "Reverse Ordinal":
				this.valArr.sort(function(a, b){return b-a});
				this.rgbArr = [198, 89, 17];
				break;
			case "Reduced":
				this.rgbArr = [68, 114, 196];
				break;
			case "Ordinal":
				this.rgbArr = [0, 153, 0];
				break;
			case "Jewish":
				this.rgbArr = [153, 102, 255];
				break;
			case "English":
				this.rgbArr = [255, 255, 0];
				break;
			case "Septenary":
				this.rgbArr = [255, 153, 0];
				break;
			case "Francis Bacon":
				this.rgbArr = [146, 208, 80];
				break;
		}
		if (this.gemClass == "") {this.gemClass = "Other"}
	}

	Gematria (impVal = "") {
		var g, x, z
		var is_cap
		g = 0
		for (x = 0; x < impVal.length; x++) {

			is_cap = false;
			z = impVal.slice(x, x + 1);

			switch (z) {
		    	case "A":
		    		is_cap = true
		    	case "a":
		    		g += this.valArr[0];
					break;
				case "B":
		    		is_cap = true
				case "b":
					g += this.valArr[1];
					break;
				case "C":
		    		is_cap = true
				case "c":
					g += this.valArr[2];
					break;
				case "D":
		    		is_cap = true
				case "d":
					g += this.valArr[3];
					break;
				case "E":
		    		is_cap = true
				case "e":
					g += this.valArr[4];
					break;
				case "F":
		    		is_cap = true
				case "f":
					g += this.valArr[5];
					break;
				case "G":
		    		is_cap = true
				case "g":
					g += this.valArr[6];
					break;
				case "H":
		    		is_cap = true
				case "h":
					g += this.valArr[7];
					break;
				case "I":
		    		is_cap = true
				case "i":
					g += this.valArr[8];
					break;
				case "J":
		    		is_cap = true
				case "j":
					g += this.valArr[9];
					break;
				case "K":
		    		is_cap = true
				case "k":
					g += this.valArr[10];
					break;
				case "L":
		    		is_cap = true
				case "l":
					g += this.valArr[11];
					break;
				case "M":
		    		is_cap = true
				case "m":
					g += this.valArr[12];
					break;
				case "N":
		    		is_cap = true
				case "n":
					g += this.valArr[13];
					break;
				case "O":
		    		is_cap = true
				case "o":
					g += this.valArr[14];
					break;
				case "P":
		    		is_cap = true
				case "p":
					g += this.valArr[15];
					break;
				case "Q":
		    		is_cap = true
				case "q":
					g += this.valArr[16];
					break;
				case "R":
		    		is_cap = true
				case "r":
					g += this.valArr[17];
					break;
				case "S":
		    		is_cap = true
				case "s":
					g += this.valArr[18];
					break;
				case "T":
		    		is_cap = true
				case "t":
					g += this.valArr[19];
					break;
				case "U":
		    		is_cap = true
				case "u":
					g += this.valArr[20];
					break;
				case "V":
		    		is_cap = true
				case "v":
					g += this.valArr[21];
					break;
				case "W":
		    		is_cap = true
				case "w":
					g += this.valArr[22];
					break;
				case "X":
		    		is_cap = true
				case "x":
					g += this.valArr[23];
					break;
				case "Y":
		    		is_cap = true
				case "y":
					g += this.valArr[24];
					break;
				case "Z":
		    		is_cap = true
				case "z":
					g += this.valArr[25];
					break;
		   	}
		   	if (is_cap == true) {
		   		if (this.Nickname == "Francis Bacon") {
		   			g += 26;
		   		}
		   	}
		}
		return g
	}

	Breakdown(impVal) {

		var x, z
		var is_cap
		var eqAdd, eqSum, eqStr
		var breakStr
		var last_Space = false

		breakStr = '<font style="color: RGB(200, 255, 255)">'
		if (opt_ShowQuotes() == true) {
			breakStr += '"' + impVal + '"'
		} else {
			breakStr += impVal
		}

		breakStr += '<font style="font-size: 80%; color: RGB(180, 180, 180)"> = '

		eqAdd = "";
		eqStr = ""
		eqSum = 0;

		for (x= 0; x < impVal.length; x++) {

			is_cap = false;
			eqAdd = 0;
			z = impVal.slice(x, x + 1);

	    	switch (z) {
		    	case "A":
		    		is_cap = true
		    	case "a":
		    		eqAdd = this.valArr[0];
					break;
				case "B":
		    		is_cap = true
				case "b":
					eqAdd = this.valArr[1];
					break;
				case "C":
		    		is_cap = true
				case "c":
					eqAdd = this.valArr[2];
					break;
				case "D":
		    		is_cap = true
				case "d":
					eqAdd = this.valArr[3];
					break;
				case "E":
		    		is_cap = true
				case "e":
					eqAdd = this.valArr[4];
					break;
				case "F":
		    		is_cap = true
				case "f":
					eqAdd = this.valArr[5];
					break;
				case "G":
		    		is_cap = true
				case "g":
					eqAdd = this.valArr[6];
					break;
				case "H":
		    		is_cap = true
				case "h":
					eqAdd = this.valArr[7];
					break;
				case "I":
		    		is_cap = true
				case "i":
					eqAdd = this.valArr[8];
					break;
				case "J":
		    		is_cap = true
				case "j":
					eqAdd = this.valArr[9];
					break;
				case "K":
		    		is_cap = true
				case "k":
					eqAdd = this.valArr[10];
					break;
				case "L":
		    		is_cap = true
				case "l":
					eqAdd = this.valArr[11];
					break;
				case "M":
		    		is_cap = true
				case "m":
					eqAdd = this.valArr[12];
					break;
				case "N":
		    		is_cap = true
				case "n":
					eqAdd = this.valArr[13];
					break;
				case "O":
		    		is_cap = true
				case "o":
					eqAdd = this.valArr[14];
					break;
				case "P":
		    		is_cap = true
				case "p":
					eqAdd = this.valArr[15];
					break;
				case "Q":
		    		is_cap = true
				case "q":
					eqAdd = this.valArr[16];
					break;
				case "R":
		    		is_cap = true
				case "r":
					eqAdd = this.valArr[17];
					break;
				case "S":
		    		is_cap = true
				case "s":
					eqAdd = this.valArr[18];
					break;
				case "T":
		    		is_cap = true
				case "t":
					eqAdd = this.valArr[19];
					break;
				case "U":
		    		is_cap = true
				case "u":
					eqAdd = this.valArr[20];
					break;
				case "V":
		    		is_cap = true
				case "v":
					eqAdd = this.valArr[21];
					break;
				case "W":
		    		is_cap = true
				case "w":
					eqAdd = this.valArr[22];
					break;
				case "X":
		    		is_cap = true
				case "x":
					eqAdd = this.valArr[23];
					break;
				case "Y":
		    		is_cap = true
				case "y":
					eqAdd = this.valArr[24];
					break;
				case "Z":
		    		is_cap = true
				case "z":
					eqAdd = this.valArr[25];
					break;
		   	}

		   	if (is_cap == true) {
		   		if (this.Nickname == "Francis Bacon") {
		   			eqAdd += 26;
		   		}
		   	}

		   	if (eqAdd != 0) {
		   		eqSum += eqAdd;
		   		if (opt_ShowLetter() == true) {
		   			eqStr += "(" + z + ")" + eqAdd + "+";
		   		} else {
		   			eqStr += eqAdd + "+";
		   		}
		   		last_Space = false;
		   	} else if( z == " ") {
		   		if (eqStr !== "" && last_Space == false) {
			   		eqStr = eqStr.slice(0, eqStr.length - 1) + " + ";
			   		last_Space = true;
			   	}
		   	}

		}

		if (opt_Breakdown() == true) {
			if (last_Space == true) {
				breakStr += eqStr.slice(0, eqStr.length - 3) + " = ";
			} else {
				breakStr += eqStr.slice(0, eqStr.length - 1) + " = "
			}
		}
		breakStr += "</font>" + eqSum + " (" + this.Nickname + ")</font>"
		return breakStr

	}

	HeadString() {
		var tStr
		tStr = '<td class="' + this.ClassID() + ' td_name" id="' + this.HeadID() + '"><a href="javascript:populate_Breakdown('
		tStr += "'" + this.Nickname + "'"
		tStr += ');">' + this.Nickname + '</a></td>';
		return tStr
	}
	SumString() {
		var tStr
		var tGem = this.Gematria(sStr)
		tStr = '<td class="' + this.ClassID() + ' td_number" id="' + this.SumID() + '">'
		tStr += '<a href="javascript:Open_Props(' + tGem + ');">' + tGem + '</a></td>';
		return tStr
	}
	CheckBoxString() {
		var tStr
		tStr = '<input type="checkbox" onclick='
		tStr += "'set_Ciphers()' "
		tStr += 'id="' + this.CheckBoxID() + '" value="' + this.Nickname + '"' + this.is_Check() + '>'
		tStr += '<font style="color: RGB(' + this.rgbArr.join(", ") + ')">' + this.Nickname + '<BR>'
		return tStr
	}

	HeadID() {
		return replaceAll(this.Nickname.replace(" ", "_"), "/", "") + "_Header";
	}
	SumID() {
		return replaceAll(this.Nickname.replace(" ", "_"), "/", "") + "_Sum";
	}
	CheckBoxID() {
		return replaceAll(this.Nickname.replace(" ", "_"), "/", "") + "_Box";
	}
	ClassID() {
		return replaceAll(this.Nickname.replace(" ", "_"), "/", "");
	}
	is_Check() {
		if (this.is_On == true) {
			return " checked"
		} else {
			return ""
		}
	}
}
function populate_GemTable() {

	var htmlString
	htmlString = '<table class="GemTable"><tr>'

	for (x = 0; x < 6; x++) {
		htmlString += "<tr>";
		for (y = 0; y < 2; y++) {

			z = ((x + 1) * 2) - (2-y);
			if (cipherGroup[z].is_On === true) {
				htmlString += (cipherGroup[z].HeadString());
			}

		}
		htmlString += "</tr>";
		htmlString += "<tr>";
		for (y = 0; y < 2; y++) {

			z = ((x + 1) * 2) - (2-y);
			if (cipherGroup[z].is_On === true) {
				htmlString += (cipherGroup[z].SumString());
			}

		}
		htmlString += "</tr>";
	}
	htmlString += "</table>";

	var GTable = document.getElementById("Gem_Table")
	GTable.innerHTML = htmlString
}

function populate_CheckTable() {
	var x, y, tStr, typeArr
	tStr = '<table class="CheckTable"><tr><td class="CipherLabel">Ciphers:</font></th>'
	tStr += '<U><td class="CheckHead" style="width: 200px">Pythagorean</td><td class="CheckHead" style="width: 200px">Alphabetic</td><td class="CheckHead" style="width: 200px">Others</td></U></tr><tr>'
	typeArr = ["Pythagorean", "Alphabetic", "Other"]
	tStr += '<td></td>'

	for (x = 0; x < typeArr.length; x++) {
		tStr += '<td class="CheckBoxes" valign="top">'
		for (y = 0; y < cipherGroup.length; y++) {
			if (cipherGroup[y].gemClass == typeArr[x]) {
				tStr += cipherGroup[y].CheckBoxString()
			}
		}
		tStr += '</td>'
	}
	tStr += '</tr></table>'

	var CTable = document.getElementById("Gem_Ciphers")
	CTable.innerHTML = tStr
}

function populate_Options() {
	var boxStr, BoxEl

	boxStr = '<table><tr><td valign="top" class="CipherLabel">Options:</td><td>'
	boxStr += '<input type="checkbox" id="Break_Box" onclick="populate_Breakdown()" value="Letter Breakdown" checked>Show Equation<BR>'
	boxStr += '<input type="checkbox" id="Letter_Box" onclick="populate_Breakdown()" value="Show Letters">Show Letters<BR>'
	boxStr += '<input type="checkbox" id="Show_Quotes" onclick="populate_Breakdown()" value="Show Quotes">Show Quotes</td></tr></table>'
	BoxEl = document.getElementById("Break_Options")
	BoxEl.innerHTML = boxStr
}

function populate_Sums() {
	var GemBox, CalcBox, tCipher, tGem, x, s, xl

	GemBox = document.getElementById("Gem_Box")
	CalcBox = document.getElementById("Calc_Text")
	sStr = GemBox.value.slice(GemBox.selectionStart, GemBox.selectionEnd)

	if (GemBox.innerHTML !== sStr) {
	
		if (sStr.length > 300) {
			xl = sStr.length - 300
			CalcBox.innerHTML = sStr.substring(0, 300) + ' <font color="orange">& ' + xl + ' more characters</font>'
		} else if (sStr.length == 0) {
			CalcBox.innerHTML = '<font color="orange" style="font-size: 150%">Highlighted text will go here</font>'
		} else if (sStr.length < 80) {
			CalcBox.innerHTML = '<font style="font-size: 200%">' + sStr + '</font>'
		} else if (sStr.length < 135) {
			CalcBox.innerHTML = '<font style="font-size: 150%">' + sStr + '</font>'
		} else if (sStr.length < 190) {
			CalcBox.innerHTML = '<font style="font-size: 125%">' + sStr + '</font>'
		} else {
			CalcBox.innerHTML = sStr
		}

		for (x = 0; x < cipherGroup.length; x++) {

			if (cipherGroup[x].is_On == true) {
				tCipher = cipherGroup[x]
				tGem = tCipher.Gematria(sStr)
				s = '<a href="javascript:Open_Props(' + tGem + ');">' + tGem + '</a>'
				document.getElementById(cipherGroup[x].SumID()).innerHTML = s;
			}

		}
		populate_Breakdown()

	}
}

function populate_Breakdown(impCipher = lastCipher) {
	var bEl = document.getElementById("Gem_Breakdown")

	lastCipher = impCipher
	if (lastCipher !== "") {
		if (sStr !== "" && lastCipher !== "" && cipherGroup[cipherNames.indexOf(impCipher)].is_On == true) {
			bEl.innerHTML = cipherGroup[cipherNames.indexOf(impCipher)].Breakdown(sStr)
		} else {
			bEl.innerHTML = ""
		}
	}
}

function Open_Props(impNum) {
	if (impNum > 0 && impNum < 10000000) {
		window.open("https://gematrinator.com/number-properties?number=" + impNum, "Properties of " + impNum, "height=480,width=750")
	}
}

function replaceAll(sS, fS, rS) {
  return sS.replace(new RegExp(fS, 'g'), rS);
}

function create_Ciphers() {
	var q
	cipherGroup = []
	for (q = 0; q < cipherNames.length; q++) {
		cipherGroup[q] = new cipher(cipherNames[q])
	}
}
function set_Ciphers() {
	var x
	var thisBox

	for (x = 0; x < cipherNames.length; x++) {
		thisBox = document.getElementById(cipherGroup[x].CheckBoxID())
		if (thisBox.checked == true) {
			cipherGroup[x].is_On = true
		} else {
			cipherGroup[x].is_On = false
		}
	}
	populate_GemTable()
	populate_Breakdown()
}
function opt_Breakdown() {
	var thisBox
	thisBox = document.getElementById("Break_Box")
	return thisBox.checked
}
function opt_ShowLetter() {
	var thisBox
	thisBox = document.getElementById("Letter_Box")
	return thisBox.checked
}
function opt_ShowQuotes() {
	var thisBox
	thisBox = document.getElementById("Show_Quotes")
	return thisBox.checked
}

function AddBoxListen() {
	document.addEventListener("mouseup", populate_Sums())
}
function RemoveBoxListen() {
	populate_Sums()
	document.removeEventListener("mouseup", populate_Sums());
}
