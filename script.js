let Productos = [];

function agregarProducto() {
    let form = document.getElementById('myForm');
    let id = form.id.value;
    let cantidad = Number(form.quantity.value);
    let valor = Number(form.value.value);
    let nombre = form.name.value;

    let productoExistente = Productos.find(producto => producto.id === id);
    if (productoExistente) {
        alert('El producto con este ID ya existe.');
        return;
    }

    let objeto = {
        id: id,
        cantidad: cantidad,
        valor: valor,
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
    let valor = Number(document.getElementById('value').value);

    if (!nombre || !id || !cantidad || cantidad < 1 || !valor || valor < 0) {
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
        let productosString = Productos.map(producto => `ID: ${producto.id}, Nombre: ${producto.nombre}, Cantidad: ${producto.cantidad}, Valor: ${producto.valor}`).join('\n');
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


