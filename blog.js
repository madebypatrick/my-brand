const blogSection = document.querySelector(".gridItem1");
const blogsDetails = JSON.parse(localStorage.getItem("peopleList")) || [];
// console.log(blogsDetails);

blogsDetails.forEach((item, index) => {
    blogSection.insertAdjacentHTML('afterbegin',`
            
            <h6>${item.category}</h6>
        <a href="${item.post}">
          <p>${item.title}</p></a>

        <p>${item.date}</p>
                    
        `)
});
