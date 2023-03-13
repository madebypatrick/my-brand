

// Display the Blogs into the table
const blogTable = document.getElementById("crudTable");
fetch("https://api-mybrand.cyclic.app/api/v1/blogs")
  .then((response) => response.json())
  .then((blogs) => {
    console.log(blogs);
        blogs.data.forEach((blog, id) => {
            blogTable.insertAdjacentHTML(
                'afterbegin',
                ` 
        <tr>
        
        <td>${blog.title}</td>
        <td>${blog.category}</td>
        <td>${blog.author}</td>
        <td><img id="linkList" src="${blog.image}" alt="" width="50" height="50"></td>
        <td>${blog.content} </td>
        <td><button onclick="deleteBlog(${blogs._id})" class="delete-button">Delete</button>
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
          'content-type': 'application/json',
          Authorization: `JWT ${localStorage.getItem('token')}`,
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