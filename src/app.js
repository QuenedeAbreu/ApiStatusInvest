import express from "express";
import routers from "./routers/index.js";
const app = express()

// ------------ Rotas do app ---------------


// ---------------- app ---------------------

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', routers)


export default app