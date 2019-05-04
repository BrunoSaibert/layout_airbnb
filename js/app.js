const container = document.querySelector(".container");

fetch('http://airbnb.douglasmaia.com/api/properties')
  .then(response => response.json())
  .then(result => {
    // const dados = JSON.stringify(result);
    // document.getElementById('demo').innerHTML = dados;


    result.forEach(dado => {
      // console.log(dado);

      const li = document.createElement('li');
      li.classList.add('card');

      const card_content = `
      <img src="${dado.photo}" alt=""
      class="card-img" />
      <div class="card-content">
      <span class="card-type">${dado.property_type} · ${dado.city}</span>
      <h2 class="card-title">${dado.name}</h2>
      <span class="card-price">R$${dado.price} por noite</span>
      <a href="#" class="card-button">Ver mais</a>
      </div>
      `;
      if (dado.photo !== null) {
        li.innerHTML = card_content;
        container.appendChild(li);
      }
    });

  })
  .catch(function (err) {
    console.error(err);
  })