// import express
const express = require("express");

// Importar handlebars como template engine
const exphbs = require("express-handlebars");

// Crear un servidor express
const app = express();

// Indicar a express utilizar handlebars como template engine
app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));


// Inicialización del servidor en un puerto especifico
app.listen(5005, () => {
    console.log("Servidor ejecutándose en el puerto 5005")
});
