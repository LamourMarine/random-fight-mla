// const for team select
const charList = document.querySelector(".charList")
const draggables = document.querySelectorAll(".charAvatar")
const dropzones = document.querySelectorAll(".teamComp")
const helpersTeamOne = document.querySelectorAll("#teamOne  .assistsAvatar")
const helpersTeamTwo = document.querySelectorAll("#teamTwo  .assistsAvatar")
const teamOne = document.querySelector("#teamOne")
const teamTwo = document.querySelector("#teamTwo")

// Const for modal

const addCharacterModal = document.querySelector(".addCharacterModal")
const deleteCharModal = document.querySelector(".deleteModal")
const changeCharModal = document.querySelector(".changeModal")
const openRegisterModalLink = document.getElementById("openRegisterModalLink");
const openHelpModal = document.getElementById("openHelpModal");
const loginModal = document.getElementById("loginModal");
const registerModal = document.getElementById("registerModal");
const helpModal = document.getElementById("helpModal");
const closeModalButtons = document.querySelectorAll(".close");


// Const add char

const imgClassChoice = document.querySelector("#classChoice")
const newCharName = document.querySelector('#charNameInput')
const power = document.querySelector('.power')
const resillience = document.querySelector('.resillience')
const speed = document.querySelector('.speed')


const homePage = document.getElementById('homePage');
const loadingPage = document.getElementById('loadingPage');
const menuHome = document.getElementById('menuHome');
const terminal = document.querySelector(".terminal");

const team1Name = document.querySelector('#teamOne .teamName');
const team2Name = document.querySelector("#teamTwo .teamName");

// Masquer la roue de chargement au début
if(loadingPage){
loadingPage.classList.add('hidden');
}
if (menuHome) {
    menuHome.classList.add('hidden');
}
if (terminal) {
    terminal.classList.add('hidden');
}

// Attendre 10 secondes avant de masquer la page d'accueil

if (loadingPage) {
    setTimeout(() => {
        homePage.classList.add('hidden'); // Masquer la première page
        loadingPage.classList.remove('hidden'); // Afficher la deuxième page
    }, 8000);

    setTimeout(() => {
        loadingPage.classList.add('hidden'); // Masquer la première page
        menuHome.classList.remove('hidden'); // Afficher la deuxième page
        terminal.classList.remove('hidden'); // Afficher la deuxième page
    }, 10000);
}



//Functions fetch

const list = () => {

    const svgAdd = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 45.402 45.402" xml:space="preserve"><path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141 c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27 c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435 c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"></path></svg>';

    const svgDelete = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 408.483 408.483" xml:space="preserve"><path d="M87.748,388.784c0.461,11.01,9.521,19.699,20.539,19.699h191.911c11.018,0,20.078-8.689,20.539-19.699l13.705-289.316 H74.043L87.748,388.784z M247.655,171.329c0-4.61,3.738-8.349,8.35-8.349h13.355c4.609,0,8.35,3.738,8.35,8.349v165.293 c0,4.611-3.738,8.349-8.35,8.349h-13.355c-4.61,0-8.35-3.736-8.35-8.349V171.329z M189.216,171.329 c0-4.61,3.738-8.349,8.349-8.349h13.355c4.609,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.737,8.349-8.349,8.349h-13.355 c-4.61,0-8.349-3.736-8.349-8.349V171.329L189.216,171.329z M130.775,171.329c0-4.61,3.738-8.349,8.349-8.349h13.356 c4.61,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.738,8.349-8.349,8.349h-13.356c-4.61,0-8.349-3.736-8.349-8.349V171.329z"></path> <path d="M343.567,21.043h-88.535V4.305c0-2.377-1.927-4.305-4.305-4.305h-92.971c-2.377,0-4.304,1.928-4.304,4.305v16.737H64.916 c-7.125,0-12.9,5.776-12.9,12.901V74.47h304.451V33.944C356.467,26.819,350.692,21.043,343.567,21.043z"></path></svg>';
    
    const svgEdit = '<svg viewBox="0 -0.5 25 25" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7 5.12758L19.266 6.37458C19.4172 6.51691 19.5025 6.71571 19.5013 6.92339C19.5002 7.13106 19.4128 7.32892 19.26 7.46958L18.07 8.89358L14.021 13.7226C13.9501 13.8037 13.8558 13.8607 13.751 13.8856L11.651 14.3616C11.3755 14.3754 11.1356 14.1751 11.1 13.9016V11.7436C11.1071 11.6395 11.149 11.5409 11.219 11.4636L15.193 6.97058L16.557 5.34158C16.8268 4.98786 17.3204 4.89545 17.7 5.12758Z"></path> <path d="M12.033 7.61865C12.4472 7.61865 12.783 7.28287 12.783 6.86865C12.783 6.45444 12.4472 6.11865 12.033 6.11865V7.61865ZM9.23301 6.86865V6.11865L9.23121 6.11865L9.23301 6.86865ZM5.50001 10.6187H6.25001L6.25001 10.617L5.50001 10.6187ZM5.50001 16.2437L6.25001 16.2453V16.2437H5.50001ZM9.23301 19.9937L9.23121 20.7437H9.23301V19.9937ZM14.833 19.9937V20.7437L14.8348 20.7437L14.833 19.9937ZM18.566 16.2437H17.816L17.816 16.2453L18.566 16.2437ZM19.316 12.4937C19.316 12.0794 18.9802 11.7437 18.566 11.7437C18.1518 11.7437 17.816 12.0794 17.816 12.4937H19.316ZM15.8863 6.68446C15.7282 6.30159 15.2897 6.11934 14.9068 6.2774C14.5239 6.43546 14.3417 6.87397 14.4998 7.25684L15.8863 6.68446ZM18.2319 9.62197C18.6363 9.53257 18.8917 9.13222 18.8023 8.72777C18.7129 8.32332 18.3126 8.06792 17.9081 8.15733L18.2319 9.62197ZM8.30001 16.4317C7.8858 16.4317 7.55001 16.7674 7.55001 17.1817C7.55001 17.5959 7.8858 17.9317 8.30001 17.9317V16.4317ZM15.767 17.9317C16.1812 17.9317 16.517 17.5959 16.517 17.1817C16.517 16.7674 16.1812 16.4317 15.767 16.4317V17.9317ZM12.033 6.11865H9.23301V7.61865H12.033V6.11865ZM9.23121 6.11865C6.75081 6.12461 4.7447 8.13986 4.75001 10.6203L6.25001 10.617C6.24647 8.96492 7.58269 7.62262 9.23481 7.61865L9.23121 6.11865ZM4.75001 10.6187V16.2437H6.25001V10.6187H4.75001ZM4.75001 16.242C4.7447 18.7224 6.75081 20.7377 9.23121 20.7437L9.23481 19.2437C7.58269 19.2397 6.24647 17.8974 6.25001 16.2453L4.75001 16.242ZM9.23301 20.7437H14.833V19.2437H9.23301V20.7437ZM14.8348 20.7437C17.3152 20.7377 19.3213 18.7224 19.316 16.242L17.816 16.2453C17.8195 17.8974 16.4833 19.2397 14.8312 19.2437L14.8348 20.7437ZM19.316 16.2437V12.4937H17.816V16.2437H19.316ZM14.4998 7.25684C14.6947 7.72897 15.0923 8.39815 15.6866 8.91521C16.2944 9.44412 17.1679 9.85718 18.2319 9.62197L17.9081 8.15733C17.4431 8.26012 17.0391 8.10369 16.6712 7.7836C16.2897 7.45165 16.0134 6.99233 15.8863 6.68446L14.4998 7.25684ZM8.30001 17.9317H15.767V16.4317H8.30001V17.9317Z"></svg>'


    fetch("../listCharacter.php",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
    })
    .then(response=> {
        return response.json();
    })
    .then(data=>{
        if (charList) {
            charList.innerHTML = ""


        }
        const add = document.createElement("div");
        
        add.id = "addChar"
        add.addEventListener('click', () => {
            showModalAdd();
        })
        add.innerHTML = svgAdd
        
        if (charList) {
            charList.appendChild(add)
        }
        data.forEach((chars) => {
            const div = document.createElement("div");
            const headers = document.createElement("div")
            const name = document.createElement("p")
            const avatar = document.createElement("img");
            const deleteBtn = document.createElement('div'); 
            const editBtn = document.createElement('div');

            deleteBtn.classList.add('deleteBtn')
            deleteBtn.innerHTML = svgDelete
            deleteBtn.dataset.id = chars.id_Character;

            deleteBtn.addEventListener("click", () =>{
                showModalDelete(chars.id_Character)
                document.querySelector(".deleteModal button:first-of-type").dataset.id = id
            })

            editBtn.classList.add('editBtn')
            editBtn.innerHTML = svgEdit
            editBtn.dataset.id = chars.id_Character;

            editBtn.addEventListener('click', () =>{
                showModalChange(chars.id_Character);
                document.querySelector(".changeModal button:first-of-type").dataset.id = chars.id_Character
            })
            
            
            div.dataset.id = chars.id_Character;
            name.textContent = chars.name_Character;
            headers.classList.add ("charListHeaders");
            div.classList.add('charAvatar')
            div.draggable = true
            
            div.addEventListener("dragstart", () => {
                div.classList.add("dragging")
            })
            
            div.addEventListener("dragend", () => {
                div.classList.remove("dragging")
            })
            
            avatar.src = "../asset/img/"+chars.avatar_Character;
            avatar.draggable = false
            
            headers.appendChild(name)
            headers.append(deleteBtn);
            headers.append(editBtn);
            div.appendChild(headers)
            div.appendChild(avatar);
            if (charList) {
                charList.appendChild(div);
            }
        });
    })
}

list()

function addCharacter(data){
    if(newCharName.value.trim().length !== 0){
        const name = newCharName.value
        const classes = imgClassChoice.getAttribute("data-classes")
        data = {
                classes: classes,
                name: name
            }
    }else
    {
        document.querySelector("#confirmAdd").innerHTML = `Le personnage doit avoir un nom`
    }

    fetch("../addCharacter.php",{
        method : "POST",
        headers : {
            "Content-Type": "application/json"
        },
        body : JSON.stringify(data)
    })
    .then(response=>response.json())
    .then(result=>{
        if(result.status==="success")
        {
            list();
            closeModalAdd()
            document.querySelector("#confirmAdd").innerHTML = result.message
        }else
        {
            document.querySelector("#confirmAdd").innerHTML = `Le personnage ${name} n'a pas pu être créé`
        }

    })
}

function deleteChar(data) {

    // envoie de Data vers le fichier delete.php
    fetch("../delete.php", {
        // preparation de la requête ajax
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // transform la variable data en objet JS
            body: JSON.stringify(data)
        })
        .then(response=> response.json())
        .then(result=> {
            if(result.status === "success"){
                const item = document.querySelector(`div[data-id ="${data}"]`);
                if (item) {
                    item.remove();
                    document.querySelector(".deleteModal").close();
                    document.querySelector('#confirmMessage').innerHTML = result.message;
                }else{
                    alert('Error: ' + result.message);
                }
            }
        })
    }

function changeCharacter(id, newName="") {
    newName = document.querySelector(".modif").value
    let data = {"id" : id, "newName" : newName}

    // envoie de Data vers le fichier delete.php
    fetch("../change.php", {
        // preparation de la requête ajax
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // transform la variable data en objet JS
            body: JSON.stringify(data)
        })
        .then(response=>response.json()) //Convertie la reponse de la requête en json
        //Resultat de la requête, qu'est-ce que j'en fait
        .then(result=> {

            if(result.status === "success"){
                    document.querySelector('#confirmAdd').innerHTML = result.message;
                    list()
            }
                else{
                    alert('Error: ' + result.message);
                }

        })
        closeModalChange() //appel de ma fonction
}

//function about modal

let showModal = (modal) => {
    modal.showModal()
}

let closeModal = (modal) => {
    modal.close()
}

const showModalDelete =  (id) => {
    showModal(deleteCharModal)
    document.querySelector(".deleteModal button:first-of-type").dataset.id = id
}

const closeModalDelete = () => {
    closeModal(deleteCharModal)
}

let showModalChange =  (id) => {
    showModal(changeCharModal)
    document.querySelector(".changeModal button:first-of-type").dataset.id = id
}

let closeModalChange = () => {
    closeModal(changeCharModal)
}

let showModalAdd = () => {
    showModal(addCharacterModal)
}

let closeModalAdd = () => {
    closeModal(addCharacterModal)
}

const linkOpenRegisterModal = () => {
    closeModal(loginModal); // Ferme le modal de connexion
    showModal(registerModal); // Ouvre le modal de création
}

const showModalHelp = () =>{
    showModal(helpModal)
}
let openLoginModal = () => {
    showModal(loginModal);
}

const openRegisterModal = () =>{
    showModal(registerModal)
}

const showModalVictory = (winningTeamClass) => {
    // const winningTeamName = document.querySelector(winningTeamClass).getAttribute('data-team');
    
    document.querySelector("#victoryModal .modal-title").textContent = `${winningTeamClass}`;
    
    showModal(victoryModal);
};

const closeVictoryModal = () => {
    closeModal(victoryModal);
    window.location.href = '../pages/teamselect.php';
};



closeModalButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const modalType = event.target.getAttribute("data-close");
        if (modalType === "login") closeModal(loginModal);
        else if (modalType === "register") closeModal(registerModal);
        else if (modalType === 'help') closeModal(helpModal);
    });    
});    





//function drag an drop team select

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragover', e => {
        e.preventDefault()
        const draggable = document.querySelector(".dragging")
        if (dropzone.childElementCount < 5) {
            dropzone.appendChild(draggable)
        }
    })
})

if (charList) {
    charList.addEventListener('dragover', e => {
        e.preventDefault()
        const draggable = document.querySelector(".dragging")
        charList.appendChild(draggable)
    })
}

// function select helpers
if (helpersTeamOne) {
    helpersTeamOne.forEach(helper => {
        helper.addEventListener('click', (e) => {
            const selected = document.querySelector('.selectedTeamOne');
            if (selected) {
                selected.classList.remove("selectedTeamOne")
            }
            e.target.classList.add('selectedTeamOne');
            teamOneAssist = e.target.getAttribute('data-assist')
        })
    })
}

if (helpersTeamTwo) {
    helpersTeamTwo.forEach(helper => {
            helper.addEventListener('click', (e) => {
            selected = document.querySelector('.selectedTeamTwo');
            if (selected) {
                selected.classList.remove("selectedTeamTwo")
            }
            e.target.classList.add('selectedTeamTwo');
            teamTwoAssist = e.target.getAttribute('data-assist');
        })
    })
}

// create char function

const displayChoice = (dataClass) => {
    switch(dataClass){
        case "linux" : 
            imgClassChoice.src = "../asset/img/"+dataClass+'.webp'
            imgClassChoice.dataset.classes = dataClass
            power.innerText = 'Power : 20'
            resillience.innerText = 'Resillience : 300'
            speed.innerText = 'Speed : 9'
            break;
        case "docker" : 
            imgClassChoice.src = "../asset/img/"+dataClass+'.webp'
            imgClassChoice.dataset.classes = dataClass
            power.innerText = 'Power : 20'
            resillience.innerText = 'Resillience : 400'
            speed.innerText = 'Speed : 3'
            break;
        case "swift" : 
            imgClassChoice.src = "../asset/img/"+dataClass+'.webp'
            imgClassChoice.dataset.classes = dataClass
            power.innerText = 'Power : 30'
            resillience.innerText = 'Resillience : 450'
            speed.innerText = 'Speed : 6'
            break;
        case 'podman' : 
            imgClassChoice.src = "../asset/img/"+dataClass+'.webp'
            imgClassChoice.dataset.classes = dataClass
            power.innerText = 'Power : 20'
            resillience.innerText = 'Resillience : 300'
            speed.innerText = 'Speed : 9'
            break;
        case 'mariaDB' : 
            imgClassChoice.src = "../asset/img/"+dataClass+'.webp'
            imgClassChoice.dataset.classes = dataClass
            power.innerText = 'Power : 30'
            resillience.innerText = 'Resillience : 250'
            speed.innerText = 'Speed : 5'
            break;
        case 'php' : 
            imgClassChoice.src = "../asset/img/"+dataClass+'.webp'
            imgClassChoice.dataset.classes = dataClass
            power.innerText = 'Power : 40'
            resillience.innerText = 'Resillience : 300'
            speed.innerText = 'Speed : 2'
            break;
        case 'java' : 
            imgClassChoice.src = "../asset/img/"+dataClass+'.webp'
            imgClassChoice.dataset.classes = dataClass
            power.innerText = 'Power : 50'
            resillience.innerText = 'Resillience : 350'
            speed.innerText = 'Speed : 8'
            break;   
        case 'go' : 
            imgClassChoice.src = "../asset/img/"+dataClass+'.webp'
            imgClassChoice.dataset.classes = dataClass
            power.innerText = 'Power : 40'
            resillience.innerText = 'Resillience : 150'
            speed.innerText = 'Speed : 4'
            break;   
        case 'gitHub' : 
            imgClassChoice.src = "../asset/img/"+dataClass+'.webp'
            imgClassChoice.dataset.classes = dataClass
            power.innerText = 'Power : 40'
            resillience.innerText = 'Resillience : 400'
            speed.innerText = 'Speed : 7'
            break;   
    }
} 


// use to get ID of char in each team 

const getIdChar = (teamComp) => {
    const team = [];
    document.querySelectorAll("#" + teamComp.id + " .charAvatar").forEach((char) => {
        team.push(char.getAttribute('data-id'));
    });
    
    return team
}

const sendTeam = () => {
    const team1 = getIdChar(teamOne)
    const team2 = getIdChar(teamTwo)    

    fetch('../sentTeams.php', {
        method: 'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({team1: team1, team1Assist: teamOneAssist, team1Name : team1Name.value, team2: team2, team2Assist: teamTwoAssist, team2Name : team2Name.value})
    })
    .then(response => {
        if(response){
            window.location.href = '../pages/combat.php';
        } else {
            console.error('Failed to save teams');
        }
    })
}


