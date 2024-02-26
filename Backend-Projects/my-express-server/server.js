const express = require("express");

const app = express(); // Using the express module

app.listen(3000, function(){    //Listen on speciffc port for nay HTTP requests 
    console.log("Server has started on port 3000.")
}); 