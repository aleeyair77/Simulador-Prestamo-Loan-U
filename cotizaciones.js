let listadoDolar = document.getElementById("cotizaciones")

fetch("https://api.bluelytics.com.ar/v2/latest")
    .then(response => response.json())
    .then(data => {listadoDolar.innerHTML = `<span> Dolar Blue venta: ${data.blue.value_sell}</span>
                                            <span> Dolar Blue compra: ${data.blue.value_buy}</span>`
})