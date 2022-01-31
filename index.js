/*
* PATORNES DE DISEÑO
* SON PROPUESTAS Y CAOSO DE USO QUE PERMITN RESOLVER PROBLEMAS COTIDIANOS

/////// MODULE PATTERN - PATRÓN MODULAR ///////////

- APLICA VALIDEZ DE IMPORTACIONES Y EXPORTACIONES EN UN PROYECTO

*/

// 1.- IMPORTACIONES
// PROCESO DE TRAER FUNCIONES O VARIABLES DE OTROS ARCHIVOS  JS  A ESTE

// A. Archivos externos propios
//const suma = require("./suma");

// B. Archivos de node_modules
// EXPRESS ES UN A LIBRERÍA QUE FUNCIONA PARA LA GESTIÓN DE RUTAS Y MIDDLEWARES
const express = require("express");
const app = express();

// 2. MIDDLEWARES
require("dotenv").config() // Activar variables de entorno

// 3. RUTAS
app.use("/", require("./routes/index.routes"));

// 4. SERVIDOR
app.listen(process.env.PORT, () => {
    console.log(`It's alive`);
})
