
//=================Global Variables==================
var allInput = document.querySelectorAll("input");
var allTextarea = document.querySelectorAll("textarea");
var postList = [];
var uploadImage = document.querySelector("#linkList").src;
var saveBlogBtn = document.querySelector('#submit');
var updateBtn = document.querySelector('#update');
var title = document.getElementById('title');
var category = document.getElementById('category');
var date = document.getElementById('date');
var post = document.getElementById('post');

var imgUrl;
var addBlogBtn = document.querySelector('.edit-btn');



// Pushing data from the localStorage to the t-body
const AddData = () =>{

    var postList;
    if (localStorage.getItem("postList") == null) {
        postList = [];

    } else {
        postList = JSON.parse(localStorage.getItem("postList"));
    }

var tableData = document.querySelector('#table-data')

    tableData.innerHTML = "";
    postList.forEach((data,index)=>{
       
        tableData.innerHTML += `
            <tr> 
            <td>${data.title}</td>
            <td>${data.category}</td>
            <td>${data.date}</td>
            <td><img src="${data.uploadImage}" width="50" height="50"></td>
                <td>${data.post}</td>
                <td>
                    <button onclick="updateArticle(${index})" class="edit-button-blogs edit-btn">Edit</button>
                    <button   class="delete-button-blogs del-btn">Delete</button> 
                </td>
            </tr>
        `
    });

}
document.onload=AddData();

// Storing Blogs in the localStorage

function registrationData(){
    const imgUrl = localStorage.getItem("load-image");
   
    var title = document.getElementById("title").value;
    var category = document.getElementById("category").value;
    var date = document.getElementById("date").value;
    var post = document.getElementById("post").value;
    var imgUrl1;

    var postList;
        if (localStorage.getItem("postList") == null) {
            postList = [];

        } else {
            postList = JSON.parse(localStorage.getItem("postList"));
        }


    postList.push({
        title: title,
        category:category,
        date: date,
        uploadImage: imgUrl,
        post: post,
    });

    localStorage.setItem("postList", JSON.stringify(postList));
    AddData();
    document.getElementById("title").value = "";
    document.getElementById("category").value = "";
    document.getElementById("date").value = "";
    document.getElementById("linkList").src = "";
    document.getElementById("post").value = "";

}



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
    function updateArticle(index) {
        document.getElementById("submit").style.display = "none";
        document.getElementById("update").style.display = "block";
    
        var postList;
        if (localStorage.getItem("postList") == null) {
            postList = [];
        } else {
            postList = JSON.parse(localStorage.getItem("postList"));
        }
    
        document.getElementById("title").value = postList[index].title;
        document.getElementById("category").value = postList[index].category;
        document.getElementById("date").value = postList[index].date;
        document.getElementById("linkList").src = postList[index].uploadImage;
        document.getElementById("post").value = postList[index].post;
    
        document.querySelector("#update").onclick = function() {
            
                postList[index].title = document.getElementById("title").value;
                postList[index].category = document.getElementById("category").value;
                postList[index].date = document.getElementById("date").value;
                postList[index].uploadImage = document.getElementById("linkList").src;
                postList[index].post = document.getElementById("post").value;
    
                localStorage.setItem("postList", JSON.stringify(postList));
                AddData();
                document.getElementById("title").value = "";
                document.getElementById("category").value = "";
                document.getElementById("date").value = "";
                document.getElementById("linkList").src = "";
                document.getElementById("post").value = "";
                document.getElementById("submit").style.display = "block";
                document.getElementById("update").style.display = "none";
            
    
        }
    }
    
    // ====================


document.querySelector("#linkList").addEventListener('change', function() {
    const fileUpload = new FileReader();


    fileUpload.addEventListener("load", () => {
        localStorage.setItem("load-image", fileUpload.result);


    });
    fileUpload.readAsDataURL(this.files[0]);


});
// -------------------------------------
