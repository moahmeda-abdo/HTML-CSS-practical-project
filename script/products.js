fetch('../data/products.json')
  .then(response => response.json())
  .then(products => {
    const container = document.querySelector('#product-container');

    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>Price: $${product.price.toFixed(2)}</p>
        <button>View Details</button>
      `;

      productCard.addEventListener('click', () => {
        localStorage.setItem('selectedProduct', JSON.stringify(product));
        window.location.href = 'product-detail.html';
      });

      container.appendChild(productCard);
    });
  })
  .catch(error => console.error('Error loading products:', error));
