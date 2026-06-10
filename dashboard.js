const loggedUser =
localStorage.getItem("loggedInUser");

if(!loggedUser){
    window.location.href = "index.html";
}

let user =
JSON.parse(localStorage.getItem(loggedUser));

const balanceEl =
document.getElementById("balance");

const historyEl =
document.getElementById("history");

function updateUI(){

    balanceEl.textContent =
    user.balance.toLocaleString() + " RWF";

    historyEl.innerHTML = "";

    user.history
    .slice()
    .reverse()
    .forEach(item => {

        const li =
        document.createElement("li");

        li.textContent = item;

        historyEl.appendChild(li);
    });
}

updateUI();

document
.getElementById("depositBtn")
.addEventListener("click", () => {

    const amount =
    Number(document.getElementById("amount").value);

    if(amount <= 0){
        alert("Enter valid amount");
        return;
    }

    user.balance += amount;

    user.history.push(
        `Deposited ${amount} RWF`
    );

    localStorage.setItem(
        loggedUser,
        JSON.stringify(user)
    );

    updateUI();
});

document
.getElementById("withdrawBtn")
.addEventListener("click", () => {

    const amount =
    Number(document.getElementById("amount").value);

    if(amount <= 0){
        alert("Enter valid amount");
        return;
    }

    if(amount > user.balance){
        alert("Insufficient funds");
        return;
    }

    user.balance -= amount;

    user.history.push(
        `Withdrawn ${amount} RWF`
    );

    localStorage.setItem(
        loggedUser,
        JSON.stringify(user)
    );

    updateUI();
});

document
.getElementById("logoutBtn")
.addEventListener("click", () => {

    localStorage.removeItem(
        "loggedInUser"
    );

    window.location.href =
    "index.html";
});