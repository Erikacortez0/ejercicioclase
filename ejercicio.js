//ejercicio 1
const contador = 1;
console.log(contador);

if(true){
  const contador = 5;
  console.log(contador);
}

//ejercicio 2


const persona = {
  nombre: "Nestor",
  apellido: "Rivas"
}
persona.nombre = "Stanley";
console.log(persona.nombre);

//ejercicio 3

//objetos literales y optional chaining operator
const frutas = ["pera", "manzana", "sandia"];

console.log(frutas[2]);




//ejercicio 4




//obejtos literales no indexados
const animal= {
  color: "naranja",
  nombre: "simba",
  rugiendo: true
  
}
console.log("Este leon es de color" + animal.color);
console.log("y su nombre es: " + animal.nombre);

console.log(animal["rugiendo"]);

//ejercicio 5
const tareas = {
  "2359-91k83204u23rhrefiu": {
    title: "tarea #01"
  }
}

console.log(tareas["2359-91k83204u23rhrefiu"].title);




//ejercicio 6

//obejtos literales no indexados

const animal = {
  color: "naranja",
  nombre: "simba",
  rugiendo: true,
  favoritos:{
    dia: {
      ok: true,
    },
    noche:{
      ok: false
    }
    }
  }
console.log(animal.favoritos.dia?.l.ok);


//ejercicio 7
//destructuring
const animal = {
  color: "naranja",
  nombre: "simba",
  rugiendo: true,
  favoritos:{
    dias: {
      ok: true,
    },
    noche:{
      ok: false
    }
  }
}
//guardar elñ valor de la propiedad color en una constante
const color = animal.color;
const nombre = animal.nombre;

constante.log("color: "+ color + ", animal:" + nombre);


//ejercicio 8

  const animal = {
  color: "azul",
  nombre: "torogoz",
  volando: true,

}
  //destructuring objetos literales
  const {color, nombre, volando} = animal;
console.log("El" + nombre + "es de color: "+ color);

//array indexados
const frutas = ["peras", "manzanas", "sandias"];

//destructuring array
const [pera, manzana, sandia] = frutas;
console.log("a mi me gusta mucho la " + pera)
