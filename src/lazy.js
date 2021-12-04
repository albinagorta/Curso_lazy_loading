const isIntersecting = (entry) =>{
	return entry.isIntersecting; //true (dentro de pantalla)
}

const observador = new IntersectionObserver((entradas) => {
entradas.filter(isIntersecting).forEach(LoadImagen);
});

const LoadImagen = (entry)=>{
	const imagen=entry.target;
	const urlimag=imagen.dataset.src;
	imagen.src=urlimag;
	observador.unobserve(imagen);
}

export const registerimagen = (imagen)=>{

	observador.observe(imagen)
}
