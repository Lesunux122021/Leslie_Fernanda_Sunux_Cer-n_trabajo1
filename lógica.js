let contador = 0;

let boton = document.getElementById("boton");
let parrafo = document.querySelector("p");
boton.addEventListener("click", function() {
    contador++;
    parrafo.textContent = contador;
});