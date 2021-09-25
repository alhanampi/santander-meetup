import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import dbConnection from "./config/dbConfig.js";
import usersRouter from "./routes/userRoutes.js";
import meetupsRouter from "./routes/meetupsRoutes.js";
import weatherRouter from './routes/weatherRoutes.js'

//configs
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
dbConnection();
app.use(express.json());
app.use(morgan("dev"));

//routes:

//test routes:
app.get("/api", (req, res) => {
  res.send("test route");
});

//this is the complete api route for the climate
app.get('/weather', (req, res) => {
  res.send(`https://api.weatherbit.io/v2.0/forecast/daily?city=Buenos%20Aires&country=AR&key=f2a43010c1d146ce9235d14cabf8142e&days=16`)
})

//endpoints:
app.use("/api/users", usersRouter);
app.use("/api/meetups", meetupsRouter);
app.use("/api/weather", weatherRouter)

//app start
app.listen(PORT, () => {
  console.log(`Birras app running at http://localhost:${PORT}. Welcome!`);
});
