
body{
  margin:0;
  background: #C6D4EA;
}
img{
  display: block;
  max-width: 100%;
}
.galeria{
  width: 90%;
  margin:auto;
  list-style: none;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.galeria li{
  margin:5px;
}
.galeria img{
  width: 150px;
  height: 100px;

}
.modal{
  position: fixed;
  background: rgba(0,0,0,0.8);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.modal h3{
  color: #fff;
}
.imagen{
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
}
.imagen a{
  margin: 0;
  height: 100%;
}
.imagen img{
  width:500px;
  height: 100%;
  max-width: 100%;
  border:7px;

}
$('.galeria__img').click(function(e){
  var img=e.target.src;
  var modal =`<div class="modal">
   <div class="profile__card">
  <div class="header__modal">
  <img src="${img}" class="modal__img">
    <h2 class="datos_api">
    <span>nombre</span> <br>
    <span>username</span><br>
    <span>direccion</span><br>
    <span>email</span><br>
    <span>telefono</span>
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
  $('body').append(modal);
});


$(document).ready(cargarPagina);