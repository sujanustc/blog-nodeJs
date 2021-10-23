const express = require("express");
const app = express();
const dotenv = require("dotenv");

// dotenv.config();
// app.get("/", (req, res) => res.send("Hello World! app"));

// // 404 page
// app.use((req, res, next) => {
//   res.status(404).json({ error: "404 page not found" });
// });

// app.listen(4000, () =>
//   console.log(`App listening at http://localhost:${4000} !!!`)
// );

let name = "sujan";

console.log(name.length);
