

function validateEmail() {
    const emailInput = document.getElementById('email');
    const erroemail = document.getElementById('erroemail');
    const email = emailInput.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email)) {
        erroemail.textContent = 'Email válido!';
        erroemail.style.color = 'green';
    } else {
        erroemail.textContent = 'Email inválido!';
        erroemail.style.color = 'red';
    }
}