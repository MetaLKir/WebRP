// fetch(url, option).then(response=>{}).catch(error=>{});

// https://jsonplaceholder.typicode.com/
// https://jsonplaceholder.typicode.com/posts/10

// fetch("https://jsonplaceholder.typicode.com/posts/10")
// .then(res => console.log(res))
//
// fetch("https://jsonplaceholder.typicode.com/posts/10")
//     .then(res => console.log(res.text()))

fetch("https://jsonplaceholder.typicode.com/posts/10")
    .then(res => res.json())
    .then(data => {
        const h1 = document.createElement("h1");
        const h1Text = document.createTextNode(data.title);
        h1.append(h1Text);
        document.body.append(h1);
    })