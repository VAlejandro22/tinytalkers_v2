export const themes = {
    family: ["madre", "padre", "hermano", "hermana", "abuelo"],
    colors: ["rojo", "azul", "verde", "amarillo", "rosa"],
    fruits: ["manzana", "plátano", "uva", "naranja", "fresa"],
    animals: ["perro", "gato", "pájaro", "pez", "conejo"],
  };
  
  export type Theme = keyof typeof themes;