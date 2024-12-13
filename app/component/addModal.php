<dialog class="addCharacterModal">
    <p id="addCharModalConfirm"></p>
    <div id="addCharactarContainer">
        <div class="core">
            <div data-class = "linux" onclick="displayChoice(this.getAttribute('data-class'))">
                <p>Linux</p>
                <img src="../asset/img/linux.webp" alt="">
            </div>
            <div data-class = "docker" onclick="displayChoice(this.getAttribute('data-class'))">
                <p>Docker</p>
                <img src="../asset/img/docker.webp" alt="">
            </div>
            <div data-class = "swift" onclick="displayChoice(this.getAttribute('data-class'))">
                <p>Swift</p>
                <img src="../asset/img/swift.webp" alt="">
            </div>
            <div data-class = "mariaDB" onclick="displayChoice(this.getAttribute('data-class'))">
                <p>MariaDB</p>
                <img src="../asset/img/mariaDB.webp" alt="">
            </div>
            <div data-class = "php" onclick="displayChoice(this.getAttribute('data-class'))">
                <p>PhP</p>
                <img src="../asset/img/php.webp" alt="">
            </div>
            <div data-class = "podman" onclick="displayChoice(this.getAttribute('data-class'))">
                <p>Podman</p>
                <img src="../asset/img/podman.webp" alt="">
            </div>
            <div data-class = "java" onclick="displayChoice(this.getAttribute('data-class'))">
                <p>Java</p>
                <img src="../asset/img/java.webp" alt="">
            </div>
            <div data-class = "go" onclick="displayChoice(this.getAttribute('data-class'))">
                <p>Go</p>
                <img src="../asset/img/go.webp" alt="">
            </div>
            <div data-class = "gitHub" onclick="displayChoice(this.getAttribute('data-class'))">
                <p>GitHub</p>
                <img src="../asset/img/gitHub.webp" alt="">
            </div>
        </div> 
        <aside>
            <img src="../asset/img/question_mark.png" alt="" id="classChoice">
            <ul class="stats">
                <li class="power">Power : xxx</li>
                <li class="resillience">Resillience : xxx</li>
                <li class="speed">Speed : xxx</li>
            </ul>
            <div>
                <label for="charName">Nom du personnage : </label><br>
                <input type="text" name="charName" id="charNameInput">
            </div>
            <div>
                <button class="mainBtn" onclick="addCharacter([])">Créer</button>
                <button class="secondaryBtn" onclick="closeModalAdd()">Retour</button>
            </div>
        </aside>
    </div>
</dialog>