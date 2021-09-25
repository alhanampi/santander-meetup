import axios from "axios";

const city = encodeURIComponent("Buenos Aires");
const country = encodeURIComponent("AR");
const key = "f2a43010c1d146ce9235d14cabf8142e";
const API_URL = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&country=${country}&key=${key}&days=16`;

//GET: get the temp for the day. Could be expanded for more info
const getWeather = async (req, res) => {
  const params = req.params
  console.log('params:', req.params)
  const daysFromNow = params.days
  console.log('daysFromNow:', daysFromNow)
  
  const config = {
    header: "x-auth-token",
  };
  try {
    const day = await axios.get(API_URL, config);

    const weather = day.data.data[daysFromNow].temp;
    console.log('weather:', weather);

    return res.status(200).json(weather);
  } catch (error) {
    return res.status(500).send("server error");
  }
};


export default { getWeather };
