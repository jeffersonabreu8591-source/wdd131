// lasti modified
document.getElementById("currentyear").textContent =
new Date().getFullYear();

document.getElementById("lastModified").textContent =
`Last Modification: ${document.lastModified}`;


// aa
const temperature = 10;
const windSpeed = 5;


// this function will calculatre wind chill
function calculateWindChill(temp, speed) {
    return (13.12 + 0.6215 * temp - 11.37 * speed ** 0.16 + 0.3965 * temp * speed ** 0.16).toFixed(1);
}


// to displey it I need to specify the element
const windChillElement =
document.getElementById("windchill");


// I needa check condition to 
if (temperature <= 10 && windSpeed > 4.8) {
    windChillElement.textContent =
        `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
    windChillElement.textContent = "N/A";
}