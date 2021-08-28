const getCity = () => {
    document.getElementById("margin-div").style.display = "none";

    const inputValue = document.getElementById("input-feild").value;


    if (inputValue == "") {
        document.getElementById("error-message").style.display = "block";
    } else {
        document.getElementById("error-message").style.display = "none";

        document.getElementById("input-feild").value = "";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=15f93694d3c98711e0528cfa1c5baaf3`;
        fetch(url).then(res => res.json()).then(data => showDetails(data))
    }

}
const showDetails = (data) => {
    // Error text 
    if (data.cod == "404") {

        document.getElementById("error-message").style.display = "block";
    } else {
        document.getElementById("city-name").innerText = `${data.name}`

        const temp = parseFloat(data.main.temp - 273.15).toFixed(2);

        document.getElementById("temp-show").innerHTML = `${temp}°C`;

        // Icon Url 
        const iconUrl = ` http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        const aboutDay = data.weather[0].description;
        const UpperCase = aboutDay.toUpperCase();

        document.getElementById("img-div").innerHTML = `
        <img class="img-fluid" src="${iconUrl}">
        <h5 class="text-center text-dark pb-3">${UpperCase}</h5>
        `
    }

}