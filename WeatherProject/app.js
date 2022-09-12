const express = require("express"); // require express package
const https = require("https"); // require https
const bodyParser = require("body-parser");

const app = express(); // initialize new express app

app.use(bodyParser.urlencoded({extended: true})); // enable body parser to parse data

/* define what happens when root gets a request */
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");

});


app.post("/", function(req, res) {

  const city = req.body.cityName; // get city
  const state = req.body.stateName; // get state
  const query =  city + "," + state + ",US"; // concatenate city, state, country
  const apiKey = "773bac6cc9021a36cb26b67b0c44f63b";
  const unit = "imperial"
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" +  unit;

  console.log(query);
  //use get request to get data from url source
  https.get(url, function(response) {
    console.log(response.statusCode);

    response.on("data", function(data) {
      // convert data into JavaScript Object, store as weatherData
      const weatherData = JSON.parse(data) // parse weather data using JSON
      const temp = weatherData.main.temp // get temp
      const description = weatherData.weather[0].description // get weather description
      const icon = weatherData.weather[0].icon // get weather icon
      const imageURL = "http://openweathermap.org/img/wn/" + icon +"@2x.png" // build image URL
      res.write("<p>The weather is currently " + description + "</p>");
      res.write("<h1>The temperature in " + city + ", " + state +" is " +  temp + " degrees Fahrenheit</h1>");
      res.write("<img src=" + imageURL +">");
      res.send() // can only send one res.send() per get request
    });
  });

});




app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
