function ocultarAlerts() {
    document.getElementById('rojo').style.display = "none";
    document.getElementById('amarillo').style.display = "none";
    document.getElementById('verde').style.display = "none";
}
function mostrarAlertRoja() {
    document.getElementById('rojo').style.display = "block";
}
function mostrarAlertAmarillo() {
    document.getElementById('amarillo').style.display = "block";
}
function mostrarAlertVerde() {
    document.getElementById('verde').style.display = "block";
}

function addCity(){
    let newCity = document.getElementById('agregarCiudad').value;
    let cities = getCitiesFromLocalStorage();
    if (cities.indexOf(newCity)>=0){
        document.getElementById('verde').style.display = "none";
        document.getElementById("amarillo").style.display = "block";
    } else {
        cities.push(newCity);
        document.getElementById('verde').style.display = "block";
        document.getElementById("amarillo").style.display = "none";
    }
    localStorage.setItem("CITIES",JSON.stringify(cities));
}

const llamarDatos= async () => {
    try {
        let miciudad = document.getElementById("Ciudades").value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${miciudad}&appid=${apiKey}&units=metric&lang=es`;
        const res = await fetch(url);
        if (res.ok) {
            const datos = await res.json();
            console.log(datos);
        } else {
            console.log(res.status); // 404            
        }
    } catch (err) {
        console.log(err);
    }
};

function getCitiesFromLocalStorage(){
    let cities = localStorage.getItem("CITIES");
    if (cities){
        cities = JSON.parse(cities);
    }else{
        cities=[];
    }
    return cities;
}