const baseUrl = "https://reqres.in/api";
const API_KEY = 'reqres-free-v1';
// "email" : "eve.holt@reqres.in",
// "password" : "pistol"

const result = document.querySelector('#result');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#job');
const userIdInput = document.querySelector('#userId');
const updateBtn = document.querySelector('#update');
const deleteBtn = document.querySelector('#delete');

//===== Update =====
updateBtn.onclick = () => {
    const id = userIdInput.value.trim();
    const name = nameInput.value.trim();
    const job = jobInput.value.trim();
    if (!id) {
        result.textContent = "Error: user id is required";
        return;
    }
    const body = {name, job}
    result.textContent = "Sending update request...";
    fetch(`${baseUrl}/users/${id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-api-key': API_KEY
        },
        body: JSON.stringify(body),
    }).then(response => response.json()
        .then(data => {
            if (!response.ok) {
                const msg = response.error || 'HTTP error: ' + data.status;
                throw new Error(msg);
            }
            console.log("Updated user: ", data);
            result.textContent = JSON.stringify(data);
        })).catch(e => {
        console.error("Error: ", e.message);
        result.textContent = "Error: " + e.message;
    })

//===== Delete =====
    deleteBtn.onclick = () => {
        const id = userIdInput.value.trim();
        if (!id) {
            result.textContent = "Error: user id is required";
            return;
        }
        result.textContent = "Sending update request...";

        fetch(`${baseUrl}/users/${id}`, {
            method: 'DELETE',
            headers: {
                'x-api-key': API_KEY
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("HTTP error: " + response.status);
                }
                console.log("Deleted user: ", id, ", status: ", response.status);
                result.textContent = `User ${id} has been deleted, status: ${response.status}`;
            })
            .catch(e => {
                console.error("Error: ", e.message);
                result.textContent = "Error: " + e.message;
            })
    }
}