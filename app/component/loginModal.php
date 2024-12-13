<dialog id="loginModal" class="modal">
    <div class="modalContent">
        <span class="close" data-close="login">&times;</span>
        <div class="modalContainer">
            <!-- Formulaire de connexion -->
            <div class="form-section">
                <h2>Connexion</h2>
                <form action="login.php" method="POST">
                    <label for="login-email">Email :</label>
                    <input type="email" id="login-email" name="email" placeholder="xxxxx@gmail.com" required>
                    
                    <label for="login-password">Mot de passe :</label>
                    <input type="password" id="login-password" name="password" placeholder="xxxxxxxxxxx" required>
                    
                    <button type="submit">Se connecter</button>

                    <p id="openRegisterModalLink" class="register" onclick="linkOpenRegisterModal()">Créer un compte</p>
                </form>
            </div>
        </div>
    </div>
</dialog>
