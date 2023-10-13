let booty = 0;
document.querySelector('#bootyCollector').addEventListener('click', function(){
    booty++;
    console.log(booty);
    document.getElementById("bootyDisplay").innerHTML = "Obtained Booty: " + booty;
});
document.getElementById('up1').addEventListener('click', function(){
    if(booty >= 20){
        booty -= 20;
        document.getElementById("bootyDisplay").innerHTML = "Obtained Booty: " + booty;
        alert("Upgrade bought!");
    }
    else{
        alert("What the fuck man");
    }
});
