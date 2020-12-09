const getText = document.getElementById('getText')

const getUsers = document.getElementById('getUsers')

const getPosts = document.getElementById('getPosts')

const addPost = document.getElementById('addPost')

const getTexts = () => {
    let output = document.getElementById('output')
    fetch('sample.txt')
    .then(res => res.text())
    .then(data => output.innerHTML = data)
    .catch(err => console.log(err))
}

const getUser = () => {
    let output = document.getElementById('output')
    fetch('users.json')
    .then(res => res.json())
    .then(data => {
        output.innerHTML = '<h3 class="mb-3">Users</h3>'
        data.forEach(user => {
            output.innerHTML += `
            <ul class='list-gruop mb-3'>
            <li class='list-group-item'>ID: ${user.id}</li>
            <li class='list-group-item'>Name: ${user.name}</li>
             <li class='list-group-item'>Email: ${user.email}</li>
            </ul>
            `
        })
    })
    .catch(err => console.log(err))
}

const getPost = () => {
    let url = 'https://jsonplaceholder.typicode.com/posts'

    fetch(url)
    .then(res => res.json())
    .then(post => {
        let output = document.getElementById('output')
            output.innerHTML = '<h2 class="mb-3">Posts</h2>'
        for (let i = 0; i < post.length; i++) {
            output.innerHTML += `
            <div class='card card-body mb-3'>
            <h4>${post[i].title}</h4>
            <p>${post[i].body}</p>
            </div>
            `
        }
    })
    .catch(err => console.log(err))

    // let xhr = new XMLHttpRequest()
    // xhr.responseType = 'json'

    // xhr.onreadystatechange = () => {
    //     if(xhr.readyState === XMLHttpRequest.DONE) {
    //         let res = xhr.response
            
    //     }
    // }

    // xhr.open('GET', url)
    // xhr.send()
}

const addPosts = (e) => {
    e.preventDefault()
    let url = 'https://jsonplaceholder.typicode.com/posts'
    
    let title = document.getElementById('title').value

    let body = document.getElementById('body').value

    const postrequest = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ title:title, body:body })
    }

    let data = JSON.stringify({ title:title, body:body })

    // fetch(url, postrequest)
    // .then(res => res.json())
    // .then(data => console.log(data))
    // .catch(err => console.log(err))

    let xhr = new XMLHttpRequest()
    xhr.responseType = 'json'

    xhr.onreadystatechange = () => {
        if(xhr.readyState === XMLHttpRequest.DONE) {
            let res = xhr.response
            console.log(res)
            
        }
    }

    xhr.open('POST', url)
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.send(data)
}

getText.addEventListener('click', getTexts)

getUsers.addEventListener('click', getUser)

getPosts.addEventListener('click', getPost)

addPost.addEventListener('submit', addPosts)

