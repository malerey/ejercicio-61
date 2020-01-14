// 1. Recorrer el array de usuarios y por cada usuario
// crear una card con sus datos 

// 2. Manejar sistema de likes para que cada clic en cada 
// foto de usuario le de likes solo a ese usuario. 

const usuarios = [
  {
    nombre: "Pepita Gomez", 
    descripcion: "Maquetadora",
    foto: "img/foto.jpeg"
  },
  {
    nombre: "Mariquita Thompson", 
    descripcion: "Cantante de himno",
    foto: "img/foto.jpeg"
  },
  {
    nombre: "Pancracia Williams", 
    descripcion: "Tenista",
    foto: "img/foto.jpeg"
  },
  {
    nombre: "Trufa Rodriguez Larreta", 
    descripcion: "Cantante de feliz cumpleanos",
    foto: "img/foto.jpeg"
  },
]



const imagen = document.querySelector(".imagen")
const corazon = document.querySelector(".fa.fa-heart")
const likes = document.querySelector("#likes")

imagen.onclick = () => {
  corazon.classList.add("rojo")
  let cantidadDeLikes = Number(likes.textContent)
  cantidadDeLikes++
  likes.textContent = cantidadDeLikes
}

corazon.onclick = () => {
  if (likes.textContent > "0") {
  let cantidadDeLikes = Number(likes.textContent)
  cantidadDeLikes--
  likes.textContent = cantidadDeLikes
  }
  console.log(likes.textContent)
  if (likes.textContent === "0") {
    corazon.classList.remove("rojo")
  }
  else {
    corazon.classList.add("rojo")
  }

}