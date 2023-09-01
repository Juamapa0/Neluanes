const cardsContainer = document.querySelector('.cards-container');
// creo un array vacio
const productList = [];
// agrego elementos al array
productList.push({
    file:'pulsera_plata.html',
    name:'Pulsera',
    detalle:'Diseño salteño',
    price: 'Desde:$1000',
    image:'https://lh3.googleusercontent.com/pw/AM-JKLVmrCyfk1AVQuUROgQybtRTAK4JJZqKFwTICJJ0mJDYyd622LFoW7zkioWd7us6eObCuLjGOA5vxjByTPmtUsWW8viG7Zrj0IIyTtzhLiitKZpXezJozCvi14JunJ3HAELIRtkSrAdBKkG4v9gFSIPvbA=s720-no?authuser=0', 
});
productList.push({
    file: 'pulsera_alpaca.html',
    name:'Pulsera',
    detalle:'Diseño salteño',
    price:'Desde:$800',
    image:'https://lh3.googleusercontent.com/pw/AM-JKLVSWPbw1xY4NiJZO3Ccj4MYNxg_o0voUWIOqU9OW6GzwNwxBTa1xbY1YCjWvnpMuddrtp5aEYFrRcMXRQCpa5ce7wb6yvc7eS-qMwk2PmP3Yht2JLWmjiJzsFo-j7SDYY3ErxouDKJPb4i8P3igXHaEFA=w720-h341-no?authuser=0', 
});
productList.push({
    file: 'aros_alpaca.html',
    name:'Aro',
    detalle:'Diseño salteño',
    price:'Desde:$100',
    image:'https://lh3.googleusercontent.com/pw/AM-JKLUmVq6IPaV0EM0_YtF6Pbu322YPQ29SHfUvsVckbWECa36xYxIMXHrOwkQ0f-l6n5Di9Xm2ixlmUxAnYLX62RFFa4Yq7LmziBD3EOgX8VaZOacIeJ_a1hAmPuTiQFMRV2BEzdny3pH4k5-mUPkbdzNPxA=w720-h341-no?authuser=0', 
});
productList.push({
  file: 'aros_plastico.html',
  name:'Aro plastico',
  detalle:'Diseño salteño',
  price:'Desde:$100',
  image:'https://lh3.googleusercontent.com/pw/AM-JKLUmVq6IPaV0EM0_YtF6Pbu322YPQ29SHfUvsVckbWECa36xYxIMXHrOwkQ0f-l6n5Di9Xm2ixlmUxAnYLX62RFFa4Yq7LmziBD3EOgX8VaZOacIeJ_a1hAmPuTiQFMRV2BEzdny3pH4k5-mUPkbdzNPxA=w720-h341-no?authuser=0', 
});


/*<div class="cards-container">      
    <div class="product-card">
      <a href="./detalleartesanias.html">           
      <img src="https://lh3.googleusercontent.com/pw/AM-JKLVmrCyfk1AVQuUROgQybtRTAK4JJZqKFwTICJJ0mJDYyd622LFoW7zkioWd7us6eObCuLjGOA5vxjByTPmtUsWW8viG7Zrj0IIyTtzhLiitKZpXezJozCvi14JunJ3HAELIRtkSrAdBKkG4v9gFSIPvbA=s720-no?authuser=0"alt="pulsera">
      <div class="product-info">
        <div>
        <p>PULSERAS DE ALPACA</p>
        <p>DISEÑO SALTEÑO</p>
        <p>Desde: $1000</p>
        </div>
      </div>
      </a>    
    </div>*/ 

// for...of recorre el array y ejecuta un bloque de codigo con cada elemento
for (product of productList){
  console.log(product);
  // crea un elemento <div>
  const productCard = document.createElement('div');
  // agrega la clase <div class="product-card">
  productCard.classList.add('product-card');
  // crea un elemento <a>
  const productA = document.createElement('a');
  // agrega href  y ./ a la etiqueta <a>
  productA.setAttribute('href', './artes/'+ product.file);
  // crea  un elemento img
  const productImg = document.createElement('img');
  // agrega el src y el product.image ¿?
  productImg.setAttribute('src', product.image);
  // crea un elemento div
  const productInfo = document.createElement('div');
  // agrega la clase product-info
  productInfo.classList.add('product-info');
  // crea un elemnto div
  const productInfoDiv = document.createElement('div');
  // crea un elemento <p>
  const productName = document.createElement('p');
  // le agrega el texto del array que está en name
  productName.innerText = product.name;
  // crea un elemento <p>
  const productDetalle = document.createElement('p');
  // le agrega el texto del array que está en detalle
  productDetalle.innerText = product.detalle;
  // crea un elemento <p>
  const productPrice = document.createElement('p');
  // le agrega el texto del array que está en price
  productPrice.innerText =  product.price; 

  productInfoDiv.appendChild(productName);
  productInfoDiv.appendChild(productDetalle);
  productInfoDiv.appendChild(productPrice);

  productInfo.appendChild(productInfoDiv);

  productA.appendChild(productImg);
  productA.appendChild(productInfo);
  productCard.appendChild(productA);

  cardsContainer.appendChild(productCard);
}


