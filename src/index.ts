let Posiciondellegada: Number = document.getElementById("Posiciondellegada");
if (Posiciondellegada === 1) {
  console.log("Medalla de oro");
} else {
  if (Posiciondellegada === 2) {
    console.log("Medalla de plata");
  } else if (Posiciondellegada === 3) {
    console.log("Medalla de bronce");
  } else console.log("Entregar medalla de participacion");
}
