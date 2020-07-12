$("#hide").click(function(){
    $("p").hide();
  });
  
  $("#show").click(function(){
    $("p").show();
  });

  $(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideDown("slow");
    });
  });

  const contenedor = document.querySelector('#contenedorDeProductos');

  function cargarItems(){
      fetch('./data.JSON')
          .then(respuesta => respuesta.json()) 
          .then(productos => {
              productos.forEach(prod => {
                  const item = document.createElement('div');
                  item.classList.add('col,s12,m6,xl4');
                  item.innerHTML += `
                    <div class="card">
                      <div class="card-image">
                          <img src="${prod.imagen}" alt="${prod.descripcion}">
                      </div>
                      <div class="card-content">
                        <span class="card-title">${prod.titulo}</span>
                      </div>
                      <button class="btn waves-effect" type="submit" id="${prod.id}" onclick="alert('hola')">COMPRAR</button>
                    </div>
                  `;
                  contenedor.appendChild(item);                
              });
          }) 
          .catch(error => console.log('Hubo un error : ' + error.message))
  }
  
  $(document).ready(function(){
    cargarItems();
    $('.sidenav').sidenav();
  });
