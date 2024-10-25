function convertTemperature(from, to, amount) {
    if (from === "Fahrenheit" && to === "Celsius") {
        return (amount - 32) * 5 / 9;
    } else if (from === "Celsius" && to === "Fahrenheit") {
        return (amount * 9 / 5) + 32;
    } else {
        return "Conversion not available";
    }
}

function FahrenTemp() {
    document.getElementById('fromtemp').value = "Fahrenheit";
}

function celTemp() {
    document.getElementById('fromtemp').value = "Celsius";
}

function FahrenTempto() {
    document.getElementById('totemp').value = "Fahrenheit";
}

function celTempto() {
    document.getElementById('totemp').value = "Celsius";
}

function performConversion() {
    const fromtemperature = document.getElementById('fromtemp').value;
    const totemperature = document.getElementById('totemp').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (!amount || isNaN(amount)) {
        document.getElementById('result').innerText = "Please enter a valid amount.";
        return;
    }

    const result = convertTemperature(fromtemperature, totemperature, amount);

    let fromSymbol = fromtemperature === "Fahrenheit" ? "°F" : "°C";
    let toSymbol = totemperature === "Fahrenheit" ? "°F" : "°C";

    if (typeof result === 'number') {
        // Display result with temperature and symbols
        document.getElementById('result').innerText = `Converted Amount: ${amount}${fromSymbol} = ${result.toFixed(2)}${toSymbol}`;
    } else {
        document.getElementById('result').innerText = result;  // Display the error message
    }
}
