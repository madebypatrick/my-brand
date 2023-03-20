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
            fetch('https://api-mybrand.cyclic.app/api/v1/blogs', {
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
        <tr id="blog-${blog._id}">
        
        <td>${blog.title}</td>
        <td>${blog.category}</td>
        <td>${blog.author}</td>
        <td><img id="linkList" src="${blog.image}" alt="" width="50" height="50"></td>
        <td>${blog.content} </td>
        <td><button onclick="deleteBlog('${blog._id}')" class="delete-button">Delete</button>
        <button onclick="updateArticle('${blog._id}')" class="edit-button">Edit</button></td>
        </tr>
      `,
            )
    });
  })

  .catch((err) => alert(err));
 
// ==================================delete the blog==========================

function deleteBlog(id) {
  console.log(id);
  var ans = confirm('Are you sure you want to delete this blog?');
  if (ans == true) {
    fetch(`https://api-mybrand.cyclic.app/api/v1/blogs/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
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



// ================================update the blog===================
// function updateArticle(id) {

//   try {
//     console.log(id)
//     fetch(`http://127.0.0.1:3000/api/v1/blogs/${id}`);
//     image.style.display = 'block';
//     image.src = res.data.image;

//     title.value = res.data.title;
//     category.value = res.data.category;
//     author.value = res.data.author;
//     content.value = res.data.content;
//     saveBlogBtn.disabled = true;
//     updateBtn.disabled = false;
//     localStorage.setItem('blogToEdit', id);
//   } catch (error) {
//     console.log('Error getting Blog: ', error.message);
//   }
// };

// const editBlog = async (title, author, body, imageUrl) => {
//   var _id = localStorage.getItem('blogToEdit');
//   var title = document.getElementById('titleInput').value;
//   var author = document.getElementById('authorInput').value;
//   var body = document.getElementById('bodyTextarea').value;
//   var imageUrl = imgUrl;
//   try {
//     // let id;
//     const response = await fetch(
//       `http://127.0.0.1:7000/api/v1/blogs/${_id}`,
//       {
//         method: 'PUT',
//         headers: {
//           'content-type': 'application/json'
//         },
//         body: JSON.stringify({
//           title: title,
//           author: author,
//           body: body,
//           imageUrl,
//         }),
//       },
//     );
//     const data = await response.json();
//     if (data) {
//       location.reload();
//     } else {
//       console.log('Error editing blog', error);
//     }
//   } catch (error) {
//     console.log('Error editing blog: ', error.message);
//   }
// };

// // updateBtn.onclick = () => {
// //   const title = document.getElementById('titleInput').value;
// //   const author = document.getElementById('authorInput').value;
// //   const body = document.getElementById('bodyTextarea').value;
// //   const imageUrl = imgUrl;
// //   editBlog(title, author, body, imageUrl);
// // };