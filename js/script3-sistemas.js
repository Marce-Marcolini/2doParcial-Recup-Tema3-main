let totalObras = 0;

// 1. Genera los campos de cada obra
function generarCampos() {
  totalObras = +document.querySelector("#cantObras").value;

  if (!totalObras || totalObras <= 0) {
    alert("Ingrese un número válido mayor a 0");
    return;
  }

  // Renombramos la variable a informacionObras
  let informacionObras = "";

  for (let i = 1; i <= totalObras; i++) {
    informacionObras += `
            <div class="bloque-obra">
                <h3>Obra #${i}</h3>
                <label>Nombre:</label>
                <input type="text" class="inp-nombre">
                
                <label>Cantidad de luces:</label>
                <input type="number" class="inp-luces">
                
                <label>Horas de func. por día:</label>
                <input type="number" class="inp-horas">
                
                <label>Consumo (kWh por día):</label>
                <input type="number" class="inp-kwh">
                
                <label>Costo ($ por kWh):</label>
                <input type="number" class="inp-costo">
            </div>
        `;
  }

  // Inyectamos el contenido usando la nueva variable
  document.querySelector("#camposObras").innerHTML = informacionObras;
  document.querySelector("#seccion-paso1").classList.add("oculto");
  document.querySelector("#seccion-paso2").classList.remove("oculto");
}

// 2. Procesa y muestra los resultados (Versión ultra simplificada)
function calcularResultados() {
  let totalKwh = 0;
  let mayorHoras = -1;
  let obraMayorNombre = "";
  let obraMayorCostoDiario = 0;
  let obrasConMasDe20Luces = 0;

  const bloques = document.querySelectorAll(".bloque-obra");

  // Recorrido simple con un for tradicional
  for (let i = 0; i < bloques.length; i++) {
    let bloque = bloques[i];

    let nombre = bloque.querySelector(".inp-nombre").value;
    let luces = +bloque.querySelector(".inp-luces").value || 0;
    let horas = +bloque.querySelector(".inp-horas").value || 0;
    let kwh = +bloque.querySelector(".inp-kwh").value || 0;
    let costoKwh = +bloque.querySelector(".inp-costo").value || 0;

    // Total de kWh acumulado
    totalKwh += kwh;

    // Evaluación de la obra con mayor tiempo de funcionamiento
    if (horas > mayorHoras) {
      mayorHoras = horas;
      obraMayorNombre = nombre;
      obraMayorCostoDiario = kwh * costoKwh;
    }

    // Conteo de obras con más de 20 luces
    if (luces > 20) {
      obrasConMasDe20Luces++;
    }
  }

  // Porcentaje de obras con más de 20 luces
  let porcentajeMas20 = (obrasConMasDe20Luces / totalObras) * 100;

  // Despliegue de resultados en el DOM
  document.querySelector("#resTotalKwh").textContent =
    totalKwh.toFixed(2) + " kWh";
  document.querySelector("#resNombreMayor").textContent = obraMayorNombre;
  document.querySelector("#resCostoMayor").textContent =
    obraMayorCostoDiario.toFixed(2);
  document.querySelector("#resPorcentajeLuces").textContent =
    porcentajeMas20.toFixed(1);

  document.querySelector("#seccion-paso2").classList.add("oculto");
  document.querySelector("#seccion-resultados").classList.remove("oculto");
}
