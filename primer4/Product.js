class Product {
  #id;
  #name;
  #price;
  #quantity;

  constructor(id, name, price, quantity) {
    if (new.target === Product) {
      throw new Error("Abstract class cannot be instantiated.");
    }
    this.validateProduct(id, name, price, quantity);
    this.#id = id;
    this.#name = name;
    this.#price = price;
    this.#quantity = quantity;
  }

  validateProduct(id, name, price, quantity) {
    if (typeof id !== "string" || id.trim() === "") {
      throw new Error("ID must be a non-empty string.");
    }
    if (typeof name !== "string" || name.trim() === "") {
      throw new Error("Name must be a non-empty string.");
    }
    if (typeof price !== "number" || price < 0) {
      throw new Error("Price must be a non-negative number.");
    }
    if (!Number.isInteger(quantity) || quantity < 0) {
      throw new Error("Quantity must be a non-negative integer.");
    }
  }

  get id() {
    return this.#id;
  }
  get name() {
    return this.#name;
  }
  get price() {
    return this.#price;
  }

  get quantity() {
    return this.#quantity;
  }

  set quantity(newQuantity) {
    this.#quantity = newQuantity;
  }

  getProductDetails() {
    throw new Error(`Method '${this.getProductDetails.name}' must be implemented.`);
  }
}


export default Product;
