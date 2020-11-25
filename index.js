// Inicialización de las variables de entorno de nuestro .env
require('dotenv').config();
// Conexión con Base de datos
require('./src/utils/mongoClient.js');
// Inicializador del api y exporta todo lo necesario para la inicialización del server
const { PORT, app } = require('./src/api/index.js');

app.listen(PORT, () => {
  console.log(`Server initialized on PORT: ${PORT}`);
});
