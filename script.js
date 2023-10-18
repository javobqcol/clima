let api_key ='07dfc905479764bd9cc563e0cfc5dadc'
let difkelvin = 273.17
let urlbase = `https://api.openweathermap.org/data/2.5/weather`


document.getElementById('botonBusqueda').addEventListener('click', () => {
  const ciudad = document.getElementById('ciudadEntrada').value
  if (ciudad){
    fetchdatosClima(ciudad)
  }
})

function fetchdatosClima(ciudad){
  fetch(`${urlbase}?q=${ciudad}&appid=${api_key}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima(data){
  console.log(data)
  const divDatosClima = document.getElementById('datosClima')
  divDatosClima.innerHTML=""
  const ciudadNombre = data.name + ", " + data.sys.country
  const temperatura = data.main.temp
  const descripcion = data.weather[0].description
  const humedad = data.main.humidity
  const icono = data.weather[0].icon
  const ciudadTitulo = document.createElement('h2')
  ciudadTitulo.textContent = ciudadNombre

  const humedadInfo = document.createElement('p')
  humedadInfo.textContent = `La humedad es ${humedad}%`
  
  const iconoInfo = document.createElement('img')
  iconoInfo.src= `https://openweathermap.org/img/wn/${icono}@4x.png`

  const temperaturaInfo = document.createElement('p')
  temperaturaInfo.textContent = `La temperatura es ${(temperatura - difkelvin).toFixed(2)}°C`
  
  const descripcionInfo = document.createElement('p')
  descripcionInfo.textContent = `La descripciom meteorologica es ${descripcion}`
  
  divDatosClima.appendChild(ciudadTitulo)
  divDatosClima.appendChild(temperaturaInfo)
  divDatosClima.appendChild(iconoInfo)
  
  divDatosClima.appendChild(humedadInfo)
  divDatosClima.appendChild(descripcionInfo)
}

