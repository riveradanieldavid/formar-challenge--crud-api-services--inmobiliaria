import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { propiedadesRouter } from "./routers/propiedades.js";


dotenv.config();
const port = process.env.PORT || 3001; // Default port is 3001 if PORT is not set in the .env file

const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// router
app.use('/propiedades', propiedadesRouter)
app.listen(port, () => {
    console.log("Active server")
})
