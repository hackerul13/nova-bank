document
.getElementById("registerForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const fullname =
    document.getElementById("fullname").value;

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    const user = {
        fullname,
        email,
        password,
        balance:0,
        history:[]
    };

    localStorage.setItem(email, JSON.stringify(user));

    alert("Account created successfully");

    window.location.href = "index.html";
});