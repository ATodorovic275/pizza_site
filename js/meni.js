window.addEventListener("load",ispisivanje);

function ispisivanje(){
	var cistac = "<div class='cleaner'></div>";

	var meniSlikeDesno = ["images/pesto.jpg", "images/beef and jalapeno.jpg", "images/piletina i feta.jpg", "images/toscana.jpg"];
	var slikeiAltDesno = ["pesto", "beef and jalapeno", "piletina i feta", "Italiana toscana"];
	var meniOpisDesno = ["Pesto", "Beef & Jalapeno", "Piletina i feta", "Italiana toscana"];
	var meniPDesno = ["pelat, sir, paradajz, parmezan, pesto sos, bosiljak", "palat, BBQ, mozzarela, bolonjeze sos, ljubicasti luk", "sir, pileci file, sour cream, tikvice, feta", "pelat, mozzarela, prsuta, rukola, cherry paradajz"]
	var meniCeneDesno = ["1060", "1000", "1140", "990"];

	
	var meniSlikeLevo = ["images/vesuvio.jpg", "images/margarita.jpeg", "images/capricoza.jpg", "images/peperoni.jpg","images/vegeteriana.jpg"]
	var slikeAltLevo = ["vesuvio", "margarita", "capricoza", "peperoni", "vegeteriana"];
	
	var meniOpisLevo = ['Vesuvio', 'Margarita', "Capricoza", "Peperoni", "Vegeteriana"];
	var meniPLevo = ['pelat, kackavalj, sunka', 'pelat, paradajz, mocarela, bosiljak', "pelat, sir, sunka, pecurke, origano", "pelat, sir, kulen", "pelat, sir, pecurke, kukuruz, paprika, luk, crne masline"];
	var meniCeneLevo = ["840", "800", "790", "840", "840"];


	var ispis = "";
	deo = document.querySelector("#meni-levo");
	for (var i = 0; i < meniSlikeLevo.length; i++) {
		ispis += "<div class='meni-col'>" + "<div class='meni-img'>" + "<img src='" + meniSlikeLevo[i] +"'" + "alt='"+ slikeAltLevo[i] + "'>" + "</div>" +
		 "<div class='meni-opis'>"+ "<h2>" + meniOpisLevo[i] + "</h2>" + "<p>" + meniPLevo[i] + "</p>" + "</div>" + "<div class='meni-cena'>" +
		 "<p>" + meniCeneLevo[i] + "</p>" + "</div>" + "<div class='cleaner'></div>" + "</div>"  + "</div>";
	}
	deo.innerHTML = ispis;
	deo.innerHTML += cistac;


	// desno
	ispis = "";
	deo = document.querySelector("#meni-desno")
	for (var i = 0; i < meniSlikeDesno.length; i++) {
		ispis += "<div class='meni-col'>" + "<div class='meni-img'>" + "<img src='" + meniSlikeDesno[i] + "'" + "alt='" + slikeiAltDesno[i] +"'>" + "</div>" +
		 "<div class='meni-opis'>"+ "<h2>" + meniOpisDesno[i] + "</h2>" + "<p>" + meniPDesno[i] + "</p>" + "</div>" + "<div class='meni-cena'>" +
		 "<p>" + meniCeneDesno[i] + "</p>" + "</div>" + "<div class='cleaner'></div>" + "</div>"  + "</div>";
	}
	deo.innerHTML = ispis;
	deo.innerHTML += cistac;

}

