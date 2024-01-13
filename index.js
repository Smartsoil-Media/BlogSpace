let postsSliced = []

function renderPosts() {
    let html = ""
    for (let post of postsSliced) {
        html += `
         <h2>${post.title}</h2>
         <p>${post.body}</p>
         <hr />
        `
    }
    document.getElementById("blog-list").innerHTML = html

}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        postsSliced = data.slice(0, 5)
        renderPosts()

    })


document.getElementById("new-post").addEventListener("submit", function(e) {
    e.preventDefault()
    const postTitle = document.getElementById("post-title").value
    const postBody = document.getElementById("post-body").value
    const data = {
        title: postTitle,
        body: postBody
    }
    fetch("https://apis.scrimba.com/jsonplaceholder/posts", {method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json"
    }
})
    .then(res => res.json())
    .then(post =>  {  
    postsSliced.unshift(post)
    renderPosts()
    })
})

document.getElementById("post-btn").addEventListener("click", function(){
    document.getElementById("title").textContent = "Fk Me You Clicked It"
})