
//............Global Variation.............
var allInput = document.querySelectorAll("input");
var allTextarea = document.querySelectorAll("textarea");
var postList = [];
var blogImage = document.querySelector("#blog-image");
var uploadImage = document.querySelector("#linkList");
var saveBlogBtn = document.querySelector('#submit');
var updateBtn = document.querySelector('#update');
var title = document.getElementById('title');
var category = document.getElementById('category');
var date = document.getElementById('date');
var post = document.getElementById('post');

var imgUrl;

var addBlogBtn = document.querySelector('#btn-success');


// Save Blog Button Functionality
saveBlogBtn.onclick = function(e){
    e.preventDefault();
    registrationData();
    AddData();
    form.reset('');
}


// Storing Blogs in the localStorage
if (localStorage.getItem("postList") != null) {
    postList = JSON.parse(localStorage.getItem("postList"));
}

function registrationData(){
    postList.push({
                                                               //Latest update
        blogImage: imgUrl == undefined ? "images/logo for add-blog-image.jpeg" : imgUrl,
        title: title.value,
        category: category.value,
        date: date.value,

        post: post.value
    });
    console.log(postList);
    var blogsString = JSON.stringify(postList);
    localStorage.setItem("postList", blogsString);
}


// Pushing data from the localStorage to the t-body
var tableData = document.querySelector('#table-data')
const AddData = () =>{
    tableData.innerHTML = "";
    postList.forEach((data,index)=>{
        // console.log(index)
        tableData.innerHTML += `
            <tr index='${index}'> 
            <td>${data.title}</td>
            <td>${data.category}</td>
            <td>${data.date}</td>
            <td><img src="${data.blogImage}" width="50" height="50"></td>
                <td>${data.post}</td>
                <td>
                    <button class="edit-button-blogs edit-btn">Edit</button>
                    <button class="delete-button-blogs del-btn">Delete</button> 
                </td>
            </tr>
        `;
    })


    //Deleting blogs from the t-body
    var deleteButtons = document.querySelectorAll(".del-btn");
        for(var i = 0; i < deleteButtons.length; i++){
            deleteButtons[i].onclick = function(){
                var tr = this.parentElement.parentElement;
                var id = tr.getAttribute("index");
                postList.splice(id,1);
                localStorage.setItem("postList", JSON.stringify(postList));
                var ans = confirm("Are you sure you want to delete this blog?");
                if (ans == true) {
                    tr.remove();  
                }
            }
        }

    
    //Edit || Update your standby blog

    var allEdit = document.querySelectorAll('.edit-btn');
    for(var i = 0; i < allEdit.length; i++){
        allEdit[i].onclick = function(){
            var tr = this.parentElement.parentElement;
            var td = tr.getElementsByTagName("TD");
            var index = tr.getAttribute("index");

            // var imgTag1 = td[1].getElementsByTagName("IMG");
            // var blogImage1 = imgTag1[0].src;
            // var author1 = td[2].innerHTML;
            // var title1 = td[3].innerHTML;
            // var body1 = td[4].innerHTML;


            var imgTag1 = td[4].getElementsByTagName("IMG");
            var title1 = td[1].innerHTML;
            var category1 = td[2].innerHTML;
            var date1 = td[3].innerHTML;
            var blogImage1 = imgTag1[0].src;
            var post1 = td[5].innerHTML;
           


// ====================================================back

            
            addBlogBtn.click();
            
            saveBlogBtn.disabled = true;
            updateBtn.disabled = false;
// ====================================================back



            // author.value = author1;
            // title.value = title1;
            // body.value = body1;
            // blogImage.src = blogImage1;

            title.value=title1
            category.value=category1
            date.value=date1
            blogImage.src = blogImage1;
            post.value=post1
            


            updateBtn.onclick = function(){
                postList[index] = {

                    title: title.value,
                    category:category.value,
                    date:date.value,                      
                    blogImage: uploadImage.value == "" ? blogImage.src : imgUrl,                   
                    post: post.value
                   
                }
                localStorage.setItem("postList", JSON.stringify(postList));
                // form.reset('');
                // validateInputs();
                location.reload();
                
            }
        }
    }
        
}
AddData();


//Image Accessing and Processing

uploadImage.onchange = function(){
    if (uploadImage.files[0].size < 5000000) { //5000000 ~ 5mb (or 5000000bytes)
        var fReader = new FileReader();
        fReader.onload = function(e){
            imgUrl = e.target.result;
            blogImage.src = imgUrl;
            // console.log(imgUrl);
        }
        fReader.readAsDataURL(uploadImage.files[0]);
    } else {
        alert("The File size is too big");
    }
}

