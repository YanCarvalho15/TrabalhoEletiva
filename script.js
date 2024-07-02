function calculateCarbonFootprint() {
    // Valores de emissão (kg CO2e)
    const electricityEmissionFactor = 0.233; // kg CO2e por kWh
    const fuelEmissionFactor = 2.31; // kg CO2e por litro
    const flightEmissionFactor = 0.09; // kg CO2e por km

    // Obter valores do formulário
    const electricity = document.getElementById('electricity').value;
    const fuel = document.getElementById('fuel').value;
    const flights = document.getElementById('flights').value;

    // Calcular pegada de carbono
    const electricityCarbon = electricity * electricityEmissionFactor * 12; // anual
    const fuelCarbon = fuel * fuelEmissionFactor * 12; // anual
    const flightsCarbon = flights * flightEmissionFactor;

    const totalCarbonFootprint = electricityCarbon + fuelCarbon + flightsCarbon;

    // Mostrar resultado
    document.getElementById('result').innerText = `Sua pegada de carbono anual é de aproximadamente ${totalCarbonFootprint.toFixed(2)} kg CO2e.`;
}