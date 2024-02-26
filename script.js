let Productos = [ { id: 1, nombre: "limones", precio: 1200,cantidad:"30" },
{ id: 2, nombre: "manzanas", precio: 1800,cantidad:"30"},
{ id: 3, nombre: "peras", precio: 2800,cantidad:"30"},
{ id: 4, nombre: "pepino", precio: 1500,cantidad:"30"},
{ id: 5, nombre: "berenjenas", precio: 1200,cantidad:"30"},
{ id: 6, nombre: "no se", precio: 1900,cantidad:"30" },
{ id: 7, nombre: "sandias", precio: 5800,cantidad:"30"}];

function agregarProducto() {
    let form = document.getElementById('myForm');
    let id = form.id.value;
    let cantidad = Number(form.quantity.value);
    let precio = Number(form.value.value);
    let nombre = form.name.value;

    let productoExistente = Productos.find(producto => producto.id === id);
    if (productoExistente) {
        alert('El producto con este ID ya existe.');
        return;
    }

    let objeto = {
        id: id,
        cantidad: cantidad,
        precio: precio,
        nombre: nombre,
    };

    Productos.push(objeto);
    console.log(Productos);
}

document.querySelector('.formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let nombre = document.getElementById('name').value;
    let id = document.getElementById('id').value;
    let cantidad = Number(document.getElementById('quantity').value);
    let precio = Number(document.getElementById('value').value);

    if (!nombre || !id || !cantidad || cantidad < 1 || !precio || precio < 0) {
        alert('Falta rellenar un espacio.');
    } else {
        agregarProducto();
        alert("el producto ha sido agregado");
    }
});
function mostrarProductos() {
    if (Productos.length === 0) {
        alert('No hay productos.');
    } else {
        let productosString = Productos.map(producto => `ID: ${producto.id}, Nombre: ${producto.nombre}, Cantidad: ${producto.cantidad}, Valor: ${producto.precio}`).join('\n');
        alert(productosString);
    }
}
function eliminarProducto() {
    var id = document.getElementById('id').value;
    var productoExistente = Productos.findIndex(producto => producto.id === id);
    if (productoExistente !== -1) {
        Productos.splice(productoExistente, 1);
        alert('Producto eliminado.');
    } else {
        alert('No se encontró un producto con ese ID.');
    }
}

function buscarProducto(arr, filtro) {
    if (filtro.trim() === "") {
        alert("Por favor, ingresa un valor válido.");
        return;
    }
    const encontrado = arr.find((el) => {
        return el.nombre.includes(filtro);
    });
    if (encontrado === undefined) {
        alert("No se encontró ningún producto con ese nombre.");
    } else {
        alert(JSON.stringify(encontrado, null, 2));
    }
}

