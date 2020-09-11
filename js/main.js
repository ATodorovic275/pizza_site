$(document).ready(function(){

	// scroll to top
	
	var futer = $("#futer");
	var ispis = "<div id='scroll'>" + "<i class='fas fa-arrow-up fa-2x'></i>" + "</div>";
	futer.append(ispis);

	$(document).scroll(function() {
		  var y = $(this).scrollTop();
		  if (y > 500) {
		  	  $('#scroll').fadeIn(1500);
		  } else {
		  	  $('#scroll').fadeOut(1000);
		  }
	});
	console.log($("#scroll"))
	$("#scroll").click(function(){
		$.scrollTo(0, 1200);
	})

	var hamburger = $("#hamburger");
	var nav = $(".navbar");
	hamburger.toggle(
	function(){
	nav.fadeIn();
	}, function(){
	nav.fadeOut();
	})

})




window.addEventListener("load",ispisivanje);


function ispisivanje(){

	// NAVIGACIJA

	var deoStrane = document.querySelector("#navigation .container");
	var lista = ['Pocetna','O nama','Meni', 'Kontakt', 'Autor'];
	var hrefAtribut = ["index.html", "onama.html", "meni.html", "kontakt.html", "oautoru.html"]
	var ispis;
	ispis = "<ul>"
	for (var i = 0; i < lista.length; i++) {
		ispis += "<li><a href='" + hrefAtribut[i] + "'>" + lista[i] + "</a></li>";
	}
	ispis += "</ul>";
	deoStrane.innerHTML = ispis;
	var cistac = "<div class='cleaner'></div>";
	

	// futer, prodajna mesta

	var nizLokacije = ['Čukarica, Banovo brdo, Lješka 94', 'Požeska bb (kod pijace na Banovom brdu)', 'Zvezdara, Bulevar Kralja Aleksandra 388']
	var lokacije = document.querySelector("#lokacije");
	ispis = "<ul>";
	ispis += "<li>Posetite nas</li>"
	for (var i = 0; i < nizLokacije.length; i++) {
		ispis += "<li>" + nizLokacije[i] + "</li>";
	}
	ispis += "</ul>"
	lokacije.innerHTML += ispis;
	document.querySelector("#futer .container .row").innerHTML += cistac;

	// mapa sajta

	var hrefAtribut2 = ["index.html", "onama.html", "meni.html", "kontakt.html", "oautoru.html", "dokumentacija.pdf", "sitemap.xml"]
	var lista2 = ['Pocetna','O nama','Cenovnik', 'Kontakt', 'Autor', "Dokumentacija", "Sitemap"];
	var mapa = document.querySelector("#mapa");
	var ispis = "<ul>"
	for (var i = 0; i < lista2.length; i++) {
		ispis += "<li><a href='" + hrefAtribut2[i] + "'>" + lista2[i] + "</a></li>";
	}
	ispis += "</ul>";
	mapa.innerHTML += ispis;

	// social - icons

	var mreze = $("#social");
	var mrezeHref = ['https://www.facebook.com/', "https://www.instagram.com/", "https://twitter.com/"]
	var nizMreze = ['fa fa-facebook-official', 'fab fa-instagram', 'fa fa-twitter-square'];
	var ispis = "";
	for (var i = 0; i < nizMreze.length; i++) {
		ispis += "<a href='" + mrezeHref[i] + "'>" + "<i class='" + nizMreze[i] + " fa-3x'></a></i>"
	}
	mreze.append(ispis);
}

