//FUNCION DEL BUSCADOR
buscar = function(){
	palabra = document.getElementById("buscador").value;
	productos = document.querySelectorAll(".producto");
	for(producto of productos){
		if(producto.textContent.toLowerCase().includes(palabra.toLowerCase())){
			producto.classList.remove("visually-hidden");
		}else{
			producto.classList.add("visually-hidden");
		}
	}
}

boton = document.getElementById("boton");
boton.addEventListener("click",buscar);

//FUNCION DE LOS FILTROS
filtro = function(opcion){
	var valor;
	productos = document.querySelectorAll(".producto");
	switch(opcion) {
	  case 1:
	    valor = "Shingeki";
	    break;
	  case 2:
	    valor = "Batman";
	    break;
	  case 3:
	    valor = "Demon";
		break;
	  case 4:
		valor = "Harry";
		break;
	  case 5:
		valor = "Jujutsu";
		break;
	  case 6:
		valor = "Naruto";
		break;
	  case 7:
	    valor = "Animales";
		break;
	  case 8:
	    valor = "Remera";
		break;
	  case 9:
	    valor = "Cuadro";
		break;
	}
	for(producto of productos){
		if(producto.textContent.includes(valor)){
			producto.classList.remove("visually-hidden");
		}else{
			producto.classList.add("visually-hidden");
		}
	}
}

todas = function(){
	productos = document.querySelectorAll(".producto");
	for(producto of productos){
		producto.classList.remove("visually-hidden");
	}
}


aShingeki = document.getElementById("aShingeki").addEventListener("click", () => filtro(1));
aBatman = document.getElementById("aBatman").addEventListener("click", () => filtro(2));
aDemon = document.getElementById("aDemon").addEventListener("click", () => filtro(3));
aHarry = document.getElementById("aHarry").addEventListener("click",() => filtro(4));
aJujutsu = document.getElementById("aJujutsu").addEventListener("click",() => filtro(5));
aNaruto = document.getElementById("aNaruto").addEventListener("click",() => filtro(6));
aAnimales = document.getElementById("aAnimales").addEventListener("click",() => filtro(7));
aRemeras = document.getElementById("aRemeras").addEventListener("click",() => filtro(8));
aCuadros = document.getElementById("aCuadros").addEventListener("click",() => filtro(9));
aTodas = document.getElementById("aTodas").addEventListener("click",todas);
aTodasCat = document.getElementById("aTodasCat").addEventListener("click",todas);