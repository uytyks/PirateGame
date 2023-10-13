let booty = 0;
document.querySelector('#bootyCollector').addEventListener('click', function(){
    booty++;
    console.log(booty);
    document.getElementById("bootyDisplay").innerHTML = "Obtained Booty: " + booty;
});
