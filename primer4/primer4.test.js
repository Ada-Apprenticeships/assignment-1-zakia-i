// Import the necessary modules
import Product from './Product.js';
import Inventory from './Inventory.js';
import Electronics from './Electronics.js';
import Clothing from './Clothing.js';
import ProductFactory from './ProductFactory.js'


describe("Inventory", () => {
  let inventory;
  let clothing1, electronics1

  beforeEach(() => {
    inventory = new Inventory();
    clothing1 = new Clothing("A123", "T-shirt", 19.99, 100, "S", "Cotton");
    electronics1 = new Electronics("B456", "Phone", 999.99, 30, "Apple", 1);
      });

  describe("Adding Products", () => {
    test("can add products to the inventory", () => {
      inventory.addProduct(clothing1);
      inventory.addProduct(electronics1);
      expect(inventory.getNumOfItems()).toBe(2);
    });

    test("throws error when adding a product with a duplicate ID", () => {
      inventory.addProduct(clothing1);
      expect(() => inventory.addProduct(clothing1)).toThrowError(`Product with ID ${clothing1.id} already exists.`);
    });
  });

  describe("Updating Product Quantities", () => {
    test("can update the quantity of clothing", () => {
      inventory.addProduct(clothing1);
      inventory.updateQuantity("A123", 75);
      expect(inventory.getProduct("A123").quantity).toBe(75);
    });

    test("can update the quantity of electronics", () => {
      inventory.addProduct(electronics1);
      inventory.updateQuantity("B456", 60);
      expect(inventory.getProduct("B456").quantity).toBe(60);
    });

    test("throws error when updating the quantity of a non-existent product", () => {
      expect(() => inventory.updateQuantity("E456", 1)).toThrowError(`Product with ID E456 not found.`);
    });

    test("throws error when updating the quantity with invalid types", () => {
      expect(() => inventory.updateQuantity(123, 1)).toThrowError(`ID must be a non-empty string.`);
      expect(() => inventory.updateQuantity("A123", "1")).toThrowError(`Quantity must be a non-negative number.`);
      expect(() => inventory.updateQuantity("A123", -10)).toThrowError(`Quantity must be a non-negative number.`);
    });
  });


  describe("Removing Products", () => {
    test("can remove a product from the inventory", () => {
      inventory.addProduct(clothing1);
      inventory.addProduct(electronics1);
      inventory.removeProduct("A123");
      expect(() => inventory.getProduct("A123")).toThrowError(`Product with ID A123 not found.`);
      expect(inventory.getProduct("B456")).toEqual(electronics1.getProductDetails());
    });

    test("throws error when removing a non-existent product", () => {
      expect(() => inventory.removeProduct("E456")).toThrowError(`Product with ID E456 not found.`);
    });

    test("throws error when removing a product with invalid types", () => {
      expect(() => inventory.removeProduct(123)).toThrowError(`ID must be a non-empty string.`);
    });
  });

  describe("Retrieving Product Details", () => {
    test("can retrieve the details of products", () => {
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


describe("Classes", () => {

  describe("Abstract Product Class", () => {
    test("throws an error when attempting to instantiate Product directly", () => {
      expect(() => {
        new Product("Z123", "Any Product", 5.00, 25);
      }).toThrowError("Abstract class cannot be instantiated.");
    });

    test("throws an error when a subclass does not implement getProductDetails", () => {
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


    describe("Abstract Product Class", () => {
      class DummyProduct extends Product {
        constructor(id, name, price, quantity) {
          super(id, name, price, quantity);
        }
      
        getProductDetails() {
          return {
            id: this.id,
            name: this.name,
            price: this.price,
            quantity: this.quantity,
          };
        }
      }

      test("should throw error for invalid ID", () => {
        expect(() => new DummyProduct("", "Laptop", 1000, 10, "Brand", 2)).toThrow("ID must be a non-empty string.");
      });
    
      test("should throw error for invalid name", () => {
        expect(() => new DummyProduct("1", "", 1000, 10, "Brand", 2)).toThrow("Name must be a non-empty string.");
      });
    
      test("should throw error for invalid price", () => {
        expect(() => new DummyProduct("1", "Laptop", -10, 10, "Brand", 2)).toThrow("Price must be a non-negative number.");
      });

      test("should throw error for invalid quantity", () => {
        expect(() => new DummyProduct("1", "Laptop", 1000, -10, "Brand", 2)).toThrow("Quantity must be a non-negative integer.");
      });
    });
  });

  describe("Electronics Class Tests", () => {
    test("should instantiate Electronics correctly", () => {
      const electronics = new Electronics("1", "Laptop", 1000, 10, "Brand", 2);
      expect(electronics).toBeInstanceOf(Electronics);
      expect(electronics.getProductDetails()).toEqual({
        id: "1",
        name: "Laptop",
        price: 1000,
        quantity: 10,
        brand: "Brand",
        warranty: 2,
      })
    });
  
    test("should throw error for invalid brand", () => {
      expect(() => new Electronics("1", "Laptop", 1000, 10, "", 2)).toThrow("Brand must be a non-empty string.");
    });
  
    test("should throw error for invalid warranty", () => {
      expect(() => new Electronics("1", "Laptop", 1000, 10, "Brand", -1)).toThrow("Warranty must be a non-negative integer.");
    });
  });
  
  describe("Clothing Class Tests", () => {
    test("should instantiate Clothing correctly", () => {
      const clothing = new Clothing("1", "T-Shirt", 20, 50, "M", "Cotton");
      expect(clothing).toBeInstanceOf(Clothing);
      expect(clothing.getProductDetails()).toEqual({
        id: "1",
        name: "T-Shirt",
        price: 20,
        quantity: 50,
        size: "M",
        material: "Cotton",
      })
    });
  
    test("should throw error for invalid size", () => {
      expect(() => new Clothing("1", "T-Shirt", 20, 50, "", "Cotton")).toThrow("Size must be a non-empty string.");
    });
  
    test("should throw error for invalid material", () => {
      expect(() => new Clothing("1", "T-Shirt", 20, 50, "M", "")).toThrow("Material must be a non-empty string.");
    });
  });
});


describe("ProductFactory", () => {
  test("creates a Clothing product correctly", () => {
    const product = ProductFactory.createProduct("Clothing", "C123", "Sweater", 29.99, 50, "M", "Wool");
    expect(product).toBeInstanceOf(Clothing);
    expect(product.getProductDetails()).toEqual({
      id: "C123",
      name: "Sweater",
      price: 29.99,
      quantity: 50,
      size: "M",
      material: "Wool",
    });
  });

  test("creates an Electronics product correctly", () => {
    const product = ProductFactory.createProduct("Electronics", "E456", "Laptop", 1299.99, 20, "Microsoft", 2);
    expect(product).toBeInstanceOf(Electronics);
    expect(product.getProductDetails()).toEqual({
      id: "E456",
      name: "Laptop",
      price: 1299.99,
      quantity: 20,
      brand: "Microsoft",
      warranty: 2,
    });
  });

  test("throws an error for unrecognized product type", () => {
    expect(() => {
      ProductFactory.createProduct("Unknown", "U789", "Unknown Product", 0, 0);
    }).toThrowError("Product type Unknown is not recognized.");
  });
});