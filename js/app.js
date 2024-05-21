document.addEventListener("alpine:init", () => {
  // Data Items
  Alpine.data("items", () => ({
    items: [
      { id: 1, name: "Espresso", img: "menu.jpg", price: 10000 },
      { id: 2, name: "Americano", img: "menu.jpg", price: 24000 },
      { id: 3, name: "Latte", img: "menu.jpg", price: 18000 },
      { id: 4, name: "Cappucino", img: "menu.jpg", price: 16000 },
      { id: 5, name: "Macchiato", img: "menu.jpg", price: 26000 },
      { id: 6, name: "Mocha", img: "menu.jpg", price: 22000 },
    ],
  }));

  // Data Cart
  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      this.items.push(newItem);
      this.quantity++;
      this.total += newItem.price;
      console.log(this.total);
    },
  });
});

// Convert String to Rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
