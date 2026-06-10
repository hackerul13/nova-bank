const password = document.getElementById("password");
const strength = document.getElementById("strength");
const togglePassword = document.getElementById("togglePassword");

password.addEventListener("input", () => {

    const value = password.value;

    if(value.length < 6){
        strength.textContent = "Weak Password";
        strength.style.color = "red";
    }
    else if(value.length < 10){
        strength.textContent = "Medium Password";
        strength.style.color = "orange";
    }
    else{
        strength.textContent = "Strong Password";
        strength.style.color = "green";
    }
});

togglePassword.addEventListener("click", () => {

    if(password.type === "password"){
        password.type = "text";
    }else{
        password.type = "password";
    }
});

const form = document.getElementById("accountForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const pass = document.getElementById("password").value;
    const confirm = document.getElementById("confirmPassword").value;

    const successMessage =
        document.getElementById("successMessage");

    if(pass !== confirm){

        successMessage.classList.remove("success");
        successMessage.classList.add("error");

        successMessage.textContent =
        "❌ Passwords do not match.";

        return;
    }

    const accountNumber =
    "NB" + Math.floor(
        100000000 + Math.random() * 900000000
    );

    successMessage.classList.remove("error");
    successMessage.classList.add("success");

    successMessage.innerHTML = `
        ✅ Account Application Submitted <br><br>
        Generated Account Number:<br>
        <strong>${accountNumber}</strong>
    `;

    form.reset();
    strength.textContent = "";
});