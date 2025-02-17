document.addEventListener('DOMContentLoaded', function() {
    // --- Distance Converter ---
    if (document.getElementById('distance-category')) { // Homepage - Category box link (No JS needed here for homepage, just linking)
        // No JavaScript needed for homepage category links, handled by HTML links
    }

    if (document.getElementById('distanceInput')) { // Distance page conversion logic
        const inputElement = document.getElementById('distanceInput');
        const fromUnitSelect = document.getElementById('fromUnit');
        const metersResultDisplay = document.getElementById('metersResult');
        const kilometersResultDisplay = document.getElementById('kilometersResult');
        const feetResultDisplay = document.getElementById('feetResult');
        const milesResultDisplay = document.getElementById('milesResult');
        const footballFieldsResultDisplay = document.getElementById('footballFieldsResult');

        function convertDistance() {
            const inputValue = parseFloat(inputElement.value);
            const fromUnit = fromUnitSelect.value;

            if (isNaN(inputValue)) {
                updateDistanceResults(0, 0, 0, 0, 0); // Reset to 0 if input is not a number
                return;
            }

            let meters = 0;

            if (fromUnit === 'meters') {
                meters = inputValue;
            } else if (fromUnit === 'kilometers') {
                meters = inputValue * 1000;
            } else if (fromUnit === 'feet') {
                meters = inputValue / 3.28084;
            } else if (fromUnit === 'miles') {
                meters = inputValue * 1609.34;
            } else if (fromUnit === 'footballFields') {
                meters = inputValue * 109.7; // Approximate football field length in meters
            }

            const kilometers = meters / 1000;
            const feet = meters * 3.28084;
            const miles = meters / 1609.34;
            const footballFields = meters / 109.7;

            updateDistanceResults(meters, kilometers, feet, miles, footballFields);
        }

        function updateDistanceResults(meters, kilometers, feet, miles, footballFields) {
            metersResultDisplay.textContent = `Meters: ${meters.toFixed(2)}`;
            kilometersResultDisplay.textContent = `Kilometers: ${kilometers.toFixed(2)}`;
            feetResultDisplay.textContent = `Feet: ${feet.toFixed(2)}`;
            milesResultDisplay.textContent = `Miles: ${miles.toFixed(2)}`;
            footballFieldsResultDisplay.textContent = `Football Fields: ${footballFields.toFixed(2)}`;
        }

        inputElement.addEventListener('input', convertDistance);
        fromUnitSelect.addEventListener('change', convertDistance);
        convertDistance(); // Initial conversion on page load
    }


    // --- Weight Converter ---
    if (document.getElementById('weightInput')) { // Weight page conversion logic
        const inputElement = document.getElementById('weightInput');
        const fromUnitSelect = document.getElementById('fromUnit');
        const gramsResultDisplay = document.getElementById('gramsResult');
        const kilogramsResultDisplay = document.getElementById('kilogramsResult');
        const ouncesResultDisplay = document.getElementById('ouncesResult');
        const poundsResultDisplay = document.getElementById('poundsResult');
        const schoolBusesResultDisplay = document.getElementById('schoolBusesResult');

        function convertWeight() {
            const inputValue = parseFloat(inputElement.value);
            const fromUnit = fromUnitSelect.value;

            if (isNaN(inputValue)) {
                updateWeightResults(0, 0, 0, 0, 0);
                return;
            }

            let kilograms = 0;

            if (fromUnit === 'grams') {
                kilograms = inputValue / 1000;
            } else if (fromUnit === 'kilograms') {
                kilograms = inputValue;
            } else if (fromUnit === 'ounces') {
                kilograms = inputValue / 35.274;
            } else if (fromUnit === 'pounds') {
                kilograms = inputValue / 2.20462;
            } else if (fromUnit === 'schoolBuses') {
                kilograms = inputValue * 11340; // Approximate school bus weight in kg
            }

            const grams = kilograms * 1000;
            const ounces = kilograms * 35.274;
            const pounds = kilograms * 2.20462;
            const schoolBuses = kilograms / 11340;

            updateWeightResults(grams, kilograms, ounces, pounds, schoolBuses);
        }

        function updateWeightResults(grams, kilograms, ounces, pounds, schoolBuses) {
            gramsResultDisplay.textContent = `Grams: ${grams.toFixed(2)}`;
            kilogramsResultDisplay.textContent = `Kilograms: ${kilograms.toFixed(2)}`;
            ouncesResultDisplay.textContent = `Ounces: ${ounces.toFixed(2)}`;
            poundsResultDisplay.textContent = `Pounds: ${pounds.toFixed(2)}`;
            schoolBusesResultDisplay.textContent = `School Buses: ${schoolBuses.toFixed(4)}`; // School buses to 4 decimal places
        }

        inputElement.addEventListener('input', convertWeight);
        fromUnitSelect.addEventListener('change', convertWeight);
        convertWeight(); // Initial conversion on page load
    }


     // --- Volume Converter ---
     if (document.getElementById('volumeInput')) { // Volume page conversion logic
        const inputElement = document.getElementById('volumeInput');
        const fromUnitSelect = document.getElementById('fromUnit');
        const millilitersResultDisplay = document.getElementById('millilitersResult');
        const litersResultDisplay = document.getElementById('litersResult');
        const fluidOuncesResultDisplay = document.getElementById('fluidOuncesResult');
        const gallonsResultDisplay = document.getElementById('gallonsResult');
        const olympicPoolsResultDisplay = document.getElementById('olympicPoolsResult');

        function convertVolume() {
            const inputValue = parseFloat(inputElement.value);
            const fromUnit = fromUnitSelect.value;

            if (isNaN(inputValue)) {
                updateVolumeResults(0, 0, 0, 0, 0);
                return;
            }

            let liters = 0;

            if (fromUnit === 'milliliters') {
                liters = inputValue / 1000;
            } else if (fromUnit === 'liters') {
                liters = inputValue;
            } else if (fromUnit === 'fluidOunces') {
                liters = inputValue / 33.814;
            } else if (fromUnit === 'gallons') {
                liters = inputValue * 3.78541;
            } else if (fromUnit === 'olympicPools') {
                liters = inputValue * 2500000; // Approximate Olympic pool volume in liters
            }

            const milliliters = liters * 1000;
            const fluidOunces = liters * 33.814;
            const gallons = liters / 3.78541;
            const olympicPools = liters / 2500000;

            updateVolumeResults(milliliters, liters, fluidOunces, gallons, olympicPools);
        }

        function updateVolumeResults(milliliters, liters, fluidOunces, gallons, olympicPools) {
            millilitersResultDisplay.textContent = `Milliliters: ${milliliters.toFixed(2)}`;
            litersResultDisplay.textContent = `Liters: ${liters.toFixed(2)}`;
            fluidOuncesResultDisplay.textContent = `Fluid Ounces: ${fluidOunces.toFixed(2)}`;
            gallonsResultDisplay.textContent = `Gallons: ${gallons.toFixed(2)}`;
            olympicPoolsResultDisplay.textContent = `Olympic Pools: ${olympicPools.toFixed(4)}`; // Olympic Pools to 4 decimal places
        }

        inputElement.addEventListener('input', convertVolume);
        fromUnitSelect.addEventListener('change', convertVolume);
        convertVolume(); // Initial conversion on page load
    }


    // --- Temperature Converter ---
    if (document.getElementById('temperatureInput')) { // Temperature page conversion logic
        const inputElement = document.getElementById('temperatureInput');
        const fromUnitSelect = document.getElementById('fromUnit');
        const celsiusResultDisplay = document.getElementById('celsiusResult');
        const kelvinResultDisplay = document.getElementById('kelvinResult');
        const fahrenheitResultDisplay = document.getElementById('fahrenheitResult');


        function convertTemperature() {
            const inputValue = parseFloat(inputElement.value);
            const fromUnit = fromUnitSelect.value;

            if (isNaN(inputValue)) {
                updateTemperatureResults(0, 0, 0);
                return;
            }

            let celsius = 0;

            if (fromUnit === 'celsius') {
                celsius = inputValue;
            } else if (fromUnit === 'fahrenheit') {
                celsius = (inputValue - 32) * 5/9;
            } else if (fromUnit === 'kelvin') {
                celsius = inputValue - 273.15;
            }


            const fahrenheit = (celsius * 9/5) + 32;
            const kelvin = celsius + 273.15;


            updateTemperatureResults(celsius, kelvin, fahrenheit);
        }

        function updateTemperatureResults(celsius, kelvin, fahrenheit) {
            celsiusResultDisplay.textContent = `Celsius: ${celsius.toFixed(2)}`;
            kelvinResultDisplay.textContent = `Kelvin: ${kelvin.toFixed(2)}`;
            fahrenheitResultDisplay.textContent = `Fahrenheit: ${fahrenheit.toFixed(2)}`;
        }

        inputElement.addEventListener('input', convertTemperature);
        fromUnitSelect.addEventListener('change', convertTemperature);
        convertTemperature(); // Initial conversion on page load
    }


});
