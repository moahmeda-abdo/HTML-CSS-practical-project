
function renderCart(cartData) {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotalContainer = document.getElementById("cart-total");

    cartItemsContainer.innerHTML = ""; 
    let total = 0;

    cartData.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("cart-item");
        productDiv.innerHTML = `
            <p>${product.name} - $${product.price} x ${product.quantity}</p>
            <p>Total: $${(product.price * product.quantity).toFixed(2)}</p>
        `;
        cartItemsContainer.appendChild(productDiv);

        total += product.price * product.quantity;
    });

 
    cartTotalContainer.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
}


fetch('../data/cart.json')
    .then(response => response.json())
    .then(data => renderCart(data))
    .catch(error => {
        console.error('Error loading cart data:', error);
    });
