const form = document.getElementById("newsLetter");

// add event listener to the form
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // grab the values in our inputs
  let email = document.getElementById("newsEmail").value;

  // have our values in one object
  const data = { email};
  // console.log(data);

  // interaction with the API endpoint
 fetch('https://api-mybrand.cyclic.app/api/v1/newsLetter',
 {
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify(data)

 })
 .then((response)=>{
  console.log(response)
  return response.json()
 })
 .then((data)=>{
  if(data.ok){
  // alert(data.message)
  // console.log(data);

  swal("Thank you!", data.message, "success");
  }
 })
});

// ---------------------------blog display----------------

const gridItem = document.querySelector(".gridContainer");
const fetchBlogs = async() => {
    try {
        const response = await fetch(
            'https://api-mybrand.cyclic.app/api/v1/blogs', {
                method: 'GET',
            },
        );
        const blogs = response.json();
        return blogs;
    } catch (error) {
        console.log('Error fetching blogs: ', error.message);
    }
};

fetchBlogs()
    .then((res) => {
        console.log(res);
        res.data.forEach((item, index) => {
            gridItem.insertAdjacentHTML(
                'afterbegin',
                `
                


          <div class="blogPost">
          <a href="./Blog/singleBlog.html" class="rd-more">
          <div class="blogImage">
          <img src="${item.image}"></img>
          </div>
          <div class="blogContents">
              <p class="blogCategory">${item.category}</p>
              <p class="blogTitle">${item.title}</p>
              <p class="blogAuthor">${item.author} . ${item.date}</p>
              
          </div></a>
          </div>
        


            `)
        });
    })

    
