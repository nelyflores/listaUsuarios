
function mostrarDetalles(){
 var contentModal=document.getElementById('contenedor');
 var imagen= localStorage.getItem("Imagen");
 var correo= localStorage.getItem("Correo");
 var direccion=localStorage.getItem("Direccion");
 var telefono=localStorage.getItem("Telefono");
 var nombre=localStorage.getItem("Nombre");
 var username=localStorage.getItem("Username");
 var modal =`
  <div class="modal">
    <div class="tarjeta__detalle">
      <div class="tarjeta__header">
        <img src="${imagen}" class="modal__img">
      <div class="tarjeta__informacion">
        <h2 class="datos_api">
          <span>${nombre}</span> <br>
          <span>${username}</span><br>
        </h2>
      </div> 
      </div>
      <div class="content__modal">
        <span>${direccion}</span><br>
        <span>${correo}</span><br>
        <span>Tel: ${telefono}</span>
        <p>YOU AND LULA</p>
        <p>Text Messages<span>10k+</span></p><hr>
        <p>Photo & Images <span> 562 </span></p><hr>
      </div>
      <div class="modal__boton"><i  onclick="regresar()"class="fa fa-chevron-left" aria-hidden="true"></i></div>
    </div>
  </div>`;

 contentModal.insertAdjacentHTML('beforeEnd',modal)
}
function regresar(){
  var regresarInicio="index.html"
  window.location=regresarInicio;
}
mostrarDetalles();
