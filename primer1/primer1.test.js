import temperatureConversion from './primer1.js'; // Adjust paths as needed

// To run some tests: npm test -- -t 'temperatureC' (runs all tests within the 'temperatureConversion' describe block (uses pattern matching))
// To run one specific test, e.g. npm test -- -t 'should convert positive F' (runs the 'should convert positive Fahrenheit to Celsius' test)

// describe('temperatureConversion', () => {
//   describe('Fahrenheit to Celsius', () => {
//     test('should convert positive Fahrenheit to Celsius', () => {
//       expect(temperatureConversion(32, 'F', 'C')).toBeCloseTo(0, 2);
//       expect(temperatureConversion(50, 'F', 'C')).toBeCloseTo(10, 2);
//       expect(temperatureConversion(77, 'F', 'C')).toBeCloseTo(25, 2);
//       expect(temperatureConversion(212, 'F', 'C')).toBeCloseTo(100, 2);
            
//     });

//     test('should convert negative Fahrenheit to Celsius', () => {
//       expect(temperatureConversion(-40, 'F', 'C')).toBeCloseTo(-40, 2);
//       expect(temperatureConversion(-20, 'F', 'C')).toBeCloseTo(-28.89, 1);
//       expect(temperatureConversion(0, 'F', 'C')).toBeCloseTo(-17.78, 1);
//     });

//     test('should handle Fahrenheit input as a string', () => {
//       expect(temperatureConversion('32', 'F', 'C')).toBeCloseTo(0, 2);
//       expect(temperatureConversion('50', 'F', 'C')).toBeCloseTo(10, 2);
//       expect(temperatureConversion('77', 'F', 'C')).toBeCloseTo(25, 2);
//     });

//     test('should handle case-insensitive Celsius input', () => {
//       expect(temperatureConversion(32, 'F', 'c')).toBeCloseTo(0, 2);
//       expect(temperatureConversion(50, 'F', 'C')).toBeCloseTo(10, 2);
//       expect(temperatureConversion(77, 'F', 'c')).toBeCloseTo(25, 2);
//     });
//   });

//   describe('Celsius to Fahrenheit', () => {
//     test('should convert positive Celsius to Fahrenheit', () => {
//       expect(temperatureConversion(0, 'C', 'F')).toBeCloseTo(32, 2);
//       expect(temperatureConversion(10, 'C', 'F')).toBeCloseTo(50, 2);
//       expect(temperatureConversion(25, 'C', 'F')).toBeCloseTo(77, 2);
//       expect(temperatureConversion(100, 'C', 'F')).toBeCloseTo(212, 2);
//     });

//     test('should convert negative Celsius to Fahrenheit', () => {
//       expect(temperatureConversion(-40, 'C', 'F')).toBeCloseTo(-40, 2);
//       expect(temperatureConversion(-20, 'C', 'F')).toBeCloseTo(-4, 2);
//       expect(temperatureConversion(-17.78, 'C', 'F')).toBeCloseTo(0, 1);
//     });

//     test('should handle Celsius input as a string', () => {
//       expect(temperatureConversion('0', 'C', 'F')).toBeCloseTo(32, 2);
//       expect(temperatureConversion('10', 'C', 'F')).toBeCloseTo(50, 2);
//       expect(temperatureConversion('25', 'C', 'F')).toBeCloseTo(77, 2);
//     });

//     test('should handle case-insensitive Fahrenheit input', () => {
//       expect(temperatureConversion(0, 'C', 'f')).toBeCloseTo(32, 2);
//       expect(temperatureConversion(10, 'C', 'F')).toBeCloseTo(50, 2);
//       expect(temperatureConversion(25, 'C', 'f')).toBeCloseTo(77, 2);
//     });
//   });
//   describe('Same scale conversions', () => {
//     test('should handle Celsius to Celsius conversion', () => {
//       expect(temperatureConversion(0, 'C', 'C')).toBe(0);
//       expect(temperatureConversion(100, 'C', 'C')).toBe(100);
//       expect(temperatureConversion(-40, 'C', 'C')).toBe(-40);
//     });

//     test('should handle Fahrenheit to Fahrenheit conversion', () => {
//       expect(temperatureConversion(32, 'F', 'F')).toBe(32);
//       expect(temperatureConversion(212, 'F', 'F')).toBe(212);
//       expect(temperatureConversion(-40, 'F', 'F')).toBe(-40);
//     });  
//   });

//   describe('Error handling', () => {
//     test('should throw an error for non-numeric temperature input', () => {
//       expect(() => temperatureConversion('abc', 'C', 'F')).toThrow();
//       expect(() => temperatureConversion(null, 'C', 'F')).toThrow();
//       expect(() => temperatureConversion(undefined, 'C', 'F')).toThrow();
//     });

//     test('should throw an error for invalid conversion type', () => {
//       expect(() => temperatureConversion(32, 'C', 'B')).toThrow();
//       expect(() => temperatureConversion(0, 'C', 'X')).toThrow();
//     });
//   });

//   describe('Kelvin support', () => { 
//     test('should convert Celsius to Kelvin', () => {
//       expect(temperatureConversion(0, 'C', 'K')).toBeCloseTo(273.15, 2);
//       expect(temperatureConversion(10, 'C', 'K')).toBeCloseTo(283.15, 2);
//       expect(temperatureConversion(25, 'C', 'K')).toBeCloseTo(298.15, 2);
//       expect(temperatureConversion(100, 'C', 'K')).toBeCloseTo(373.15, 2);
//     });

//     test('should convert Fahrenheit to Kelvin', () => {
//       expect(temperatureConversion(32, 'F', 'K')).toBeCloseTo(273.15, 2);
//       expect(temperatureConversion(50, 'F', 'K')).toBeCloseTo(283.15, 2);
//       expect(temperatureConversion(77, 'F', 'K')).toBeCloseTo(298.15, 2);
//       expect(temperatureConversion(212, 'F', 'K')).toBeCloseTo(373.15, 2);
//     });

//     test('should convert Kelvin to Celsius', () => {
//       expect(temperatureConversion(273.15, 'K', 'C')).toBeCloseTo(0, 2);
//       expect(temperatureConversion(283.15, 'K', 'C')).toBeCloseTo(10, 2);
//       expect(temperatureConversion(373.15, 'K', 'C')).toBeCloseTo(100, 2);
//     });

//     test('should convert Kelvin to Fahrenheit', () => {
//       expect(temperatureConversion(273.15, 'K', 'F')).toBeCloseTo(32, 2);
//       expect(temperatureConversion(283.15, 'K', 'F')).toBeCloseTo(50, 2);
//       expect(temperatureConversion(373.15, 'K', 'F')).toBeCloseTo(212, 2);
//     });

//     test('should handle case-insensitive Kelvin input', () => {
//       expect(temperatureConversion(0, 'C', 'k')).toBeCloseTo(273.15, 2);
//       expect(temperatureConversion(10, 'C', 'K')).toBeCloseTo(283.15, 2);
//       expect(temperatureConversion(25, 'C', 'k')).toBeCloseTo(298.15, 2);
//     });
    
//     test('should handle Kelvin to Kelvin conversion', () => {
//       expect(temperatureConversion(273.15, 'K', 'K')).toBe(273.15);
//       expect(temperatureConversion(300, 'K', 'K')).toBe(300);
//       expect(temperatureConversion(0, 'K', 'K')).toBe(0); 
//     });
//   });
// });

describe('temperatureConversion', () => {
  let converter;

  beforeEach(() => {
    converter = new temperatureConversion();
  });

  describe('temperatureConversion private methods', () => {
    test('_celsiusToFahrenheit should convert Celsius to Fahrenheit correctly', () => {
      expect(converter._celsiusToFahrenheit(0)).toBeCloseTo(32, 2);
      expect(converter._celsiusToFahrenheit(10)).toBeCloseTo(50, 2);
      expect(converter._celsiusToFahrenheit(25)).toBeCloseTo(77, 2);
      expect(converter._celsiusToFahrenheit(100)).toBeCloseTo(212, 2);
      expect(converter._celsiusToFahrenheit(-40)).toBeCloseTo(-40, 2);
      expect(converter._celsiusToFahrenheit(-20)).toBeCloseTo(-4, 2);
      expect(converter._celsiusToFahrenheit(-17.78)).toBeCloseTo(0, 2);
    });

    test('_celsiusToKelvin should convert Celsius to Kelvin correctly', () => {
      expect(converter._celsiusToKelvin(0)).toBeCloseTo(273.15, 2);
      expect(converter._celsiusToKelvin(10)).toBeCloseTo(283.15, 2);
      expect(converter._celsiusToKelvin(25)).toBeCloseTo(298.15, 2);
      expect(converter._celsiusToKelvin(100)).toBeCloseTo(373.15, 2);
      expect(converter._celsiusToKelvin(-40)).toBeCloseTo(233.15, 2);
      expect(converter._celsiusToKelvin(-20)).toBeCloseTo(253.15, 2);
      expect(converter._celsiusToKelvin(-17.78)).toBeCloseTo(255.37, 2);
    });

    test('_fahrenheitToCelsius should convert Fahrenheit to Celsius correctly', () => {
      expect(converter._fahrenheitToCelsius(32)).toBeCloseTo(0, 2);
      expect(converter._fahrenheitToCelsius(50)).toBeCloseTo(10, 2);
      expect(converter._fahrenheitToCelsius(77)).toBeCloseTo(25, 2);
      expect(converter._fahrenheitToCelsius(212)).toBeCloseTo(100, 2);
      expect(converter._fahrenheitToCelsius(-40)).toBeCloseTo(-40, 2);
      expect(converter._fahrenheitToCelsius(-20)).toBeCloseTo(-28.89, 2);
      expect(converter._fahrenheitToCelsius(-0)).toBeCloseTo(-17.78, 2);
    });

    test('_fahrenheitToKelvin should convert Fahrenheit to Kelvin correctly', () => {
      expect(converter._fahrenheitToKelvin(32)).toBeCloseTo(273.15, 2);
      expect(converter._fahrenheitToKelvin(50)).toBeCloseTo(283.15, 2);
      expect(converter._fahrenheitToKelvin(77)).toBeCloseTo(298.15, 2);
      expect(converter._fahrenheitToKelvin(212)).toBeCloseTo(373.15, 2);
      expect(converter._fahrenheitToKelvin(-40)).toBeCloseTo(233.15, 2);
      expect(converter._fahrenheitToKelvin(-20)).toBeCloseTo(244.26, 2);
      expect(converter._fahrenheitToKelvin(-0)).toBeCloseTo(255.37, 2);
    });

    test('_kelvinToCelsius should convert Kelvin to Celsius correctly', () => {
      expect(converter._kelvinToCelsius(273.15)).toBeCloseTo(0, 2);
      expect(converter._kelvinToCelsius(283.15)).toBeCloseTo(10, 2);
      expect(converter._kelvinToCelsius(298.15)).toBeCloseTo(25, 2);
      expect(converter._kelvinToCelsius(373.15)).toBeCloseTo(100, 2);
      expect(converter._kelvinToCelsius(233.15)).toBeCloseTo(-40, 2);
      expect(converter._kelvinToCelsius(253.15)).toBeCloseTo(-20, 2);
    });

    test('_kelvinToFahrenheit should convert Kelvin to Fahrenheit correctly', () => {
      expect(converter._kelvinToFahrenheit(273.15)).toBeCloseTo(32, 2);
      expect(converter._kelvinToFahrenheit(283.15)).toBeCloseTo(50, 2);
      expect(converter._kelvinToFahrenheit(298.15)).toBeCloseTo(77, 2);
      expect(converter._kelvinToFahrenheit(373.15)).toBeCloseTo(212, 2);
      expect(converter._kelvinToFahrenheit(233.15)).toBeCloseTo(-40, 2);
      expect(converter._kelvinToFahrenheit(244.26)).toBeCloseTo(-20, 2);
      expect(converter._kelvinToFahrenheit(255.37)).toBeCloseTo(-0, 2);
    });
  });

  describe('temperatureConversion convert', () => {
    test('should map correctly', () => {
      expect(converter.convert(0, 'C', 'F')).toBeCloseTo(32, 2);
      expect(converter.convert(0, 'C', 'K')).toBeCloseTo(273.15, 2);
      expect(converter.convert(32, 'F', 'C')).toBeCloseTo(0, 2);
      expect(converter.convert(32, 'F', 'K')).toBeCloseTo(273.15, 2);
      expect(converter.convert(273.15, 'K', 'C')).toBeCloseTo(0, 2);
      expect(converter.convert(273.15, 'K', 'F')).toBeCloseTo(32, 2);
    });

    test('should accept numeric strings', () => {
      expect(converter.convert('0', 'C', 'F')).toBeCloseTo(32, 2);
      expect(converter.convert('273.15', 'K', 'F')).toBeCloseTo(32, 2);
    });

    test('should handle cases', () => {
      expect(converter.convert(0, 'c', 'F')).toBeCloseTo(32, 2);
      expect(converter.convert(0, 'C', 'k')).toBeCloseTo(273.15, 2);
      expect(converter.convert(32, 'f', 'c')).toBeCloseTo(0, 2);
    });
  });

  describe('temperatureConversion error handling', () => {
    test('should throw an error for non-numeric temperature input', () => {
      expect(() => converter.convert('abc', 'C', 'F')).toThrow("Temperature must be a valid number.");
      expect(() => converter.convert(null, 'C', 'F')).toThrow("Temperature must be a valid number.");
      expect(() => converter.convert(undefined, 'C', 'F')).toThrow("Temperature must be a valid number.");
    });

    test('should throw an error for invalid conversion type', () => {
      expect(() => converter.convert(32, 'C', 'B')).toThrow("Not a valid conversion.");
      expect(() => converter.convert(0, 'X', 'C')).toThrow("Not a valid conversion.");
    });
  });
});