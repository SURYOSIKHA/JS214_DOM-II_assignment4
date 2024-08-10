let products = [];

function addProduct() {
    const name = document.getElementById('productName').value;
    const price = parseFloat(document.getElementById('productPrice').value);
    const rating = parseFloat(document.getElementById('productRating').value);

    if (name && price && rating) {
        products.push({ name, price, rating });
        document.getElementById('productName').value = '';
        document.getElementById('productPrice').value = '';
        document.getElementById('productRating').value = '';
        updateCharts();
    } else {
        alert("Please fill in all fields.");
    }
}

function updateCharts() {
    const priceChart = document.getElementById('priceChart');
    const ratingChart = document.getElementById('ratingChart');

    priceChart.innerHTML = '';
    ratingChart.innerHTML = '';

    products.forEach(product => {
        const priceBar = document.createElement('div');
        priceBar.className = 'bar';
        priceBar.style.width = product.price + 'px';
        priceBar.innerHTML = `<span class="bar-label">${product.name} - $${product.price}</span>`;

        const ratingBar = document.createElement('div');
        ratingBar.className = 'bar bar-rating';
        ratingBar.style.width = (product.rating * 20) + 'px';
        ratingBar.innerHTML = `<span class="bar-label">${product.name} - ${product.rating} Stars</span>`;

        priceChart.appendChild(priceBar);
        ratingChart.appendChild(ratingBar);
    });
}

function sortProductsByPrice() {
    products.sort((a, b) => a.price - b.price);
    updateCharts();
}

function sortProductsByRating() {
    products.sort((a, b) => a.rating - b.rating);
    updateCharts();
}
