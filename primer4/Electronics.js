import Product from "./Product.js";

class Electronics extends Product {
  #brand;
  #warranty;

  constructor(id, name, price, quantity, brand, warranty) {
    super(id, name, price, quantity);
    if (typeof brand !== "string" || brand.trim() === "") {
      throw new Error("Brand must be a non-empty string.");
    }
    if (!Number.isInteger(warranty) || warranty < 0) {
      throw new Error("Warranty must be a non-negative integer.");
    }
    this.#brand = brand;
    this.#warranty = warranty;
  }

  get brand() {
    return this.#brand;
  }

  get warranty() {
    return this.#warranty;
  }

  getProductDetails() {
    return {
        id: this.id,
        name: this.name,
        price: this.price,
        quantity: this.quantity,
        brand: this.brand,
        warranty: this.warranty,
    };
  }
}


export default Electronics;
