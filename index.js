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

app.use(express.static('public')); // Activa la carpeta pública del proyecto

// Establecer vistas
// Local: __dirname vale http://localhost:PORT
// Remoto: __dirname vale https://leonardo-ih-04-backend.herokuapp.com
app.set("views", __dirname + "/views")

// Indicar que motor de template vamos a usar
// Handlebars - es un motor que permite manejar lógica dentro de archivos HTML
app.set("view engine", "hbs")

// 3. RUTAS
app.use("/", require("./routes/index.routes"));

// 4. SERVIDOR
app.listen(process.env.PORT, () => {
    console.log(`It's alive`);
})
