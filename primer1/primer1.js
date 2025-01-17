export const celsiusToFahrenheit = (celsiusTemperature) => { return (celsiusTemperature * 9 / 5) + 32 }
export const celsiusToKelvin = (celsiusTemperature) => { return celsiusTemperature + 273.15 }
export const fahrenheitToCelsius = (fahrenheitTemperature) => { return (fahrenheitTemperature - 32) * 5 / 9 }
export const fahrenheitToKelvin = (fahrenheitTemperature) => { return (fahrenheitTemperature - 32) * 5 / 9 + 273.15 }
export const kelvinToCelsius = (kelvinTemperature) => { return kelvinTemperature - 273.15 }
export const kelvinToFahrenheit = (kelvinTemperature) => { return (kelvinTemperature - 273.15) * 9 / 5 + 32 }

const converterMap = {
    "C": {
        "F": celsiusToFahrenheit,
        "K": celsiusToKelvin
    },
    "F": {
        "C": fahrenheitToCelsius,
        "K": fahrenheitToKelvin
    },
    "K": {
        "C": kelvinToCelsius,
        "F": kelvinToFahrenheit
    }
};


const convert = (temperature, fromScale, toScale) => {
    temperature = parseFloat(temperature);
    if (isNaN(temperature)) {
        throw new Error("Temperature must be a valid number.");
    }

    fromScale = fromScale.toUpperCase();
    toScale = toScale.toUpperCase();

    if (fromScale == toScale) {
        return temperature;
    }
    if (!converterMap[fromScale] || !converterMap[fromScale][toScale]) {
        throw new Error("Not a valid conversion.");
    }

    const conversion = converterMap[fromScale][toScale];
    return conversion(temperature);
}

export default convert;
convert(0, 'c', 'F')