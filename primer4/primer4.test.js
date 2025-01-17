// Import the necessary modules
import Product from './Product.js';
import Inventory from './Inventory.js';
import Electronics from './Electronics.js';
import Clothing from './Clothing.js';

describe('Inventory', () => {
  let inventory;
  let clothing1, electronics1

  beforeEach(() => {
    inventory = new Inventory();
    clothing1 = new Clothing("A123", "T-shirt", 19.99, 100, "S", "Cotton");
    electronics1 = new Electronics("B456", "Phone", 999.99, 30, "Apple", 1);
      });

  describe('Adding Products', () => {
    test('can add products to the inventory', () => {
      inventory.addProduct(clothing1);
      inventory.addProduct(electronics1);
      expect(inventory.getNumOfItems()).toBe(2);
    });

    test('throws error when adding a product with a duplicate ID', () => {
      inventory.addProduct(clothing1);
      expect(() => inventory.addProduct(clothing1)).toThrowError(`Product with ID ${clothing1.id} already exists.`);
    });
  });

  describe('Updating Product Quantities', () => {
    test('can update the quantity of clothing', () => {
      inventory.addProduct(clothing1);
      inventory.updateQuantity("A123", 75);
      expect(inventory.getProduct("A123").quantity).toBe(75);
    });

    test('can update the quantity of clothing', () => {
      inventory.addProduct(electronics1);
      inventory.updateQuantity("B456", 60);
      expect(inventory.getProduct("B456").quantity).toBe(60);
    });

    test('throws error when updating the quantity of a non-existent product', () => {
      expect(() => inventory.updateQuantity("E456", 1)).toThrowError(`Product with ID E456 not found.`);
    });
  });

  describe('Removing Products', () => {
    test('can remove a product from the inventory', () => {
      inventory.addProduct(clothing1);
      inventory.addProduct(electronics1);
      inventory.removeProduct("A123");
      expect(() => inventory.getProduct("A123")).toThrowError(`Product with ID A123 not found.`);
      expect(inventory.getProduct("B456")).toEqual(electronics1.getProductDetails());
    });

    test('throws error when removing a non-existent product', () => {
      expect(() => inventory.removeProduct("E456")).toThrowError(`Product with ID E456 not found.`);
    });
  });

  describe('Retrieving Product Details', () => {
    test('can retrieve the details of products', () => {
        inventory.addProduct(clothing1);
        inventory.addProduct(electronics1);
        
        expect(inventory.getProduct("A123")).toEqual({
            id: "A123",
            name: "T-shirt",
            price: 19.99,
            quantity: 100,
            size: "S",
            material: "Cotton",


        });

        expect(inventory.getProduct("B456")).toEqual({
            id: "B456",
            name: "Phone",
            price: 999.99,
            quantity: 30,
            brand: "Apple",
            warranty: 1
        });
    });
  });

});


describe('Classes', () => {

  beforeEach(() => {
      });

  describe('Abstract Product Class', () => {
    test('throws an error when attempting to instantiate Product directly', () => {
      expect(() => {
        new Product("Z123", "Any Product", 5.00, 25);
      }).toThrowError("Abstract class cannot be instantiated.");
    });

    test('throws an error when a subclass does not implement getProductDetails', () => {
      class ProductSubclass extends Product {
        constructor(id, name, price, quantity) {
          super(id, name, price, quantity);
        }
        // No getProductDetails method implemented
      }

      const incompleteSubclass = new ProductSubclass("C789", "Product", 19.99, 20);

      expect(() => {
        incompleteSubclass.getProductDetails();
      }).toThrowError("Method 'getProductDetails' must be implemented.");
    });
  });
});


// need to add type validation
// maybe add an interface?