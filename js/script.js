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
  <section class="portafolio-text">
   <h2 data-name=${e.name.first}><i class="fa fa-circle-o" aria-hidden="true"></i>${e.name.first}</h2>
  <p>${e.login.username}</p>
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

    
   
   console.log(valor);
   }


getConnection()



