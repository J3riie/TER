

function leBonCoin(ville, type, rooms, square){
	var link = document.getElementById("lienLBC");
	if (type == "maison")
		type = 1;
	else
		type = 2;

	var newSquare = Math.trunc(square/10);
	square = newSquare * 10;

	link.href = "https://www.leboncoin.fr/recherche/?category=9&locations=" + ville + "&real_estate_type=" + type + "&rooms=" + rooms + "-max&square=" + square + "-max";
}