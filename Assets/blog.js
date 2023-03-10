const blogSection = document.querySelector(".gridItem1");
const blogsDetails = JSON.parse(localStorage.getItem("postList")) || [];
// console.log(blogsDetails);

blogsDetails.forEach((item, index) => {
    blogSection.insertAdjacentHTML('afterbegin',`
    <img class="gridBoxImage" src="${item.uploadImage}">              
            <h6>${item.category}</h6>
        <a href="../Blog/machineLearning1.html">
          <p>${item.title}</p></a>

        <p>${item.date}</p>       
                    
        `)
});



// <img src="${item.uploadImage}"></img>