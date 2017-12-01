const content= document.getElementById('content');

const getConnection = () =>{
  URL = 'https://randomuser.me/api/?results=50';
  fetch(URL)
  .then(response => response.json())
  .then(function(data) {
    data.results.forEach(e=>{
      drawUser(e);

      console.log(e);
    });
  });
};
const drawUser = e =>{
  const hero=`
  <div id="${e.id.value}" class="galeria__img content-img" onclick="mostrarDetalles(this)" >
    <img src="${e.picture.large}" data-imagen= "${e.picture.large}">
  <section class="portafolio-text" data-correo="${e.email}" data-direccion="${e.location.street}" data-telefono"=${e.phone}" >
    <h2 data-name=${e.name.first}><i class="fa fa-circle-o" aria-hidden="true"></i>${e.name.first}</h2>
    <p data-username=${e.login.username}>${e.login.username}</p>
  </section>
  </div>
  `;
  content.insertAdjacentHTML('beforeEnd',hero);
};

function mostrarDetalles(caja){
  var modalpag="modal.html";
  window.location=modalpag;
    var nombre = caja.childNodes;
    var valor = nombre[1].attributes[1].nodeValue;
    var valorcorreo=nombre[3].attributes[1].nodeValue;
    var valordireccion=nombre[3].attributes[2].nodeValue;
    var valorTelefono=nombre[3].attributes[3].nodeValue;
    var valornombre=nombre[3].childNodes[1].attributes[0].nodeValue;
    var valorusername=nombre[3].childNodes[3].attributes[0].nodeValue;
    localStorage.setItem("Imagen", valor);
    localStorage.setItem("Correo", valorcorreo);
    localStorage.setItem("Direccion", valordireccion);
    localStorage.setItem("Telefono", valorTelefono);
    localStorage.setItem("Nombre", valornombre);
    localStorage.setItem("Username", valorusername);
  console.log(valorusername);
}


getConnection()



