array = [1, 2, 3, 4, 5, 6];
choice1 = Math.floor(Math.random() * array.length+1);
choice2 = Math.floor(Math.random() * array.length+1);
console.log(choice1)
console.log(choice2)

document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice"+choice1+".png");
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice"+choice2+".png");

if (choice1 > choice2){
    document.getElementsByTagName("h1")[0].innerHTML = "🚩 Player 1 Wins!";
} else if (choice2 > choice1){
    document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Wins! 🚩";
} else {
    document.getElementsByTagName("h1")[0].innerHTML = "Draw!";
}


