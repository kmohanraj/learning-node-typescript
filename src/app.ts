import express from "express";
import cors from "cors";

const app = express();
const port = 8081;

const corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions))
app.get("/", (req, res) => {
    res.json({ message: "Welcome to MERN Typescript"})
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});