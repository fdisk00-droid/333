// CAJA ROJA — UNIVERSAL PHYSICAL STORAGE UNIT

export const CAJA_ROJA = {
  id: "MONJARVIREDCORE",
  color_hex: "#FF0000",
  mode: "nomadic_design",
  shell: "estructura_compacta",
  state: "plegada",

  dimensiones: {
    plegada: "formato_maleta",
    desplegada: "modulo_multiuso"
  },

  funciones: [
    "superficiedetrabajo",
    "modulodealmacenaje",
    "nodoespacialportatil"
  ],

  specs: {
    peso: "optimizadoparamovilidad",
    ensamblaje: "sin_herramientas",
    resistencia: "alta",
    mantenimiento: "minimo"
  },

  deploy() {
    this.state = "desplegada";
    console.log("> entorno reescrito");
  },

  fold() {
    this.state = "plegada";
    console.log("> unidad portátil lista");
  }
};