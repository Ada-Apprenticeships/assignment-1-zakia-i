import Clothing from "./Clothing";
import Electronics from "./Electronics";


class ProductFactory {
  static createProduct(type, id, name, price, quantity, ...kwargs) {
    switch (type.toLowerCase()) {
      case 'clothing':
        return new Clothing(id, name, price, quantity, ...kwargs);
      case 'electronics':
        return new Electronics(id, name, price, quantity, ...kwargs);
      default:
        throw new Error(`Product type ${type} does not exist.`);
    }
  }
}

export default ProductFactory