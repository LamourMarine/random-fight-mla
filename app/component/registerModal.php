<dialog id="registerModal" class="modal">
    <div class="modalContent">
        <span class="close" data-close="register">&times;</span>
        <div class="modalContainer">
            <div class="form-section">
                <h2>Créer un compte</h2>
                <form action="register.php" method="POST">
                    <label for="register-email">Email :</label>
                    <input type="email" id="register-email" name="email" placeholder="xxxxx@gmail.com" required>
                    
                    <label for="register-password">Mot de passe :</label>
                    <input type="password" id="register-password" name="password" placeholder="xxxxxxxxxxx" required>
                    
                    <label for="register-password-confirm">Confirmer le mot de passe :</label>
                    <input type="password" id="register-password-confirm" name="password_confirm" placeholder="xxxxxxxxxxx" required>
                    
                    <button type="submit">Créer un compte</button>
                </form>
            </div>
        </div>    
    </div>
</dialog>