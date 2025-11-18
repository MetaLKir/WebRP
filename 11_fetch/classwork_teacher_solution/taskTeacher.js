// get amount of posts by name of the user

const baseUrl = "https://jsonplaceholder.typicode.com";
const name = document.querySelector("#name");
const send = document.querySelector("#send");
send.onclick = () => {
    const value = name.value.trim();
    name.value = "";
    // fetch(`${baseUrl}/users`)
    //     .then(res => res.json())
    //     .then(users => {
    //         const user = users.find(u => u.name === value);
    //         if (!user) {
    //             console.log("User not found.");
    //             return null;
    //         }
    //         return user.id;
    //     })
    fetch(`${baseUrl}/users?name=${value}`)
        .then(res => res.json())
        .then(users => {
            if (users.length === 0) {
                console.log("No user found");
                return null;
            }
            return users[0].id;
        })
        .then(id => fetch(`${baseUrl}/posts?userId=${id}`))
        .then(res => res.json())
        .then(posts => {
            let result = document.querySelector("#result");
            if(!result){
                result = document.createElement("div");
                result.id = "result";
                document.body.append(result);
            }
            result.textContent = `Number of user message: ${posts.length} posts`;
            return posts.length;
        })
        .catch(err => console.log(err));
}