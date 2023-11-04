let booty = 10000000;
let bootyPS = 0;
let bootyMultiplier = 1;
let upgrades = [0,0,0,0,0];
let upcosts = [15,100,-1,-1,-1];
//STORY
let storybeats = {
    'intro1': "> WELCOME TO PIRATE GAME!!!<br>> Booty is what defines most pirates, so go out there and get some!!!<br>",
    'intro2': "> Booty Per Second??? Are you serious???? I fucking love Booty Per Second!!!!!<br>",
    'intro3': "> A real pirate knows what to specialize in. Pick a Class Matey!<br>"
};
//hidden or shown elements
let upgrade2 = document.getElementById('upgrade2');
upgrade2.style.display = 'none';
let pac = document.getElementById('PAC');
pac.style.display = 'none';
let story = document.getElementById("storytext");
story.innerHTML = storybeats['intro1'];


document.querySelector('#bootyCollector').addEventListener('click', function(){
    booty += bootyMultiplier;
    console.log(booty);
    document.getElementById("bootyDisplay").innerHTML = "Obtained Booty: " + booty;
});
document.getElementById('up1').addEventListener('click', function(){
    if(booty >= upcosts[0]){
        booty -= upcosts[0];
        document.getElementById("bootyDisplay").innerHTML = "Obtained Booty: " + booty;
        upgrades[0] += 1;
        upcosts[0] += Math.floor(upcosts[0]*Math.pow(1.05,upgrades[0]));
        bootyMultiplier++;
        document.getElementById("cost1").innerHTML = "<b>   Cost : " + upcosts[0] + "</b>";
    }
    else{
        alert("What the fuck man");
    }
    if(upgrades[0] > 3 && upgrade2.style.display == 'none'){
        upgrade2.style.display = 'block';
        story.innerHTML = story.innerHTML + storybeats['intro2'];
    }
    if(upgrades[0] == 10){
        document.getElementById('upgrade1').innerHTML = '<b>&emsp;*MAXED OUT!!*</b>';
    }
});
document.getElementById('up2').addEventListener('click', function(){
    if(booty >= upcosts[1]){
        booty -= upcosts[1];
        document.getElementById("bootyDisplay").innerHTML = "Obtained Booty: " + booty;
        upgrades[1] += 1;
        upcosts[1] += Math.floor(upcosts[1]*Math.pow(1.01,upgrades[1]));
        bootyPS += 5;
        document.getElementById("cost2").innerHTML = "<b>   Cost : " + upcosts[1] + "</b>";
    }
    else{
        alert("What the fuck man");
    }
    if(upgrades[1] > 3 && pac.style.display == 'none'){
        story.innerHTML = story.innerHTML + storybeats['intro3'];
        pac.style.display = 'block';
    }
    if(upgrades[1] == 10){
        document.getElementById('upgrade2').innerHTML = '<b>&emsp;*MAXED OUT!!*</b>';
    }
});

function updateBooty(b){
    booty = booty + b;
    document.getElementById("bootyDisplay").innerHTML = "Obtained Booty: " + booty;
}

//BOOTY PER SECOND
let bootyClicker = setInterval(myTimer ,1000);
function myTimer() {
  updateBooty(bootyPS);
}