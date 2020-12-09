const getText = document.getElementById('getText')

const getUser = document.getElementById('getUsers')

const getPost = document.getElementById('getPosts')

const addPost = document.getElementById('addPost')

const getTexts = () => {
    fetch('sample.txt')
    .then(res => res.text())
    .then(data => {
        let output = document.getElementById('output')

        output.innerHTML = data
    })
    .catch(err => console.log(err))
}

const getUsers = () => {
    fetch('users.json')
    .then(res => res.json())
    .then(data => {
        let output = document.getElementById('output')
        output.innerHTML = '<h2 class="mb-2">Users</h2>'
        data.forEach(user => {
            output.innerHTML += `
            <ul class="list-group mb-2">
            <li class="list-group-item">ID: ${user.id}</li>
            <li class="list-group-item">Name: ${user.name}</li>
            <li class="list-group-item">Email: ${user.email}</li>
            </ul>
            `
        })
    })
    .catch(err => console.log(err))
}

const getPosts = () => {
    let url = 'https://jsonplaceholder.typicode.com/posts'

    fetch(url)
    .then(res => res.json())
    .then(data => {
        let output = document.getElementById('output')
        output.innerHTML =  '<h2 class="mb-2">Posts</h2>'

        for (let i = 0; i < data.length; i++) {
            output.innerHTML += `
            <div class="card card-body mb-2">
            <h3>${data[i].title}</h3>
            <p>${data[i].body}</p>
            </div>
            `
        }

        // let random = Math.floor(Math.random() * data.length)
        // output.innerHTML += `
        // <div>
        // <h3>${data[random].title}</h3>
        // <p>${data[random].body}</p>
        // </div>
        // `

    })
}

const addPosts = (e) => {
    e.preventDefault()
    let url = 'https://jsonplaceholder.typicode.com/posts'

    let title = document.getElementById('title').value
    let body = document.getElementById('body').value

    const postRequest = {
        method: 'POST',
        body: JSON.stringify({ title:title, body:body }),

        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch(url, postRequest)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log(err))

    let output = document.getElementById('output')
    output.innerHTML += `
    <div class="card card-body mb-2">
    <h3>${title}</h3>
    <p>${body}</p>
    </div>
    `
}

getText.addEventListener('click', getTexts)

getUser.addEventListener('click', getUsers)

getPost.addEventListener('click', getPosts)

addPost.addEventListener('submit', addPosts)