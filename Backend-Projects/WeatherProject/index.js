const express = require("express");
const https = require("https");
const bodyParser = require("body-parser")
const { stringify } = require("querystring");

const app = express()
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){

    res.sendFile(__dirname + "/index.html");


});

app.post("/", function(req, res){
    
    const city = req.body.cityName
    const apiKey = "f356478af80d7d971c921449eb54523e"
    const unit= "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid=" + apiKey + "&units=" + unit   //URL for get requesta and query sent to API
    https.get(url, function(response){
        console.log(response.statusCode) //Printing status code

        response.on("data", function(data){
            const weatherData =JSON.parse(data) //Parsing compressed weather data into JSON format     
            const temp = weatherData.main.temp
            const desc = weatherData.weather[0].description
            const code = weatherData.weather[0].icon
            const imageURL = "https://openweathermap.org/img/wn/"+code+"@2x.png"
            res.write("<h1>The temperature in " + city + " is " + temp + " degrees Celcius.</h1>");
            res.write("<p>The weather is currently " + desc + " .</p>");
            res.write("<img src="+imageURL+">")
            res.send()

            // const object = {
            //     name: "Abba",
            //     age: 20
            // }

            // console.log(JSON.stringify(object)) //Stringify will convert the obejct into a string and then match the string into a JSON format


        })
    })

})


 

app.listen(3000, function() {
    console.log("Server is running on port 3000.")
})