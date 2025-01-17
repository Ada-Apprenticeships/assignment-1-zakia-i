import convert, { celsiusToFahrenheit, celsiusToKelvin, fahrenheitToCelsius, fahrenheitToKelvin, kelvinToCelsius, kelvinToFahrenheit } from "./primer1";


describe('temperatureConversion', () => {

    describe('temperatureConversion private methods', () => {
        test('celsiusToFahrenheit should convert Celsius to Fahrenheit correctly', () => {
            expect(celsiusToFahrenheit(0)).toBeCloseTo(32, 2);
            expect(celsiusToFahrenheit(10)).toBeCloseTo(50, 2);
            expect(celsiusToFahrenheit(25)).toBeCloseTo(77, 2);
            expect(celsiusToFahrenheit(100)).toBeCloseTo(212, 2);
            expect(celsiusToFahrenheit(-40)).toBeCloseTo(-40, 2);
            expect(celsiusToFahrenheit(-20)).toBeCloseTo(-4, 2);
            expect(celsiusToFahrenheit(-17.78)).toBeCloseTo(0, 2);
        });

        test('celsiusToKelvin should convert Celsius to Kelvin correctly', () => {
            expect(celsiusToKelvin(0)).toBeCloseTo(273.15, 2);
            expect(celsiusToKelvin(10)).toBeCloseTo(283.15, 2);
            expect(celsiusToKelvin(25)).toBeCloseTo(298.15, 2);
            expect(celsiusToKelvin(100)).toBeCloseTo(373.15, 2);
            expect(celsiusToKelvin(-40)).toBeCloseTo(233.15, 2);
            expect(celsiusToKelvin(-20)).toBeCloseTo(253.15, 2);
            expect(celsiusToKelvin(-17.78)).toBeCloseTo(255.37, 2);
        });

        test('fahrenheitToCelsius should convert Fahrenheit to Celsius correctly', () => {
            expect(fahrenheitToCelsius(32)).toBeCloseTo(0, 2);
            expect(fahrenheitToCelsius(50)).toBeCloseTo(10, 2);
            expect(fahrenheitToCelsius(77)).toBeCloseTo(25, 2);
            expect(fahrenheitToCelsius(212)).toBeCloseTo(100, 2);
            expect(fahrenheitToCelsius(-40)).toBeCloseTo(-40, 2);
            expect(fahrenheitToCelsius(-20)).toBeCloseTo(-28.89, 2);
            expect(fahrenheitToCelsius(-0)).toBeCloseTo(-17.78, 2);
        });

        test('fahrenheitToKelvin should convert Fahrenheit to Kelvin correctly', () => {
            expect(fahrenheitToKelvin(32)).toBeCloseTo(273.15, 2);
            expect(fahrenheitToKelvin(50)).toBeCloseTo(283.15, 2);
            expect(fahrenheitToKelvin(77)).toBeCloseTo(298.15, 2);
            expect(fahrenheitToKelvin(212)).toBeCloseTo(373.15, 2);
            expect(fahrenheitToKelvin(-40)).toBeCloseTo(233.15, 2);
            expect(fahrenheitToKelvin(-20)).toBeCloseTo(244.26, 2);
            expect(fahrenheitToKelvin(-0)).toBeCloseTo(255.37, 2);
        });

        test('kelvinToCelsius should convert Kelvin to Celsius correctly', () => {
            expect(kelvinToCelsius(273.15)).toBeCloseTo(0, 2);
            expect(kelvinToCelsius(283.15)).toBeCloseTo(10, 2);
            expect(kelvinToCelsius(298.15)).toBeCloseTo(25, 2);
            expect(kelvinToCelsius(373.15)).toBeCloseTo(100, 2);
            expect(kelvinToCelsius(233.15)).toBeCloseTo(-40, 2);
            expect(kelvinToCelsius(253.15)).toBeCloseTo(-20, 2);
        });

        test('kelvinToFahrenheit should convert Kelvin to Fahrenheit correctly', () => {
            expect(kelvinToFahrenheit(273.15)).toBeCloseTo(32, 2);
            expect(kelvinToFahrenheit(283.15)).toBeCloseTo(50, 2);
            expect(kelvinToFahrenheit(298.15)).toBeCloseTo(77, 2);
            expect(kelvinToFahrenheit(373.15)).toBeCloseTo(212, 2);
            expect(kelvinToFahrenheit(233.15)).toBeCloseTo(-40, 2);
            expect(kelvinToFahrenheit(244.26)).toBeCloseTo(-20, 2);
            expect(kelvinToFahrenheit(255.37)).toBeCloseTo(-0, 2);
        });
    });

    describe('temperatureConversion convert', () => {
        test('should map correctly', () => {
            expect(convert(0, 'C', 'F')).toBeCloseTo(32, 2);
            expect(convert(0, 'C', 'K')).toBeCloseTo(273.15, 2);
            expect(convert(32, 'F', 'C')).toBeCloseTo(0, 2);
            expect(convert(32, 'F', 'K')).toBeCloseTo(273.15, 2);
            expect(convert(273.15, 'K', 'C')).toBeCloseTo(0, 2);
            expect(convert(273.15, 'K', 'F')).toBeCloseTo(32, 2);
        });

        test('should accept numeric strings', () => {
            expect(convert('0', 'C', 'F')).toBeCloseTo(32, 2);
            expect(convert('273.15', 'K', 'F')).toBeCloseTo(32, 2);
        });

        test('should handle cases', () => {
            expect(convert(0, 'c', 'F')).toBeCloseTo(32, 2);
            expect(convert(0, 'C', 'k')).toBeCloseTo(273.15, 2);
            expect(convert(32, 'f', 'c')).toBeCloseTo(0, 2);
        });
    });

    describe('temperatureConversion error handling', () => {
        test('should throw an error for non-numeric temperature input', () => {
            const error = "Temperature must be a valid number."
            expect(() => convert('abc', 'C', 'F')).toThrowError(error);
            expect(() => convert(null, 'C', 'F')).toThrowError(error);
            expect(() => convert(undefined, 'C', 'F')).toThrowError(error);
        });

        test('should throw an error for invalid conversion type', () => {
            const error = "Not a valid conversion."
            expect(() => convert(32, 'C', 'B')).toThrowError(error);
            expect(() => convert(0, 'X', 'C')).toThrowError(error);
        });
    });
});