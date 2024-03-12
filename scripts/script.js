let Productos =JSON.parse(localStorage.getItem('Productos')) || [ { id: 1, nombre: "limones", precio: 1200, cantidad: "30", imagen: "https://i.pinimg.com/564x/b9/9a/bc/b99abc4f4cf6ed4a385d813bc194fe99.jpg" },
{ id: 2, nombre: "manzanas", precio: 1800, cantidad: "30", imagen: "https://i.pinimg.com/564x/b9/9a/bc/b99abc4f4cf6ed4a385d813bc194fe99.jpg"},
{ id: 3, nombre: "peras", precio: 2800, cantidad: "30", imagen: "https://i.pinimg.com/564x/b9/9a/bc/b99abc4f4cf6ed4a385d813bc194fe99.jpg"},
{ id: 4, nombre: "pepino", precio: 1500, cantidad: "30", imagen: "https://i.pinimg.com/564x/b9/9a/bc/b99abc4f4cf6ed4a385d813bc194fe99.jpg"},
{ id: 5, nombre: "berenjenas", precio: 1200, cantidad: "30", imagen: "https://i.pinimg.com/564x/b9/9a/bc/b99abc4f4cf6ed4a385d813bc194fe99.jpg"},
{ id: 6, nombre: "no se", precio: 1900, cantidad: "30", imagen: "https://i.pinimg.com/564x/b9/9a/bc/b99abc4f4cf6ed4a385d813bc194fe99.jpg" },
{ id: 7, nombre: "sandias", precio: 5800, cantidad: "30", imagen: "https://i.pinimg.com/564x/b9/9a/bc/b99abc4f4cf6ed4a385d813bc194fe99.jpg"}];

function agregarProducto() {
    let form = document.getElementById('myForm');
    let id = form.id.value;
    let cantidad = Number(form.quantity.value);
    let precio = Number(form.value.value);
    let nombre = form.name.value;
    let imagen = form.imagen.value; 

    let productoExistente = Productos.find(producto => producto.id === id);
    if (productoExistente) {
        alert('El producto con este ID ya existe.');
        return;
    }
    let nuevoProducto = {
        id: id,
        nombre: nombre,
        precio: precio,
        cantidad: cantidad,
        imagen: imagen
    };
    Productos.push(nuevoProducto);
    localStorage.setItem('Productos', JSON.stringify(Productos));
    alert('Producto agregado exitosamente!');
}
function agregarProducto(nombre, id, cantidad, precio, imagen) {
    let productoExistente = Productos.find(producto => producto.id === id);
    if (productoExistente) {
        alert('El producto con este ID ya existe.');
        return;
    }
    let nuevoProducto = {
        id: id,
        nombre: nombre,
        precio: precio,
        cantidad: cantidad,
        imagen: imagen
    };
    Productos.push(nuevoProducto);
    localStorage.setItem('Productos', JSON.stringify(Productos));
    alert('Producto agregado exitosamente!');
}

function handleFormSubmit(event) {
    event.preventDefault(); 
    let nombre = document.getElementById('name').value;
    let id = document.getElementById('id').value;
    let cantidad = Number(document.getElementById('quantity').value);
    let precio = Number(document.getElementById('value').value);
    let imagen = document.getElementById('imagen').value;

    if (!nombre || !id || !cantidad || cantidad < 1 || !precio || precio < 0 || !imagen) {
        alert('Falta rellenar un espacio.');
    } else {
        agregarProducto(nombre, id, cantidad, precio, imagen);
        alert("el producto ha sido agregado");
    }
}


function mostrarProductos() {
    if (Productos.length === 0) {
        alert('No hay productos.');
    } else {
        let productosString = Productos.map(producto => `ID: ${producto.id}, Nombre: ${producto.nombre}, Cantidad: ${producto.cantidad}, Valor: ${producto.precio}, Imagen: ${producto.imagen}`).join('\n');
        alert(productosString);
    }
}

function eliminarProducto() {
    var id = document.getElementById('id').value;
    var productoExistente = Productos.findIndex(producto => producto.id === id);
    if (productoExistente !== -1) {
        Productos.splice(productoExistente, 1);
        localStorage.setItem('Productos', JSON.stringify(Productos));
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

