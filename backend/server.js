/**
 * server.js
 * -----------------------
 * Starts the Express Server.
 */

require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("====================================");
  console.log(`Server Running`);
  console.log(`http://localhost:${PORT}`);
  console.log("====================================");
});
