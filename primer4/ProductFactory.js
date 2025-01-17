import Clothing from "./Clothing";
import Electronics from "./Electronics";


class ProductFactory {
    static createProduct(type, id, name, price, quantity, ...kwargs) {
      switch (type) {
        case 'Clothing':
          return new Clothing(id, name, price, quantity, ...kwargs);
        case 'Electronics':
          return new Electronics(id, name, price, quantity, ...kwargs);
        default:
          throw new Error(`Product type ${type} does not exist.`);
      }
    }
  }

export default ProductFactory