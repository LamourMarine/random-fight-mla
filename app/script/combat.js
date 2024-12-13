let turn;
let team1Index;
let team2Index;

const indexToWord = ['One', 'Two', 'Three', 'Four', 'Five'];

let teamOneAssist;
let teamTwoAssist;
let teamOneCombat;
let teamTwoCombat;

let message;

const assistTeamOneAvatar = document.querySelector(".teamLeft .logoAvatar")
const assistTeamTwoAvatar = document.querySelector(".teamRight .logoAvatar")

const nameTeamOneAvatar = document.querySelector(".teamLeft .nameTeam")
const nameTeamTwoAvatar = document.querySelector(".teamRight .nameTeam")

const containerResult = document.getElementById("containerResult");
const charOneTeamOnePlace = document.getElementById("charOneTeamOne");
const charTwoTeamOnePlace = document.getElementById("charTwoTeamOne");
const charThreeTeamOnePlace = document.getElementById("charThreeTeamOne");
const charFourTeamOnePlace = document.getElementById("charFourTeamOne");
const charFiveTeamOnePlace = document.getElementById("charFiveTeamOne");

const charOneTeamTwoPlace = document.getElementById("charOneTeamTwo");
const charTwoTeamTwoPlace = document.getElementById("charTwoTeamTwo");
const charThreeTeamTwoPlace = document.getElementById("charThreeTeamTwo");
const charFourTeamTwoPlace = document.getElementById("charFourTeamTwo");
const charFiveTeamTwoPlace = document.getElementById("charFiveTeamTwo");

class Character {
    constructor(name, speed, power, resillience, avatar ) {
        this.name = name;
        this.speed = speed;
        this.power = power;
        this.resillience = resillience;
        this.avatar = avatar;
    }

    //Methode d'attaque 
    attack(target) {
        target.resillience -= this.power; 
        message = `${this.name} attaque ${target.name} pour ${this.power} points de dégâts.`;
        if (target.resillience <= 0) {
            message += ` ${target.name} est vaincu !`;
        } else {
            message += ` Il reste ${target.resillience} points de vie à ${target.name}.`;
        }
    }

}

// Const php to Json
const teamOneJson = document.querySelector(".team1").getAttribute('data-team')
const teamOneData = JSON.parse(teamOneJson);
const teamOneAssistCombat = document.querySelector(".team1").getAttribute('data-assist')

const teamTwoJson = document.querySelector(".team2").getAttribute('data-team')
const teamTwoData = JSON.parse(teamTwoJson);
const teamTwoAssistCombat = document.querySelector(".team2").getAttribute('data-assist')

if(teamOneAssistCombat === "ia"){
    teamOneCombat = teamOneData.map(char =>
        new Character(char.name, char.speed+2, Math.floor(char.power*0.9), char.resilience, char.avatar))
}else if (teamOneAssistCombat === "dev") {
    teamOneCombat = teamOneData.map(char =>
        new Character(char.name, char.speed, Math.floor(char.power*1.1), char.resilience*0.9, char.avatar))
} else if (teamOneAssistCombat === "hacker"){
    teamOneCombat = teamOneData.map(char =>
        new Character(char.name, char.speed-2, char.power, char.resilience*1.1, char.avatar))
}

if(teamTwoAssistCombat === "ia"){
    teamTwoCombat = teamTwoData.map(char =>
        new Character(char.name, char.speed+2, Math.floor(char.power*0.9), char.resilience, char.avatar))
}else if (teamTwoAssistCombat === "dev") {
teamTwoCombat = teamTwoData.map(char =>
    new Character(char.name, char.speed, Math.floor(char.power*1.1), char.resilience*0.9, char.avatar))
} else if (teamTwoAssistCombat === "hacker"){
    teamTwoCombat = teamTwoData.map(char =>
        new Character(char.name, char.speed-2, char.power, char.resilience*1.1, char.avatar))
}

let team1  = teamOneCombat;
let team2 = teamTwoCombat;

//Fonction lancement du combat

const startFight =() => {
    turn = 1;
    team1Index = 0;
    team2Index = 0;

    if (team1[0]) {
        charOneTeamOnePlace.style.backgroundImage = "url(../asset/img/"+team1[0].avatar+")";
    }

    if (team1[1]) {
        charTwoTeamOnePlace.style.backgroundImage = "url(../asset/img/"+team1[1].avatar+")";
    }

    if (team1[2]) {
        charThreeTeamOnePlace.style.backgroundImage = "url(../asset/img/"+team1[2].avatar+")";
    }

    if (team1[3]) {
        charFourTeamOnePlace.style.backgroundImage = "url(../asset/img/"+team1[3].avatar+")";
    }

    if (team1[4]) {
        charFiveTeamOnePlace.style.backgroundImage = "url(../asset/img/"+team1[4].avatar+")";
    }

    if (team2[0]) {
        charOneTeamTwoPlace.style.backgroundImage = "url(../asset/img/"+team2[0].avatar+")";
    }

    if (team2[1]) {
        charTwoTeamTwoPlace.style.backgroundImage = "url(../asset/img/"+team2[1].avatar+")";
    }

    if (team2[2]) {
        charThreeTeamTwoPlace.style.backgroundImage = "url(../asset/img/"+team2[2].avatar+")";
    }

    if (team2[3]) {
        charFourTeamTwoPlace.style.backgroundImage = "url(../asset/img/"+team2[3].avatar+")";
    }

    if (team2[4]) {
        charFiveTeamTwoPlace.style.backgroundImage = "url(../asset/img/"+team2[4].avatar+")";
    }

    assistTeamOneAvatar.style.backgroundImage = "url(../asset/img/"+teamOneAssistCombat+".webp)" 

    
    assistTeamTwoAvatar.style.backgroundImage = "url(../asset/img/"+teamTwoAssistCombat+".webp)" 

    nameTeamOneAvatar.textContent = document.querySelector(".team1").getAttribute('data-name')

    nameTeamTwoAvatar.textContent = document.querySelector(".team2").getAttribute('data-name')

    
    assistTeamTwoAvatar.style.backgroundImage = "url(../asset/img/"+teamTwoAssistCombat+".webp)" 

    const fightInterval = setInterval(()=>{
        if (!processTurn()) {
            clearInterval(fightInterval);
            declareWinner();
        }
    }, 1500)

}

const processTurn =() => {
    let attacker;
    let target;

    if (turn %2 !== 0) {
        attacker = team1[team1Index];
        const attackerWord = indexToWord[team1Index];
        const attackerSlot = document.getElementById(`char${attackerWord}TeamOne`);
        attackerSlot.classList.add("active");
        
        target = team2[Math.floor(Math.random() *team2.length)];

        setTimeout(() => {
            attackerSlot.classList.remove('active');
        }, 1200)

    }
    else {
        attacker = team2[team2Index];
        const attackerWord = indexToWord[team2Index];
        const attackerSlot = document.getElementById(`char${attackerWord}TeamTwo`);
        attackerSlot.classList.add("active");

        target = team1[Math.floor(Math.random() *team1.length)];

        setTimeout(() => {
            attackerSlot.classList.remove('active');
        }, 1200)
    }
    attacker.attack(target)
    
    // if (target.resillience <= 0)
    
    
    if (turn %2 !== 0) {
        team2 = team2.filter(char=>char.resillience > 0);
        team2Index = (team2Index + 1) % team2.length
    }
    else {
        team1 = team1.filter(char=>char.resillience > 0);
        team1Index = (team1Index + 1) % team1.length
    }
    updateCombatLog();
    removeDead();
    turn ++;

    return team1.length > 0 && team2.length > 0;
    
}

const declareWinner = () => {
    let winner = []; 
    let xp
    let victoryMessage
    if (team1.length === 0) {
        teamTwoCombat.forEach(char => {
            winner.push(char.name); 
        });
        xp = teamOneCombat.length
        victoryMessage = "Equipe 2 a gagné";
        // return;
    }

    else if (team2.length === 0) {
        teamOneCombat.forEach(char => {
            winner.push(char.name);
        });
        xp = teamTwoCombat.length
        victoryMessage = "Equipe 1 a gagné";
        // return;
    }
    
    fetch("../addXp.php",{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({winner : winner, xp : xp})
    })

    showModalVictory(victoryMessage)

}

function updateCombatLog(){
    const log = document.createElement("div")
    log.classList.add("result")
    log.textContent = message
    containerResult.prepend(log)
}

const removeDead = () => {
    if (teamOneCombat[0] && teamOneCombat[0].resillience <= 0)  {
        charOneTeamOnePlace.style.backgroundImage = "none";
    }

    if (teamOneCombat[1] && teamOneCombat[1].resillience <= 0)  {
        charTwoTeamOnePlace.style.backgroundImage = "none";
    }   
    
    if (teamOneCombat[2] && teamOneCombat[2].resillience <= 0)  {
        charThreeTeamOnePlace.style.backgroundImage = "none";
    }

    if (teamOneCombat[3] && teamOneCombat[3].resillience <= 0)  {
        charFourTeamOnePlace.style.backgroundImage = "none";
    }
    
    if (teamOneCombat[4] && teamOneCombat[4].resillience <= 0)  {
        charFiveTeamOnePlace.style.backgroundImage = "none";
    }

    if (teamTwoCombat[0] && teamTwoCombat[0].resillience <= 0)  {
        charOneTeamTwoPlace.style.backgroundImage = "none";
    }

    if (teamTwoCombat[1] && teamTwoCombat[1].resillience <= 0)  {
        charTwoTeamTwoPlace.style.backgroundImage = "none";
    }   
    
    if (teamTwoCombat[2] && teamTwoCombat[2].resillience <= 0)  {
        charThreeTeamTwoPlace.style.backgroundImage = "none";
    }

    if (teamTwoCombat[3] && teamTwoCombat[3].resillience <= 0)  {
        charFourTeamTwoPlace.style.backgroundImage = "none";
    }
    
    if (teamTwoCombat[4] && teamTwoCombat[4].resillience <= 0)  {
        charFiveTeamTwoPlace.style.backgroundImage = "none";
    }
}

startFight();    
