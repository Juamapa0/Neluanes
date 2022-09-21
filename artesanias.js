const cardsContainer = document.querySelector('.cards-container');

const productList = [];
productList.push({
    name:'Pulsera',
    detalle:'Diseño salteño',
    precio: 'Desde:$1000',
    image:'https://lh3.googleusercontent.com/pw/AM-JKLVmrCyfk1AVQuUROgQybtRTAK4JJZqKFwTICJJ0mJDYyd622LFoW7zkioWd7us6eObCuLjGOA5vxjByTPmtUsWW8viG7Zrj0IIyTtzhLiitKZpXezJozCvi14JunJ3HAELIRtkSrAdBKkG4v9gFSIPvbA=s720-no?authuser=0', 
});
productList.push({
    name:'Pulsera',
    detalle:'Diseño salteño',
    price: 'Desde:$1000',
    image:'https://lh3.googleusercontent.com/pw/AM-JKLVSWPbw1xY4NiJZO3Ccj4MYNxg_o0voUWIOqU9OW6GzwNwxBTa1xbY1YCjWvnpMuddrtp5aEYFrRcMXRQCpa5ce7wb6yvc7eS-qMwk2PmP3Yht2JLWmjiJzsFo-j7SDYY3ErxouDKJPb4i8P3igXHaEFA=w720-h341-no?authuser=0', 
});
productList.push({
    name:'Aro',
    detalle:'Diseño salteño',
    precio: 'Desde:$1000',
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
for (product of productList){
   const productCard = document.createElement('div');
   productCard.classList.add('cards-container');

   const productImg = document.createElement('img');
   productImg.setAttribute('src', product.image);

   const productInfo = document.createElement('div');
   productInfo.classList.add('product-info');

   const productInfoDiv = document.createElement('div');

   const productName = document.createElement('p');
   productName.innerTex = product.name;

   const productDetalle = document.createElement('p');
   productDetalle.innerTex = product.name;

   const productPrice = document.createElement('p');
   productPrice.innerTex = '$' + product.price; 

   productInfoDiv.appendChild(productName);
   productInfoDiv.appendChild(productDetalle);
   productInfoDiv.appendChild(productPrice);

   productInfo.appendChild(productInfoDiv);

   productCard.appendChild(productImg);
   productCard.appendChild(productInfo);

   cardsContainer.appendChild(productCard);
}


