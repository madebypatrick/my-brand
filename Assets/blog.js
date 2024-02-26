// const form = document.getElementById("newsLetter");

// // add event listener to the form
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   // grab the values in our inputs
//   let email = document.getElementById("newsEmail").value;

//   // have our values in one object
//   const data = { email};
//   // console.log(data);

//   // interaction with the API endpoint
//  fetch('https://api-mybrand-bnww.onrender.com/api/v1/newsLetter',
//  {
//   method:"POST",
//   headers:{
//     "Content-Type":"application/json"
//   },
//   body:JSON.stringify(data)

//  })
//  .then((response)=>{
//   console.log(response)
//   return response.json()
//  })
//  .then((data)=>{
//   if(data.ok){
//   // alert(data.message)
//   // console.log(data);

//   swal("Thank you!", data.message, "success").then(() => {
//     location.reload();})
//   }
//  })
// });

// // ---------------------------blog display----------------
// const gridItem = document.querySelector(".gridContainer");
// const fetchBlogs = async() => {
//     try {
//         const response = await fetch(
//             'https://api-mybrand-bnww.onrender.com/api/v1/blogs', {
//                 method: 'GET',
//             },
//         );
//         const blogs = response.json();
//         return blogs;
//     } catch (error) {
//         console.log('Error fetching blogs: ', error.message);
//     }
// };

// fetchBlogs()
//     .then((res) => {
//         console.log(res);
        
//         res.data.forEach((item, index) => {
//             const date = new Date(item.createdAt);
//   const formattedDate = date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric',  hour: 'numeric',minute: 'numeric',
//   hour12: false });
//             gridItem.insertAdjacentHTML(

                
//                 'afterbegin',
//                 `
                


//           <div class="blogPost">
//           <a href="./Blog/viewBlog.html?id=${item._id}">
//           <div class="blogImage">
//           <img src="${item.image}"></img>
//           </div>
//           <div class="blogContents">
//               <p class="blogCategory">${item.category}</p>
//               <p class="blogTitle">${item.title}</p>
//               <p class="blogAuthor">${item.author} . ${formattedDate}</p>
              
//           </div></a>
//           </div>
        


//             `)
//         });
//     })

    



document.addEventListener('DOMContentLoaded', function() {
    const gridItem = document.querySelector(".gridContainer");
    const loader = document.getElementById("loader-overlay");
  
    const form = document.getElementById("newsLetter");
  
    // Function to fetch blogs
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          'https://api-mybrand-bnww.onrender.com/api/v1/blogs', {
            method: 'GET',
          },
        );
        const blogs = response.json();
        return blogs;
      } catch (error) {
        console.log('Error fetching blogs: ', error.message);
      }
    };
  
    // Function to hide loader
    const hideLoader = () => {
      loader.style.display = "none";
    };
  
    // Function to populate blogs
    const populateBlogs = (blogs) => {
      blogs.data.forEach((item, index) => {
        const date = new Date(item.createdAt);
        const formattedDate = date.toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          hour12: false
        });
        gridItem.insertAdjacentHTML(
          'afterbegin',
          `
          <div class="blogPost">
            <a href="./Blog/viewBlog.html?id=${item._id}">
              <div class="blogImage">
                <img src="${item.image}"></img>
              </div>
              <div class="blogContents">
                <p class="blogCategory">${item.category}</p>
                <p class="blogTitle">${item.title}</p>
                <p class="blogAuthor">${item.author} . ${formattedDate}</p>
              </div>
            </a>
          </div>
          `
        )
      });
      hideLoader(); // Hide loader after populating blogs
    };
  
    // Fetch blogs and populate
    fetchBlogs()
      .then((res) => {
        populateBlogs(res);
      })
      .catch((error) => {
        console.error('Error fetching blogs: ', error);
        hideLoader(); // Hide loader in case of error
      });
  
    // Add event listener to the form
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      let email = document.getElementById("newsEmail").value;
      const data = { email };
      fetch('https://api-mybrand-bnww.onrender.com/api/v1/newsLetter', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((data) => {
          if (data.ok) {
            swal("Thank you!", data.message, "success").then(() => {
              location.reload();
            });
          }
        });
    });
  });
  