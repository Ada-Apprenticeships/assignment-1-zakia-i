import Product from "./Product.js";

class Clothing extends Product {
  #size;
  #material;

  constructor(id, name, price, quantity, size, material) {
    super(id, name, price, quantity);
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
      ...super.getProductDetails(),
      size: this.size,
      material: this.material,
    };
  }
}

export default Clothing;
