import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import addModelRouter from "./router/addModelRouter.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175'],
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    credentials: true,
}));

app.use('/api/form', addModelRouter);

app.get("/api/test", (req, res) => {
    res.send("i am  test api");
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});