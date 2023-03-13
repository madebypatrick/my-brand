const form = document.querySelector('#addPostForm');
const title = document.getElementById('title');
const category = document.getElementById('category');
const author = document.getElementById('author');
const content = document.getElementById('post');
let token = localStorage.getItem('token');


let storedBlogs = JSON.parse(localStorage.getItem('hold_blogs')) || [];

let addImage_holder;
add_image.addEventListener('change', function () {
    let imageHolder = new FileReader();
    imageHolder.readAsDataURL(add_image.files[0]);
    imageHolder.addEventListener('load', () => {
    const url = imageHolder.result;
    localStorage.setItem('image', url);
    })
});

    form.addEventListener('submit', (event) =>{
    event.preventDefault();
    // const file = fileInput.files[0];
    const file = localStorage.getItem('image')
    let blogsTosend = {
        image: file,
        title: title.value,
        category:category.value,
        author:author.value,
        content: content.value,
        };
        console.log(blogsTosend)
        fetch('https://api-mybrand.cyclic.app/api/v1/blogs', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(blogsTosend)
          })
          .then(response => response.json())
          .then(resp => {
            console.log(resp)
        })

   
})