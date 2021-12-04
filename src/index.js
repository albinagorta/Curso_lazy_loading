import {registerimagen} from './lazy.js'

const btnAgregar = document.querySelector("button");


const listaimagenes1=document.getElementById("images");

// Cargue las imagenes existentes cuando cargue la página
const listaimagenes = document.querySelectorAll("img[data-src]");
listaimagenes.forEach(registerimagen);


const maximun = 121;
const minimun = 1;

const idimg = () => Math.floor(Math.random()*(maximun - minimun)+ minimun)

const createimagen = () => {
	const divpadreimg =document.createElement('div');
	divpadreimg.className ="p-4";

	const imagen =document.createElement('img');
	imagen.className ="mx-auto rounded-md bg-gray-300";
	imagen.width ="320";
	imagen.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=";
	imagen.dataset.src=`https://randomfox.ca/images/${idimg()}.jpg`;
	divpadreimg.appendChild(imagen);
	
	return [divpadreimg,imagen];
} 

const agregarnuevo = () =>{
	const [nuevoimg,imagen]=createimagen();
	listaimagenes1.append(nuevoimg);
	registerimagen(imagen);
}		



btnAgregar.addEventListener("click", agregarnuevo);