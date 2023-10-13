let booty = 0;
let bootyMultiplier = 1;
let upgrades = [0,0,0,0,0];
document.querySelector('#bootyCollector').addEventListener('click', function(){
    booty += bootyMultiplier;
    console.log(booty);
    document.getElementById("bootyDisplay").innerHTML = "Obtained Booty: " + booty;
});
document.getElementById('up1').addEventListener('click', function(){
    if(booty >= 20){
        booty -= 20;
        document.getElementById("bootyDisplay").innerHTML = "Obtained Booty: " + booty;
        alert("Upgrade bought!");
        upgrades[0] = 1;
        bootyMultiplier *= 2;
        document.getElementById('up1').remove();
        document.getElementById('cost1').remove();
    }
    else{
        alert("What the fuck man");
    }
});
