var dug = document.querySelector("#dugme").addEventListener("click",provera);

$(document).ready(function(){
 		var news = $("#news");
 		var email = $("#email")
 		console.log(news);
 		news.toggle(
 			function(){
			email.show();
 		}, function(){
 			email.hide();
 		})
 	})
 



function provera(){
	proveraIme();
	proveraPrezime();
	proveraPica();
	proveraEmail()
}

function proveraIme(){
	var ime = document.querySelector("#ime");
	var labIme = document.querySelector("#lab-ime");
	var imeRi = /^[A-Z][a-z]{2,}$/;
	var span = labIme.nextSibling;
	console.log(span)
	if (!imeRi.test(ime)) {
		span.classList.remove("nevidljiv");
	}
	else{
		span.classList.add("nevidljiv");
	}
}

function proveraPrezime(){
	var prezime = document.querySelector("#prezime");
	var prezimeRi = /^[A-Z][a-z]{4,}$/;
	var labPrezime = document.querySelector("#lab-prezime");
	var span = labPrezime.nextSibling;
	console.log(span)
	if (!prezimeRi.test(prezime)) {
		span.classList.remove("nevidljiv");
	}
	else{
		span.classList.add("nevidljiv");
	}
}

 function proveraPica(){
 	var lista = document.querySelector("#lista");
 	var span = lista.nextSibling;
 	console.log(span)
 	if (lista.value == "0") {
 		span.classList.remove("nevidljiv");
 	}	
 	else{
 		span.classList.add("nevidljiv");
 	}
 }

 	
function proveraEmail(){
	var emailRi = /^[a-z]+[0-9]+@(gmail.com|yahoo.com)$/;
	var span = email.nextSibling;

	if(email.value != "" && emailRi.test(email.value) == false ){
		span.classList.remove("nevidljiv");
	}
	else{
		span.classList.add("nevidljiv");
	}
}

 	



