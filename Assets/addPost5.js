document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#addPostForm');
    const title = document.getElementById('title');
    const category = document.getElementById('category');
    const author = document.getElementById('author');
    const content = document.getElementById('post');


    form.addEventListener("submit", (event) => {
        event.preventDefault();
       
        const imageFile = document.getElementById('linkList').files[0];
        const reader = new FileReader();
      
        reader.addEventListener('load', () => {
          const image = reader.result;
          localStorage.setItem('image', image);
    
          const blogImage = localStorage.getItem('image');
          const formData = new FormData();
          formData.append('image', blogImage);
          formData.append('title', title.value);
          formData.append('category', category.value);
          formData.append('author', author.value);
          formData.append('content', content.value);
        
    
      
          console.log(formData); 
      
          fetch('https://api-mybrand.cyclic.app/api/v1/blogs', {
            method: 'POST',
            body: formData
          })
          .then((response) => {
           
            return response.json();
          })
          .then((data) => {
            console.log(data)
          })
          .catch((error) => {
            console.error(error);
          });
        });
      
        reader.readAsDataURL(imageFile);

    });     
})
