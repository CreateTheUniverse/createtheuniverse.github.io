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

    };
    
};

var protCreators = 0;
var neutCreators = 0;
var elecCreators = 0;
var HCreators = 0;

function protCreator(){
    var protCreatorCost = Math.floor(10 * Math.pow(1.1,protCreators));
    if(protrons >= protCreatorCost){
        protCreators = protCreators + 1;
        protrons = protrons - protCreatorCost;
        document.getElementById('protCreators').innerHTML = protCreators;
        document.getElementById('protrons').innerHTML = protrons;
    };
    var nextprotCreatorCost = Math.floor(10 * Math.pow(1.1,protCreators));
    document.getElementById('protCreatorCost').innerHTML = nextprotCreatorCost;
    
};

function neutCreator(){
    var neutCreatorCost = Math.floor(10 * Math.pow(1.1,neutCreators));
    if(neutrons >= neutCreatorCost){
        neutCreators = neutCreators + 1;
        neutrons = neutrons - neutCreatorCost;
        document.getElementById('neutCreators').innerHTML = neutCreators;
        document.getElementById('neutrons').innerHTML = neutrons;
    };
    var nextneutCreatorCost = Math.floor(10 * Math.pow(1.1,neutCreators));
    document.getElementById('neutCreatorCost').innerHTML = nextneutCreatorCost;
    
};
function elecCreator(){
    var elecCreatorCost = Math.floor(10 * Math.pow(1.1,elecCreators));
    if(electrons >= elecCreatorCost){
        elecCreators = elecCreators + 1;
        electrons = electrons - elecCreatorCost;
        document.getElementById('elecCreators').innerHTML = elecCreators;
        document.getElementById('electrons').innerHTML = electrons;
    };
    var nextelecCreatorCost = Math.floor(10 * Math.pow(1.1,elecCreators));
    document.getElementById('elecCreatorCost').innerHTML = nextelecCreatorCost;
    
};


function HCreator(){
    var HCreatorCost = Math.floor(10 * Math.pow(1.1,HCreators));
    if(Hydrogen >= HCreatorCost){
        HCreators = HCreators + 1;
        Hydrogen = Hydrogen - HCreatorCost;
        document.getElementById('HCreators').innerHTML = HCreators;
        document.getElementById('H').innerHTML = Hydrogen;
    };
    var nextHCreatorCost = Math.floor(10 * Math.pow(1.1,HCreators));
    document.getElementById('HCreatorCost').innerHTML = nextHCreatorCost;
    
};

window.setInterval(function(){
	
	protClick(protCreators);
	neutClick(neutCreators);
	elecClick(elecCreators);
	HydrClick(HCreators);
	
}, 1000);
