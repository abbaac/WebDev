// // // var weight = prompt("Enter your weight:")
// // // var height = prompt("Enter your height:")

// // // function bmi(height, weight){
// // //     return (weight/(height*height));
// // // }
// // // console.log("Your BMI index is " + bmi)

// // output = [0, 2, 6, 7]
// // output.pop()
// // console.log(output)

// names = ["Chidi", "Tobi", "Samantha", "Jason", "Oyinye"]
// function WhosBuyingLunch(names) { 
//     var random = Math.floor(Math.random()*names.length)
//     console.log(names[random] + " is going to buy lunch today!")
// }

// WhosBuyingLunch(names)


function fibonacciGenerator(n){
    output = []
    if (n === 1){
        output = [0]
    }
    else if (n === 2){
        output = [0, 1]
    }
    else {
        output = [0, 1]
        for (var i = 2; i < n; i++){
            output.push(output[i-2] + output[i-1])
        }
    }
    return output;
}
console.log(fibonacciGenerator(8))