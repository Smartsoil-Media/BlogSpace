fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        const postsSliced = data.slice(0, 5)
        let html = ""
        for (let post of postsSliced) {
        html += `
         <h2>${post.title}</h2>
         <p>${post.body}</p>
         <hr />
        `
        }
        document.getElementById("blog-list").innerHTML = html
        console.log(html)
      

    })