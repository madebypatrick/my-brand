const blog1 = document.querySelector(".bCol1");
const blogDetails1 = JSON.parse(localStorage.getItem("postList")) || [];
// console.log(blogDetails1);

blogDetails1.forEach((item, index) => {
    blog1.insertAdjacentHTML('afterbegin',`
    <img class="gridBoxImage" src="${item.uploadImage}">
    <h6>${item.category}  . ${item.date}</h6>   
    <h1 id="blogTitle">${item.title}</h1>  
    <p>${item.post}</p>          
                    
        `)
});
