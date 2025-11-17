// get amount of posts by name of the user

const baseUrl = "https://jsonplaceholder.typicode.com";
const userName = document.querySelector("#username");
const send = document.querySelector("#send");
send.onclick = () => {
    const value = userName.value.trim();
    userName.value = "";
    fetch(`${baseUrl}/users`)
        .then(res => res.json())
        .then(users => {
            const index = users
                .findIndex(element => element.username === value);
            if (index > -1)
                return users[index].id;
            else return 0;
        })
        .then(id => fetch(`${baseUrl}/posts?userId=${id}`))
        .then(res => res.json())
        .then(posts => posts.length)
        .then(amount => {
            const title = document.createElement("h1");
            title.append(document.createTextNode(`Amount: ${amount}`));
            document.body.append(title);
        })
        .catch(err => console.log(err));
}