var protrons = 0;
var neutrons = 0;
var electrons = 0;

function protClick(number){
    protrons = protrons + number;
    document.getElementById("protrons").innerHTML = protrons;
};

function neutClick(number){
    neutrons = neutrons + number;
    document.getElementById("neutrons").innerHTML = neutrons;
};

function elecClick(number){
    electrons = electrons + number;
    document.getElementById("electrons").innerHTML = electrons;
};

var Hydrogen = 0;

function buyHydrogen(){
    if(protrons >= 1 && electrons >= 1){
        Hydrogen = Hydrogen + 1;
        protrons = protrons - 1;
        electrons = electrons - 1;
        document.getElementById('H').innerHTML = Hydrogen;
        document.getElementById('protrons').innerHTML = protrons;
        document.getElementById('electrons').innerHTML = electrons;

    }
    
}

var HCreators = 0;

function HCreator(){
    var HCreatorCost = Math.floor(10 * Math.pow(1.1,HCreators));
    if(Hydrogen >= HCreatorCost){
        HCreators= HCreators + 1;
        Hydrogen = Hydrogen - HCreatorCost;
        document.getElementById('HCreators').innerHTML = HCreator;
        document.getElementById('Hydrogen').innerHTML = Hydrogen;
        
        }
}