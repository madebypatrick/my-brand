const form = document.querySelector('#addPostForm');
const title = document.getElementById('title');
const category = document.getElementById('category');
const author = document.getElementById('author');
const content = document.getElementById('post');
let token = localStorage.getItem('token');


let storedBlogs = JSON.parse(localStorage.getItem('hold_blogs')) || [];

let imageSavers;
linkList.addEventListener('change', function () {
    let imageSaver = new FileReader();
    imageSaver.readAsDataURL(linkList.files[0]);
    imageSaver.addEventListener('load', () => {
    const url = imageSaver.result;
    localStorage.setItem('image', url);
    })
});



form.addEventListener('submit', (event) =>{
    event.preventDefault();
    let image = document.getElementById('linkList').files[0];
    let title = document.getElementById('title').value;
    let category = document.getElementById('category').value;
    let author = document.getElementById('author').value;
    let content = document.getElementById('post').value;
    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', image);
    formData.append('category', category);
    formData.append('author', author);
    formData.append('content', content);
    data={title,category,author,image,content}
    console.log(data)
            fetch('http://localhost:3000/api/v1/blogs', {
            method: 'POST',
            headers: {
                'Authorization': token,
              },
            body: formData,
          })
          .then(response => {
            return response.json();

        })
        .then((data) => {
          swal("Well done!", data.message, "success");
          })
          .then(resp => {
        }).catch(err => console.log(err))


   
})


// Display the Blogs into the table
const blogTable = document.getElementById("crudTable");
fetch("https://api-mybrand.cyclic.app/api/v1/blogs")
  .then((response) => response.json())
  .then((blogs) => {
    console.log(blogs);
        blogs.data.forEach((blog) => {
            blogTable.insertAdjacentHTML(
                'afterbegin',
                ` 
        <tr>
        
        <td>${blog.title}</td>
        <td>${blog.category}</td>
        <td>${blog.author}</td>
        <td><img id="linkList" src="${blog.image}" alt="" width="50" height="50"></td>
        <td>${blog.content} </td>
        <td><button onclick="deleteBlog(${blog.id})" class="delete-button">Delete</button>
        <button onclick="updateArticle(${blog.id})" class="edit-button">Edit</button></td>
        </tr>
      `,
            )
    });
  })

  .catch((err) => alert(err));
// <td>${id+1}</td> 


// delete a blog

function deleteBlog(id) {
    var ans = confirm('Are you sure you want to delete this blog?');
    if (ans == true) {
      fetch(`https://api-mybrand.cyclic.app/api/v1/blogs/${id}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json'
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          location.reload();
        })
        .catch((err) => {
          alert(err);
        });
    }
  }