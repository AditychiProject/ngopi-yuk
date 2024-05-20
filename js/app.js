document.addEventListener("alpine:init", () => {
  // Data Items
  Alpine.data("items", () => ({
    items: [
      { id: 1, name: "Espresso", img: "menu.jpg", price: 20000 },
      { id: 2, name: "Americano", img: "menu.jpg", price: 24000 },
      { id: 3, name: "Americano", img: "menu.jpg", price: 24000 },
      { id: 4, name: "Americano", img: "menu.jpg", price: 24000 },
      { id: 5, name: "Americano", img: "menu.jpg", price: 24000 },
      { id: 6, name: "Americano", img: "menu.jpg", price: 24000 },
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
