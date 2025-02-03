import Product from "./Product";

class Inventory {
  #products;

  constructor() {
    this.#products = new Map();
  }


  #validateId(id) {
    if (typeof id !== 'string' || id.trim() === '') {
      throw new Error('ID must be a non-empty string.');
    }
  }

  addProduct(product) {
    if (!(product instanceof Product)) {
      throw new Error("Invalid product type.")
    }
    if (this.#products.has(product.id)) {
      throw new Error(`Product with ID ${product.id} already exists.`);
    }
    this.#products.set(product.id, product);
  }

  updateQuantity(id, quantity) {
    this.#validateId(id)
    if (typeof quantity !== "number" || quantity < 0) {
      throw new Error("Quantity must be a non-negative number.");
    }
    const product = this.#products.get(id);
    if (!product) {
      throw new Error(`Product with ID ${id} not found.`);
    }
    product.quantity = quantity;
  }

  getProduct(id) {
    this.#validateId(id)
    const product = this.#products.get(id);
    if (!product) {
      throw new Error(`Product with ID ${id} not found.`);
    }
    return product.getProductDetails();
  }

  removeProduct(id) {
    this.#validateId(id)
    if (!this.#products.has(id)) {
      throw new Error(`Product with ID ${id} not found.`);
    }
    this.#products.delete(id);
  }

  getNumOfItems() {
    return this.#products.size;
  }
}


export default Inventory;