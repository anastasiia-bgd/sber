
let elemPosts = document.querySelector('.posts')
const post= async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let data = await response.json()
    let innerData = data.map(post => `<h3>${post.title}<p>${post.body}</p></h3>`) 
    elemPosts.innerHTML= innerData.join("")
}
post()


