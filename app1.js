/*guardar el input*/
function tomar_datos(){

	let nombre = document.getElementById("name").value;


	/*una variable local dentro de una funcion vs globales*/
	/*if nombre = ""
	alert(campo obligatorio)
	else sigue 
	*/


/*ELECCION */	
	let nombreHtml = document.getElementById('nombre_html');
/*se esta guardando un div .innerhtml método*/

    nombre_html.innerHTML = "<h1 id = 'saludo'> Hola "	
							+	nombre	+
							" comienza a jugar</h1>";
							
						
	let eleccion = document.getElementById("aparec");
	eleccion.style.display = "block";
	eleccion.style.borderColor = "red";

	/*tutorial del youtube, los fomularios tienen una action por defautl */
}

/*sec ELECCIONES series*/

function mostrar_series(){
	console.log("estoy mostrando las series")

	/*obtener por id el elemento del documento, en este caso todo el div*/
	/*va estar contenido en mi let*/
	let aparecerSeries = document.getElementById("eS")
	let aparecerPeliculas = document.getElementById("eP")

	/*cambia el estilo css dinamicamente, es decir me muestras las series en bloque
	y me ocultas las peliculas cuamdo atraves del listener onclick desato la funcion*/
	aparecerSeries.style.display = "block";
	aparecerPeliculas.style.display = "none"

}



/*sec ELECCIONES peliculas*/


function mostrar_peliculas(){
	
	let aparecerPeliculas = document.getElementById("eP")
	let aparecerSeries = document.getElementById("eS")
	aparecerSeries.style.display = "none";
	aparecerPeliculas.style.display = "block"

}




function obtener_puntaje_series(){
	
	/*obtengo por medio de id la respuesta correcta que esta dentro del form de cada pregunta*/
	let bbt_correcta = document.getElementById("bbt_correcta");
	let got_correcta = document.getElementById("got_correcta");
	let cdp_correcta = document.getElementById("cdp_correcta");
	let hoc_correcta = document.getElementById("hoc_correcta");
	
	/*contador de puntos*/ 
	let puntos =0;


	/*obtengo el div que contiene al input dentro del parrafo correcto  para cambiar el color*/
	let bbt_buena = document.getElementById("bbt_buena")
	let got_buena = document.getElementById("got_buena")
	let cdp_buena = document.getElementById("cdp_buena")
	let hoc_buena = document.getElementById("hoc_buena")
	
	
	/*metodo cambio de color en p*/
	bbt_buena.style.backgroundColor = "#34ee91";
	got_buena.style.backgroundColor = "#34ee91";
	cdp_buena.style.backgroundColor = "#34ee91";
	hoc_buena.style.backgroundColor = "#34ee91";


	/*tiene una metodo que revisa si esta seleccionado o no CHEcKED*/ 
		if (bbt_correcta.checked ) {
			puntos = puntos +100;
			console.log(puntos);

		}else{
			puntos = 0;
		}
	

		if (got_correcta.checked ) {
			puntos = puntos +100;
			console.log(puntos);

		}else{
			puntos =puntos+ 0;
		}
	

		if (cdp_correcta.checked ) {
			puntos = puntos +100;
			console.log(puntos);

		}else{
			puntos =puntos+ 0;
		}


		if (hoc_correcta.checked ) {
			puntos = puntos +100;
			console.log(puntos);

		}else{
			puntos =puntos+ 0;
		}


		let ponerpuntos = document.getElementById('puntos');
		



		ponerpuntos.innerHTML = "<h3 > Has obtenido "	
								+	puntos	+
								"</h3>";
								
	/*obtiene el id fin del sec  volver a jugar*/							
		let final = document.getElementById("fin");
		fin.style.display="block";
	
	}

/*peliculas*/

	function obtener_puntaje_peliculas(){
	

	let hp_correcta = document.getElementById("hp_correcta");
	let sa_correcta = document.getElementById("sa_correcta");
	let jp_correcta = document.getElementById("jp_correcta");
	let lv_correcta = document.getElementById("lv_correcta");
	
	let puntos =0;


	let hp_buena = document.getElementById("hp_buena")
	let sa_buena = document.getElementById("sa_buena")
	let jp_buena = document.getElementById("jp_buena")
	let lv_buena = document.getElementById("lv_buena")
	

	hp_buena.style.backgroundColor = "#34ee91";
	sa_buena.style.backgroundColor = "#34ee91";
	jp_buena.style.backgroundColor = "#34ee91";
	lv_buena.style.backgroundColor = "#34ee91";



		if (hp_correcta.checked ) {
			puntos = puntos +100;
			console.log(puntos);

		}else{
			puntos = 0;
		}
	

		if (sa_correcta.checked ) {
			puntos = puntos +100;
			console.log(puntos);

		}else{
			puntos =puntos+ 0;
		}
	

		if (jp_correcta.checked ) {
			puntos = puntos +100;
			console.log(puntos);

		}else{
			puntos =puntos+ 0;
		}


		if (lv_correcta.checked ) {
			puntos = puntos +100;
			console.log(puntos);

		}else{
			puntos =puntos+ 0;
		}


		let ponerpuntos = document.getElementById('puntos_2');
		



		ponerpuntos.innerHTML = "<h3 > Has obtenido "	
								+	puntos	+
								"</h3>";


		let final = document.getElementById("fin");
		final.style.display="block";
	
	}


/*elemento.accion es metodo*/ 

function cerrar_ventana(){
	window.close();
}