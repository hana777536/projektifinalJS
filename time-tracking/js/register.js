const baseURL = "http://localhost:4002"

let registerForm = document.getElementById("registerForm");
let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");


const registerUser = (e) => {
    e.preventDefault();

    let nameValue = name.value;
    let emailValue = email.value;
    let passwordValue = password.value;

    const newUser = {
        name: nameValue,
        email: emailValue,
        password: passwordValue
    };

    fetch(`${baseURL}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    })
    .then((response) => response.json())
    .then(() => {
        window.location.href = "login.html";
    })
    .catch((error) => {
        console.error("Error:", error);
    });
};



registerForm.addEventListener("submit", registerUser);