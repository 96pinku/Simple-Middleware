import express from "express";
import {loggingMiddleware} from "./loggingMiddleware.js";
const port = process.env.PORT || 3000;
// const host = process.env.HOST || "localhost";
const app = express();
app.use(express.json());
app.use(loggingMiddleware);
app.get("/api", (req, res) => {
    return res.status(200).json({
        message: "Request Successful",
    });
});
app.get("/api/abc", (req, res) => {
    return res.status(200).json({
        message: "Request Successful",
    });
});


app.listen(port, () => {
    console.log("Server is running on port ", port);
});