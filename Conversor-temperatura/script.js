
const temperatureInput = document.getElementById('temperaturainput');
const fromUnitSelect = document.getElementById('fromUnit');
const toUnitSelect = document.getElementById('toUnit');
const convertButton = document.getElementById('convertButton');
const convertedTemperatureDisplay = document.getElementById('convertedTemperature');
const gaugeFill = document.getElementById('gague-fill');
const gaugeLabel = document.getElementById('gague-label');


convertButton.addEventListener('click', convertTemperature);


function convertTemperature() {
    
    const temperature = parseFloat(temperatureInput.value);

    if (isNaN(temperature)) {
        alert("Por favor, digite um número válido para a temperatura.");
        return;
    }

    const fromUnit = fromUnitSelect.value;
    const toUnit = toUnitSelect.value;

    let convertedTemperature;
    let gaugeLevel = 0;
    let gaugeColorClass = '';

    let tempInCelsius;
    if (fromUnit === 'celsius') {
        tempInCelsius = temperature;
    } else if (fromUnit === 'fahrenheit') {
        tempInCelsius = (temperature - 32) * 5 / 9;
    } else if (fromUnit === 'kelvin') {
        tempInCelsius = temperature - 273.15;
    }

    if (toUnit === 'celsius') {
        convertedTemperature = tempInCelsius;
    } else if (toUnit === 'fahrenheit') {
        convertedTemperature = (tempInCelsius * 9 / 5) + 32;
    } else if (toUnit === 'kelvin') {
        convertedTemperature = tempInCelsius + 273.15;
    }

    convertedTemperature = convertedTemperature.toFixed(2);

    convertedTemperatureDisplay.textContent = `${convertedTemperature} ${toUnit.toUpperCase()}`;

    if (tempInCelsius < 10) {
        gaugeLevel = 25;
        gaugeColorClass = 'cold';
    } else if (tempInCelsius >= 10 && tempInCelsius < 30) {
        gaugeLevel = 60;
        gaugeColorClass = 'normal';
    } else {
        gaugeLevel = 90;
        gaugeColorClass = 'hot';
    }

    gaugeFill.style.height = `${gaugeLevel}%`;
    gaugeFill.className = `gauge-fill ${gaugeColorClass}`;

    gaugeLabel.textContent = '';
}