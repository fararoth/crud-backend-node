require("dotenv").config();

const app = require("./app");
require("./database");

async function main() {
  await app.listen(app.get("port")); //obtiene el valor del puerto en lugar del número para modificar todo con el archivo app
  console.log("server on port", app.get("port"));
}

main();
