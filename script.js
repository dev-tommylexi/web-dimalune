const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const whatsappBase = 'https://wa.me/5491100000000?text=';

document.querySelectorAll('.product-btn').forEach(btn => {
    btn.addEventListener('click', (event) => {
    event.preventDefault();
    const product = btn.dataset.product;
    const text = encodeURIComponent(`Hola! Quiero consultar por ${product}.`);
    window.open(whatsappBase + text, '_blank');
    });
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const product = document.getElementById('product').value;
    const message = document.getElementById('message').value.trim();

    const text = encodeURIComponent(
    `Hola! Soy ${name}. Mi WhatsApp es ${phone}. Quiero consultar por: ${product}. ${message}`
    );

    window.open(whatsappBase + text, '_blank');
});

const productSelect = document.getElementById("product");
const rellenoGroup = document.getElementById("relleno-group");

productSelect.addEventListener("change", () => {
  const selectedOption = productSelect.options[productSelect.selectedIndex];
  const type = selectedOption.dataset.type;

  if (type === "torta") {
    rellenoGroup.classList.remove("hidden");
  } else {
    rellenoGroup.classList.add("hidden");
  }
});