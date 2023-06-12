const categoryButtons = document.querySelectorAll('.categoryBtn');
const foodCards = document.querySelectorAll('.card');
const addToCartButtons = document.querySelectorAll('.addToCartBtn');
const cartItems = document.getElementById('cartItems');
const totalAmount = document.getElementById('totalAmount');
const darkModeToggle = document.getElementById('darkModeToggle');
const  hamMenu =  document.querySelector('.header__close');

const body = document.body;

let currentTotal = 0; // Variable to store the current total amount

// Filter food items based on category
categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');
    foodCards.forEach(card => {
      if (category === 'all' || card.getAttribute('data-category') === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Add item to the cart
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const card = button.parentNode;
    const itemName = card.querySelector('h2').textContent;
    const itemPrice = parseFloat(card.querySelector('p').textContent.slice(1));
    const cartItem = document.createElement('li');
    cartItem.textContent = `${itemName} - $${itemPrice.toFixed(2)}`;
    cartItems.appendChild(cartItem);

    updateTotalAmount(itemPrice);
  });
});

// Update the total amount in the cart
function updateTotalAmount(price) {
  currentTotal += price;
  totalAmount.textContent = `Total: $${currentTotal.toFixed(2)}`;
}

// Toggle dark mode
darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});




//menu icon toggle
hamMenu.addEventListener('click' , () => {
    hamMenu.style.display = 'none';
    hamMenu.style.transition = "all 0.3s ease-in";
})