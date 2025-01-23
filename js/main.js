document.addEventListener("DOMContentLoaded", function () {
    let pathPrefix = window.location.pathname.includes("/pages/") ? "../" : "";

    // Load Header
    fetch(`${pathPrefix}partials/header.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("header").innerHTML = data;
        })
        .catch(error => {
            console.error("Error fetching header:", error);
        });

    // Load Footer
    fetch(`${pathPrefix}partials/footer.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch(error => {
            console.error("Error fetching footer:", error);
        });
});

// Shopping Cart Array
const cart = [];

// Function to add items to the cart
function addToCart(event) {
    const button = event.target;
    const productId = button.getAttribute('data-id');
    const productName = button.getAttribute('data-name');
    const productPrice = button.getAttribute('data-price');

    // Create an item object
    const item = {
        id: productId,
        name: productName,
        price: parseFloat(productPrice),
    };

    // Add the item to the cart
    cart.push(item);
    console.log(cart); // Log the cart for debugging
}

// Attach event listeners to all "Add to Cart" buttons
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
});
