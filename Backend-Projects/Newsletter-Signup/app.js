const bodyParser = require("body-parser")
const express = require("express")
const request = require("request")
const https = require("https")

const app = express()
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));


app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html")
})

app.post("/", function(req, res){
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const email = req.body.email
    
    var data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstname,
                    LNAME: lastname
                }
            }
        ]
    }

    const jsonData = JSON.stringify(data)
    
    const url = "https://us18.api.mailchimp.com/3.0/lists/802d358d75"

    const options = {
        method: "POST",
        auth: "abba1:94b10d56c16ad7a08bb91e3072a32bec-us18"
    }

    const request = https.request(url, options, function(response){

        if (response.statusCode === 200){
            res.sendFile(__dirname + "/success.html")

        } else {
            res.sendFile(__dirname + "/failure.html")
        }

        response.on("data", function(data){
            console.log(JSON.parse(data));
        })
    })

    request.write(jsonData)
    request.end()
})


app.post("/failure", function(req, res){
    res.redirect("/")
})

//Listening on dynamic port provided by Heroku plus OR statment to test locally on port 3000
app.listen(process.env.PORT || 3000, function(){
    console.log("Server is running on port 3000.")
})

// API_KEY
// 94b10d56c16ad7a08bb91e3072a32bec-us18

//List ID
// 802d358d75    