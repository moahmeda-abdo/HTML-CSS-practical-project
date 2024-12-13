const productData = JSON.parse(localStorage.getItem('selectedProduct'));

if (productData) {
  const container = document.querySelector('#product-detail-container');

  const detailHTML = `
    <div class="product-detail">
      <img src="${productData.image}" alt="${productData.name}">
      <h1>${productData.name}</h1>
      <p>${productData.description}</p>
      <p>Price: $${productData.price.toFixed(2)}</p>
      <button onclick="goBack()">Back to Products</button>
       <button class="add-to-cart">Add to Cart</button>
    </div>
  `;

  container.innerHTML = detailHTML;
} else {
  alert('No product data available.');
}

function goBack() {
  window.location.href = '../pages/products.html';
}
