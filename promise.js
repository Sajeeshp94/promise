
fetch("https://jsonplaceholder.typicode.com/todos")
.then((data) => data.json())
.then((res) => dataFromAPI(res))
.catch((err) => console.log(err.msessage))

function dataFromAPI(data){
    html_content = ``;
    data.forEach((post)=>{
        html_content += `<tr>
            <td>${post.userId}</td>
            <td>${post.id}</td>
            <td>${post.title}</td>
            <td>${post.completed}</td>
        </tr>`
})

let ele = document.getElementById("postsContents")
ele.innerHTML = html_content
}

