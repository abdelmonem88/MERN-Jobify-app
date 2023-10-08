// create express server
import express, { Request, Response, NextFunction } from "express";
const app = express();
const port = 3000;

// register routes
app.get("/", (req, res) => res.send("Hello World!"));

// start express server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
