// Importar express
const express = require("express");
// Importar handlebars como template engine
 const exphbs = require("express-handlebars");
// Importar body parser que nos permite acceder al cuerpo de la petición HTTP
const bodyParser = require("body-parser"); 

// Importar la función de cálculo del interes
const { calcularMetodoFrances } = require("./calculoInteres");

// Crear un servidor express
const app = express();

// Indicar a express utilizar handlebars como template engine
app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));

app.set("view engine", "hbs");


//  Habilitar body parse para leer los datos del cuerpo de peticiones POST
app.use(bodyParser.urlencoded({ extended: true }));

// Crear una ruta para 
// Información sobre los verbos HTTP
// https://developer.mozilla.org/es/docs/Web/HTTP/Methods
app.get("/", (req, res, next) => {
 res.render("formulario_interes");

    app.post("/resultado", (req, res, next) => {
    }); 
//   console.log(req.body);
  // Asignación por destructuring
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
  const { monto, tasaInteres, tiempo } = req.body;

  calcularMetodoFrances(monto, tasaInteres, tiempo);

    res.render("/resultado");
});


// Inicializar el servidor en un puerto en específico
app.listen(5005, () => {
    console.log('Servidor ejecutándose en el puerto 5005');
});