import Product from "./Product.js";

class Clothing extends Product {
  #size;
  #material;

  constructor(id, name, price, quantity, size, material) {
    super(id, name, price, quantity);
    if (typeof size !== "string" || size.trim() === "") {
      throw new Error("Size must be a non-empty string.");
    }
    if (typeof material !== "string" || material.trim() === "") {
      throw new Error("Material must be a non-empty string.");
    }
    this.#size = size;
    this.#material = material;
  }

  get size() {
    return this.#size;
  }

  get material() {
    return this.#material;
  }

  getProductDetails() {
    return {
        id: this.id,
        name: this.name,
        price: this.price,
        quantity: this.quantity,
        size: this.size,
        material: this.material,
    };
  }
}


export default Clothing;
