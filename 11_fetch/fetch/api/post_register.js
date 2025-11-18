// POST PUT PATCH - they use request body

// https://reqres.in
// FREE KEY: reqres-free-v1

const baseUrl = "https://reqres.in/api";
const API_KEY = 'reqres-free-v1';

const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const emailInput = document.querySelector("#email");
const registerBtn = document.querySelector("#register");
const result = document.querySelector("#result");

registerBtn.onclick = async () => {
    result.textContent = "";
    const body = {
        email: emailInput.value.trim(),
        password: passwordInput.value.trim(),
    };
    try {
        const response = await fetch(`${baseUrl}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': API_KEY,
            },
            body: JSON.stringify(body)
        });
        const data = await response.json();
        if (!response.ok) {
            const message = data.error || `HTTP error ${response.status}`;
            throw new Error(message);
        }
        console.log('Registered: ', data);
        result.textContent = `OK: id=${data.id}, token=${data.token}`;
    } catch (err) {
        console.log("Error: ", err.message);
        result.textContent = `Error: ${err.message}`;
    }
}
// fetch => then => catch // old version
// try {await fetch} catch // new version