var image = document.getElementById('imageControl');
var p1 = document.getElementById('p1');
var left = document.getElementById('buttonLeft');
var right = document.getElementById('buttonRight');
const paragraph = [
    'Asignacion de los botones de juego avanzado',
    'Pulsa el botón de programación en la parte posterior del mando',
    'El indicador de conexión LED parpadeará para indicar que el mando está en modo de asignación.',
    'Pulsa el botón que deseas asignar',
    'Luego pulsa el boton de juego avanzado AGR o AGL  que deseas asignar.',
    'El indicador de conexión LED dejará de parpadear, señalando que se ha configurado el botón de juego avanzado',
]
nextText = 0;

left.addEventListener("click", function(){
    nextText--;
    image.style.backgroundImage = 'url(../Images/pdp_control_blue.jpg)';
    // cambiando el texto hacia atras
    p1.innerHTML = paragraph[nextText];
    console.log(nextText);
    // Checando si no se sale del limite
    if(nextText < 0){
        left.style.display = 'none';
    }
    else{
        left.style.display = 'block';
    }
});
right.addEventListener("click", function(){
    nextText++;
    image.style.backgroundImage = 'url(../Images/pdp_control_blue.jpg)';
    // cambiando el texto hacia adelante
    p1.innerHTML = paragraph[nextText];
    console.log(nextText);
    // Checando si no se sale del limite
    if(nextText > 6){
        right.style.display = none;
    }
    else{
        right.style.display = block;
    }
});
