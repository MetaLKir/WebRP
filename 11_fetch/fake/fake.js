// fetch("https://jsonplaceholderr.typicode.com/posts/10")
//     .then(res => res.json())
//     .then(data => {
//         const h1 = document.createElement("h1");
//         const h1Text = document.createTextNode(data.title);
//         h1.append(h1Text);
//         document.body.append(h1);
//     })
// .catch(err => console.log(err))


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
        // .then(c => console.log(c));
        .then(id => fetch(`${baseUrl}/posts?userId=${id}`))
        .then(res => res.json())
        .then(posts => posts[0])
        .then(post => {
            const title = document.createElement("h1");
            title.append(document.createTextNode(`Title:${post.title}`));
            const postBody = document.createElement("h3");
            postBody.append(document.createTextNode(`Body: ${post.body}`));
            document.body.append(title, postBody);
        })
        .catch(err => console.log(err));
}