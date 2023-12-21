// // output = [0, 2, 6, 7]
// // output.pop()
// // console.log(output)

// names = ["Chidi", "Tobi", "Samantha", "Jason", "Oyinye"]
// function WhosBuyingLunch(names) { 
//     var random = Math.floor(Math.random()*names.length)
//     console.log(names[random] + " is going to buy lunch today!")
// }

// WhosBuyingLunch(names)

var weight = prompt("Enter your weight:")
var height = prompt("Enter your height:")

function bmi(height, weight){
    return (weight/(height*height));
}
console.log("Your BMI index is " + bmi)



