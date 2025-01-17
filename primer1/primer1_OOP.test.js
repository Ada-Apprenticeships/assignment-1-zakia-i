import TemperatureConversion from './primer1_OOP.js';

describe('temperatureConversion', () => {
  let converter;

  beforeEach(() => {
    converter = new TemperatureConversion();
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
      const error = "Temperature must be a valid number."
      expect(() => converter.convert('abc', 'C', 'F')).toThrowError(error);
      expect(() => converter.convert(null, 'C', 'F')).toThrowError(error);
      expect(() => converter.convert(undefined, 'C', 'F')).toThrowError(error);
    });

    test('should throw an error for invalid conversion type', () => {
      const error = "Not a valid conversion."
      expect(() => converter.convert(32, 'C', 'B')).toThrowError(error);
      expect(() => converter.convert(0, 'X', 'C')).toThrowError(error);
    });
  });
});
