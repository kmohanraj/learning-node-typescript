import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = 8081;

const corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions))

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to MERN Typescript"})
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});