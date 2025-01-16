// function temperatureConversion(temperature, fromScale, toScale){

// // TODO: Validate the input:
// //        - Check if the temperature is null, undefined, or a non-numeric string. If so, throw an error "Invalid temperature input".
// //        - Convert the temperature to a number.
// //        - Normalise fromScale and toScale to uppercase.
// //        - Check if fromScale and toScale are valid ( e.g. 'C', 'F'). If not, throw an error "Invalid conversion type or input scale".

// // TODO: Define helper functions for the conversions:
// //        - toFahrenheit(celsius): Converts Celsius to Fahrenheit.
// //        - toCelsius(fahrenheit): Converts Fahrenheit to Celsius.
// //        
// // TODO: Implement the conversion logic:
// //        - Use conditional logic to handle different toScale values (e.g. 'C', 'F').
// //        - Within each condition, handle conversions from different fromScale values (e.g. 'C', 'F') to the target toScale.
// //        - Use the helper functions to perform the actual conversions.


// }

class TemperatureConversion {
    constructor() {
        this.converter = {
            "C": {
              "F": this._celsiusToFahrenheit,
              "K": this._celsiusToKelvin
            },
            "F": {
              "C": this._fahrenheitToCelsius,
              "K": this._fahrenheitToKelvin
            },
            "K": {
              "C": this._kelvinToCelsius,
              "F": this._kelvinToFahrenheit
            }
        };

    }

    convert(temperature, fromScale, toScale) {
        // abstraction, which will call the correct method
        temperature = parseFloat(temperature);
        if (isNaN(temperature)) {
            throw new Error("Temperature must be a valid number.");
        }

        fromScale = fromScale.toUpperCase();
        toScale = toScale.toUpperCase();

        if (fromScale == toScale) {
            return temperature;
        }
        if (!this.converter[fromScale] || !this.converter[fromScale][toScale]) {
            throw new Error("Not a valid conversion.");
          }
      
        const conversion = this.converter[fromScale][toScale];
        return conversion(temperature);
    }

    _celsiusToFahrenheit = (celsiusTemperature) => {return (celsiusTemperature * 9 / 5) + 32}

    _celsiusToKelvin = (celsiusTemperature) => {return celsiusTemperature + 273.15}

    _fahrenheitToCelsius = (fahrenheitTemperature) => {return (fahrenheitTemperature - 32) * 5 / 9}

    _fahrenheitToKelvin = (fahrenheitTemperature) => {return (fahrenheitTemperature - 32) * 5 / 9 + 273.15}

    _kelvinToCelsius = (kelvinTemperature) => {return kelvinTemperature - 273.15}

    _kelvinToFahrenheit = (kelvinTemperature) => {return (kelvinTemperature - 273.15) * 9 / 5 + 32}

}



export default TemperatureConversion;


