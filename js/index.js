console.log("Radi");
$(document).ready(function(){
slajder();

})

window.addEventListener("load",ispisivanje);


function ispisivanje(){

	// SLAJDER

	var deoStraneSlajder = document.querySelector("#slajder");
	var nizSlajderSlike = ['images/akcija-slider.jpg', 'images/restoran2.jpg'];
	var slajderAlt = ["akcija", "restoran"];
	var ispis = "";
	for (var i = 0; i < nizSlajderSlike.length; i++) {
		ispis += "<img src='" + nizSlajderSlike[i] + "'" + "alt='" + slajderAlt[i] + "'>";
	}
	deoStraneSlajder.innerHTML = ispis;
	$("#slajder img:first").addClass('aktivna');

	
	// slike 

	var nizDostavaSlike = ['images/dostava.png', 'images/open.png', 'images/online.png',];
	var dostavaAlt = ["dostava", "narucite", "otvoreno"]
	var ispis = "";
	var deo = document.querySelector("#proba");
	for (var i = 0; i < nizDostavaSlike.length; i++) {
		ispis += "<div class='col-dostava'>" + "<a href='#'>" + "<div class='dostava-img'>" + 
	 	"<img src='" + nizDostavaSlike[i] + "'" + "alt='" + dostavaAlt[i] +"'>" + "</a>" + "</div>" + "</div>"
	}
	deo.innerHTML = ispis;
	var cistac = "<div class='cleaner'></div>";
	deo.innerHTML += cistac;


	// ispisivanje htagova
	var dostavaBlok = document.querySelectorAll(".col-dostava");
	var nizHTag = ['Stizemo brzo','Radimo 24/7','Narucite online'];
	var ispis = "";
	for (var i = 0; i < dostavaBlok.length; i++) {
		ispis = "<h2>" + nizHTag[i] + "</h2";
		dostavaBlok[i].innerHTML += ispis;
	}


	// ispisivanje pTagova

	var nizPtagovi = ["Prosecno vreme dostave je 30min, inace dobijate naruzdbinu besplatno", 
					"Uvek je pravo vreme za picu",
					"Uz samo nekoliko klikova narucite putem sajta"];
	var ispis = "";
	for (var i = 0; i < dostavaBlok.length; i++) {
		ispis = "<p>" + nizPtagovi[i] + "</p>";
		dostavaBlok[i].innerHTML += ispis; 
	}


	// ispisivanje slika galerija

	var galerija = document.querySelector(".galery")
	var ispis = "";
	var galerijaSlike = ["images/margarita.jpeg", 'images/capricoza.jpg', 'images/peperoni.jpg', 'images/vesuvio.jpg', 'images/Vegeteriana.jpg', 'images/capricoza.jpg']
	var galerijaMaleSlike = ["images/margarita-small.jpeg", "images/capricoza-small.jpg", "images/peperoni-small.jpg","images/vesuvio-small.jpg","images/vegeteriana-small.jpg","images/capricoza-small.jpg"]

	for (var i = 0; i < galerijaSlike.length; i++) {
		ispis += "<a href='" + galerijaSlike[i] + "'data-lightbox='mygallery'>" + "<img src='" + galerijaMaleSlike[i] + "'>";
	}
	galerija.innerHTML = ispis;
}

function slajder(){
		var trenutni = $("#slajder .aktivna");
		var sledeci = trenutni.next().length ? trenutni.next() : trenutni.parent().children(":first");
		trenutni.hide().removeClass("aktivna");
		sledeci.fadeIn().addClass("aktivna");
		setTimeout(slajder, 3000);
	}

