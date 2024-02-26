const express = require("express");

const app = express(); // Using the express module

// defines what should happen when get request is made to the home (/) root.
// after a callback function tells the server what to do when a request is made.

app.get("/", function(request, response){   // can be req, res
    // console.log(request);
    response.send("<h1>Hello, World!    </h1>")
});

app.get("/contact", function(req, res){
    res.send("<p>My email is aaliconcern@gmail.com</p>")
})

app.get("/about", function(req, res){
    res.send("<h1>Hi, my name is Abba</h1> <h2>I am an aspiring Data Scientist and Software Developer.</h2>")
})

app.listen(3000, function(){    //Listen on speciffc port for nay HTTP requests 
    console.log("Server has started on port 3000.")
}); 