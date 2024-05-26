document.addEventListener("alpine:init", () => {
  // Data Produk
  Alpine.data("items", () => ({
    items: [
      { id: 1, name: "Espresso", img: "espresso.png", price: 10000 },
      { id: 2, name: "Americano", img: "americano.png", price: 24000 },
      { id: 3, name: "Latte", img: "latte.jpg", price: 18000 },
      { id: 4, name: "Cappucino", img: "cappuccino.png", price: 16000 },
      { id: 5, name: "Macchiato", img: "macchiato.png", price: 26000 },
      { id: 6, name: "Piccolo", img: "piccolo.png", price: 22000 },
    ],
  }));

  // Data Keranjang
  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,

    // Tambah Produk
    add(newItem) {
      const cartItem = this.items.find((item) => item.id === newItem.id);

      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        this.items -
          this.items.map((item) => {
            if (item.id !== newItem.id) {
              return item;
            } else {
              item.quantity++;
              item.total = item.price * item.quantity;
              this.quantity++;
              this.total += item.price;
              return item;
            }
          });
      }
    },

    // Hapus Produk
    remove(id) {
      const cartItem = this.items.find((item) => item.id === id);

      if (cartItem.quantity > 1) {
        this.items = this.items.map((item) => {
          if (item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});

// Konversi String ke Rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
