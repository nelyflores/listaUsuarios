
function mostrarDetalles(){
 var contentModal=document.getElementById('contenedor');
 var imagen= localStorage.getItem("Imagen");
 var correo= localStorage.getItem("Correo");
 var direccion=localStorage.getItem("Direccion");
 var telefono=localStorage.getItem("Telefono");
 var nombre=localStorage.getItem("Nombre");
 var username=localStorage.getItem("Username");

   

     var modal =`<div class="modal">
   <div class="profile__card">
  <div class="header__modal">
  <img src="${imagen}" class="modal__img">
    <h2 class="datos_api">
    <span>${nombre}</span> <br>
    <span>${username}</span><br>
    <span>${direccion}</span><br>
    <span>${correo}</span><br>
    <span>${telefono}</span>
    </h2>
  </div>
  </div>
  <div class="content__modal">
  <p>YOU AND LULA</p>
  <h2>TextMessages<span>10k+</span></h2>
  <h2>Photo & Images <span>562</span></h2>
  <h2>Videos <span>13</span></h2>
  <h2>Emoticons <span>1539</span></h2>
    
  </div>
  <div class="modal__boton">x</div>
</div>
</div>`;

    contentModal.insertAdjacentHTML('beforeEnd',modal)
    
   
   console.log(valor);
   }
   mostrarDetalles();
