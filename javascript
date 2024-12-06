const cart = [];
const cartItems = document.getElementById('cart-items');
const totalPrice = document.getElementById('total-price');

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const product = button.closest('.product');
    const id = product.dataset.id;
    const price = parseFloat(product.dataset.price);
    const name = product.querySelector('h3').textContent;

    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ id, name, price, quantity: 1 });
    }

    updateCart();
  });
});

function updateCart() {
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} x ${item.quantity} - ${item.price * item.quantity} บาท`;
    cartItems.appendChild(li);
    total += item.price * item.quantity;
  });

  totalPrice.textContent = total.toFixed(2);
}

document.getElementById('checkout').addEventListener('click', () => {
  alert('สั่งซื้อสำเร็จ! ยอดรวม: ' + totalPrice.textContent + ' บาท');
  cart.length = 0;
  updateCart();
});
