// import express
const express = require("express");

// Crear un servidor express
const app = express();

// Inicialización del servidor en un puerto especifico
app.listen(5005, () => {
    console.log("Servidor ejecutándose en el puerto 5005")
});
