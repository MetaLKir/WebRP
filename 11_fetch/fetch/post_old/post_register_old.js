//POST PUT PATCH body
//https://reqres.in
//reqres-free-v1
const baseUrl = 'https://reqres.in/api';
const API_KEY = 'reqres-free-v1'
// "email": "eve.holt@reqres.in",
//     "password": "pistol"

const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const emailInput = document.querySelector('#email');
const registerBtn = document.querySelector('#register');
const result = document.querySelector('#result');


registerBtn.onclick = () => {
    result.textContent = "";
    const body = {
        email: emailInput.value.trim(),
        password: passwordInput.value.trim(),
    };
    fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': API_KEY
        },
        body: JSON.stringify(body)
    })
        .then(response => response.json()
            .then(data => {
                if (!response.ok) {
                    const message = data.error || `HTTP error ${response.status}`;
                    throw new Error(message);
                }
                return data;
            })).then(data => {
        console.log('Registered:', data);
        result.textContent = `OK: id=${data.id}, token=${data.token}`;
    }).catch(err => {
        console.log("Error:", err.message);
        result.textContent = `Error: ${err.message}`;
    })
}