document.addEventListener("DOMContentLoaded", () => {
  // Matriz de datos
  const datos = [
    "Rafael Lozano-Hemmer es un artista mexicano-canadiense especializado en instalaciones interactivas en espacios públicos.",
    "Su obra combina tecnología avanzada como sensores biométricos, robótica y datos en tiempo real.",
    "En su proyecto Vectorial Elevation, ciudadanos controlaban reflectores gigantes a través de internet.",
    "Pulse Room es una instalación que traduce los latidos cardíacos de los visitantes en pulsos de luz.",
    "Su trabajo explora la relación entre el cuerpo humano, la tecnología y la vigilancia.",
    "Ha expuesto sus obras en más de 70 países alrededor del mundo.",
    "Lozano-Hemmer estudió ingeniería antes de dedicarse al arte, lo que influye en su enfoque tecnológico.",
    "Sus instalaciones suelen involucrar la participación activa del público para activar la obra.",
    "Fue ganador del prestigioso premio Ars Electronica por su innovador uso de tecnología en arte.",
    "Utiliza la luz como lenguaje poético para explorar temas de identidad, memoria y presencia.",
  ];

  // Selección de datos mediante querySelector
  const textoDato = document.querySelector(".texto-dato");
  const botonDato = document.querySelector(".boton-dato");

  let indiceAnterior = -1;

  const obtenerDatoAleatorio = () => {
    let indiceAleatorio;
    // Previene repetir el mismo dato de forma consecutiva
    do {
      indiceAleatorio = Math.floor(Math.random() * datos.length);
    } while (indiceAleatorio === indiceAnterior && datos.length > 1);

    indiceAnterior = indiceAleatorio;
    return datos[indiceAleatorio];
  };

  const actualizarDato = () => {
    // Transición suave de desvanecimiento
    textoDato.style.opacity = "0";

    setTimeout(() => {
      textoDato.textContent = obtenerDatoAleatorio();
      textoDato.style.opacity = "1";
    }, 200);
  };

  // Asignación del evento click
  botonDato.addEventListener("click", actualizarDato);
});
