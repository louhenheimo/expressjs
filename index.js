import Express from "express";
import Products from "./products.js";

const app = Express();
const port = 3200;

// GET, PUT, POST, DELETE

// Main path / on webserver
app.get("/", (req, res)=> {
    // res.send("Hello World");
    res.json(Products)
})

app.listen(port, ()=> console.log("Listening on port " + port))