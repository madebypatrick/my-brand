// alert("hello")
var blogKeyId = sessionStorage.getItem("blogIdKey");
showDataToUpdate(blogKeyId);

function showDataToUpdate(blogKey){
    fetch(`http://127.0.0.1:3000/api/v1/blogs/${blogKey}`)
    .then((response) => response.json())
    .then((blogs)=>{
      

        let titleData=blogs.data.title;
        let categoryData=blogs.data.category;
        let contentData = blogs.data.content;
        let authorData = blogs.data.author;
        let imageData = blogs.data.image;
        
    
        title.value=titleData;
        category.value=categoryData;
        content.value=contentData;
        author.value=authorData;
        image.value = imageData;


        // console.log(titleData);
    });
}

let forms = document.getElementById("updatePostForm")
console.log("blog")


const title = document.getElementById("title")
const category = document.getElementById("category")
const content = document.getElementById("post")
const author = document.getElementById("author")
let image = document.getElementById('linkList');
let button = document.getElementById("update")


forms.addEventListener('submit', e =>{
     e.preventDefault();
   
     makeBlogUpdate();

    //   validateInputs();
    //  //  saveBlogData();
   });

   const makeBlogUpdate = ()=>{
    const titleValue=title.value.trim();
    const categoryValue=category.value.trim();
    const contentValue=content.value.trim();
    const authorValue=author.value.trim();
    const imageValue=image.value.trim();
    
    
    const data={title:titleValue,category:categoryValue,content:contentValue,author:authorValue,image:imageValue};
       console.log(data);

       fetch(`http://127.0.0.1:3000/api/v1/blogs/${blogKeyId}`,{

       method:"PUT",
       headers:{
        "Content-Type":"application/json"
       },
       body:JSON.stringify(data)

       })
       .then((response)=>{
         return response.json();
       })
       .then((data)=>{
        swal("Well done!", data.message, "success").then(() => {
          window.location = '../admin/addpost.html'})
       })
       .catch(error =>alert(error))
   }