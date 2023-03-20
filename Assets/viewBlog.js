// alert("hello")

// ---------------------------blog display----------------

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

const blogPostSingle = document.getElementById('blogPostSingle');

const fetchBlog = async () => {
  try {
    const response = await fetch(`https://api-mybrand.cyclic.app/api/v1/blogs/${id}`, {
      method: 'GET',
    });
    const blog = await response.json();
    return blog;
  } catch (error) {
    console.log('Error fetching blog: ', error.message);
  }
};

fetchBlog().then((res) => {
  console.log(res);

  blogPostSingle.innerHTML = `
  <div class="viewBlogContents">
  <h1 class="blogTitleSingle">${res.data.title}</h1>
  <p class="blogAuthorSingle">By: ${res.data.author} | ${res.data.createdAt}</p>
  <p class="blogCategorySingle">${res.data.category}</p>

      <div class="blogImageSingle">
        <img src="${res.data.image}"></img>
      </div>
      
        
        <p class="blogContentSingle">${res.data.content}</p>
        </div>
     
  `;
});




// ===================Comments section====================
// ======get the comment entered========


const form = document.getElementById("blogComm");

// add event listener to the form
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // grab the values in our inputs
  let fullname = document.getElementById("commentorName").value;
  let comment = document.getElementById("blogComment").value;
  

  // have our values in one object
  const data = { fullname, comment };
  console.log(data);

  // interaction with the API endpoint
 fetch('https://api-mybrand.cyclic.app/api/v1/comment',
 {
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify(data)

 })
 .then((response)=>{
  // console.log(response)
  return response.json()
 })
 .then((data)=>{
  if(data.ok){
  // alert(data.message)
  swal("Thank you!", data.message, "success").then(() => {
    location.reload();
  });
  }
 })
});

// ======display the comments entered========
const commentTable = document.getElementById("comment-table");
fetch("https://api-mybrand.cyclic.app/api/v1/comment")
  .then((response) => response.json())
  .then((comments) => {
    console.log(comments);
    comments.data.forEach((comment) => {
    //  console.log(comment)
      const row = document.createElement("tr");
      const fullnameCell = document.createElement("td");
      const commentCell = document.createElement("td");

      // assigning values to the cell
      fullnameCell.textContent = comment.fullname;
      commentCell.textContent = comment.comment;
      // append rows 
      row.appendChild(fullnameCell);
      row.appendChild(commentCell);
      commentTable.querySelector("tbody").appendChild(row)
    });
  })

  .catch((err) => alert(err));
