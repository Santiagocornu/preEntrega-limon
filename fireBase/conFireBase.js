let Productos = [
    { id: 1, nombre: "limones", precio: 1200, cantidad: "30", imagen: "https://i.pinimg.com/564x/b9/9a/bc/b99abc4f4cf6ed4a385d813bc194fe99.jpg" },
    { id: 2, nombre: "manzanas", precio: 1800, cantidad: "30", imagen: "https://i.pinimg.com/564x/b9/9a/bc/b99abc4f4cf6ed4a385d813bc194fe99.jpg"},
    { id: 3, nombre: "peras", precio: 2800, cantidad: "30", imagen: "https://i.pinimg.com/564x/b9/9a/bc/b99abc4f4cf6ed4a385d813bc194fe99.jpg"},
    { id: 4, nombre: "pepino", precio: 1500, cantidad: "30", imagen: "https://i.pinimg.com/564x/b9/9a/bc/b99abc4f4cf6ed4a385d813bc194fe99.jpg"},
    { id: 5, nombre: "berenjenas", precio: 1200, cantidad: "30", imagen: "https://i.pinimg.com/564x/b9/9a/bc/b99abc4f4cf6ed4a385d813bc194fe99.jpg"},
    { id: 6, nombre: "no se", precio: 1900, cantidad: "30", imagen: "https://i.pinimg.com/564x/b9/9a/bc/b99abc4f4cf6ed4a385d813bc194fe99.jpg" },
    { id: 7, nombre: "sandias", precio: 5800, cantidad: "30", imagen: "https://i.pinimg.com/564x/b9/9a/bc/b99abc4f4cf6ed4a385d813bc194fe99.jpg"}
  ];
  
  function AgregarProducto() {
    // Obtener los valores del formulario
    let nombre = document.getElementById('name').value;
    let id = document.getElementById('id').value;
    let imagen = document.getElementById('imagen').value;
    let cantidad = document.getElementById('quantity').value;
    let valor = document.getElementById('value').value;
  
    // Crear el objeto del producto
    let Producto = {
      id: id,
      img: imagen,
      nombre: nombre,
      precio: valor,
      stock: cantidad
    };
  
    // Guardar el producto en la base de datos
    firebase.database().ref('Productos/' + id).set(Producto)
    .then(() => console.log('Producto agregado.'))
    .catch((error) => console.error('Error: ', error));
  }
  
  function MostrarProductos() {
    firebase.database().ref('Productos/').once('value').then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No hay productos.");
      }
    }).catch((error) => {
      console.error(error);
    });
  }
  
  function EliminarProducto() {
    let id = document.getElementById('id').value;
    firebase.database().ref('Productos/' + id).remove()
      .then(() => console.log('Producto eliminado.'))
      .catch((error) => console.error('Error: ', error));
  }