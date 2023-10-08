// create express server
import express, { Request, Response, NextFunction } from "express";
const app = express();
const port = 3000;

app.use(express.json());

// register routes
app.get("/", (req, res) => res.send("Hello World!"));
app.post("/", (req, res) => {
  console.log(req);

  res.json({ message: "Data received", data: req.body });
});

// start express server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
