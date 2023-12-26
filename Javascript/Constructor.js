function BellBoy(name, age, hasWorkPermit, languages){
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.moveSuitcase = function() {
        console.log("May I take your suitcase?")
    } 
} 

var bellboy1 = new BellBoy("Abba", 20, true, ["English", "Arabic"]);
var bellboy2 = new BellBoy("Usman", 18, false, ["English"]);
var bellboy3 = new BellBoy("Sultan", 14, false, ["English", "Mandarin"]);

bellboy1.moveSuitcase()