import express from "express";
import bodyParser from "body-parser";
import fs from 'fs';

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;



const recipeJSON = JSON.parse(fs.readFileSync("./recipe.json", "utf-8"))


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  
});

app.post("/recipe", (req, res) => {
  res.sendFile(__dirname + "/src/components/recipe");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
