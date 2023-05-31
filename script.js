//Se manipula la clase body, se usa querySelector porque se está capturando una clase
const body = document.querySelector('body');
//Para el toggle se usa getElementById, porque el toggle es un ID
const toggle = document.getElementById('toggle');

//Se le dice que la variable toggle, que es donde se va activar la "palanca" de claro a ascuro, se le dice que va manipular el evento.
toggle.onclick = function(){
    //Este es el evento a "encender"
    //Se usa el método toggle y se le crea un activador a través de JS, llamado 'active'
    toggle.classList.toggle('active');
    //Lo mismo con el body, porque se hará el cambio de tema igualmente
    body.classList.toggle('active');
    //ESTOS MÉTODOS YA VIENEN POR DEFAULT EN MODO OFF, y se van a pasar a ON haciendo un clic.
}