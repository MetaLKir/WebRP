const baseUrl = "https://reqres.in/api";
const API_KEY = 'reqres-free-v1';
// "email" : "eve.holt@reqres.in",
// "password" : "pistol"

const passwordInput = document.querySelector("#password");
const loginInput = document.querySelector("#login");
const signInBtn = document.querySelector("#signin");
const result = document.querySelector("#result");

signInBtn.onclick = async () => {
    const body = {
        email: loginInput.value.trim(),
        password: passwordInput.value.trim(),
    }
    result.textContent = "Sending login request...";

    try{
        const response = await fetch(`${baseUrl}/login`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-api-key': API_KEY,
            },
            body: JSON.stringify(body)
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error("HTTP error: " + response.status);
        }
        console.log("Login token: ", data);
        result.textContent = JSON.stringify(data);
    } catch (error) {
        console.log("Error: ", error.message);
        result.textContent = "Error: " + error.message;
    }
}