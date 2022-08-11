validarCantidad = function(){
	cantidad = document.getElementById("cantidad").value;
	if(cantidad.length < 1){
		document.getElementById("cantidadInvalida").classList.remove("visually-hidden");
   		document.getElementById("cantidad").classList.add("border");
    	document.getElementById("cantidad").classList.add("border-danger");
    	document.getElementById("cantidadValida").classList.add("visually-hidden");
    	document.getElementById("cantidad").classList.remove("border");
    	document.getElementById("cantidad").classList.remove("border-success");
		valido = Boolean(false);
	}else{
		cantidad = parseInt(cantidad);
		if(cantidad < 1){
			document.getElementById("cantidadInvalida").classList.remove("visually-hidden");
	   		document.getElementById("cantidad").classList.add("border");
	    	document.getElementById("cantidad").classList.add("border-danger");
	    	document.getElementById("cantidadValida").classList.add("visually-hidden");
	    	document.getElementById("cantidad").classList.remove("border");
	    	document.getElementById("cantidad").classList.remove("border-success");
			valido = Boolean(false);
		}else{
			location.href="formularioEnvio.html";
		}
	}
	return valido;
}

botonCompra = document.getElementById("comprar");
botonCompra.addEventListener("click",validarCantidad);