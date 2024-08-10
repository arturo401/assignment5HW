
const lucas = { weight: 78, height: 1.69 };
const peter = { weight: 92, height: 1.95 };


function calculateBMI(weight, height) {
    return (weight / (height * height)).toFixed(1);
}


const lucasBMI = calculateBMI(lucas.weight, lucas.height);
const peterBMI = calculateBMI(peter.weight, peter.height);

let outputMessage = "";

if (lucasBMI > peterBMI) {
    outputMessage = `Lucas' BMI (${lucasBMI}) is higher than Peter's (${peterBMI})!`;
} else if (lucasBMI < peterBMI) {
    outputMessage = `Peter's BMI (${peterBMI}) is higher than Lucas' (${lucasBMI})!`;
} else {
    outputMessage = `Lucas' BMI (${lucasBMI}) is equal to Peter's (${peterBMI})!`;
}



console.log(outputMessage);

document.getElementById("output").innerText = outputMessage;

function convertToFahrenheit() {
    const celsius = document.getElementById('celsius').value;
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('result').innerText = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
}

function convertToCelsius() {
    const fahrenheit = document.getElementById('fahrenheit').value;
    const celsius = (fahrenheit - 32) * 5/9;
    document.getElementById('result').innerText = `${fahrenheit}°F is ${celsius.toFixed(2)}°C`;
}

