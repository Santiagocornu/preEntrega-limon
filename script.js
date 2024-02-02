document.querySelector('.formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var nombre = document.getElementById('name').value;
    var correoElectronico = document.getElementById('email').value;
    var producto = document.getElementById('product').value;
    var cantidad = document.getElementById('quantity').value;
    var valor = document.getElementById('value').value;
    var precio=0;
    if (cantidad < 10) {
        precio=valor*cantidad;
    } else if (cantidad > 10 && cantidad <= 15) {
        precio=(valor*cantidad)*0.95;
    } else if (cantidad > 15) {
        precio=(valor*cantidad)*0.85;
    }

    if (!nombre || !correoElectronico || !producto || !cantidad || cantidad < 1 || !valor || valor < 0) {
        alert('Falta rellenar un espacio.');
    }

    if (nombre && correoElectronico && producto && cantidad && cantidad >= 1 && valor && valor >= 0) {
        alert("el precio final es: " + precio)
    }
});

let count = 0;

function buttonClick() {
    count++;
    if (count >= 10) {
        document.getElementById("myButton").disabled = true;
        alert("JAJAAJAJAJAJAJAJAJAJ no me podes tocar mas")
    }
}

document.getElementById("myButton").addEventListener("click", buttonClick);