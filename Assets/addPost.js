// var tableData = document.querySelector('#table-data')
// var blogsData = [];
// var blogImage = document.querySelector("#blog-image");

// const showData = () =>{
//     tableData.innerHTML = "";
//     blogsData.forEach((data,index)=>{
//         // console.log(index)
//         tableData.innerHTML += `
//             <tr index='${index}'>    
//                 <td>${data.title}</td>
//                 <td>${data.category}</td>
//                 <td>${data.date}</td>
//                 <td><img src="${data.blogImage}" width="50" height="50"></td>
//                 <td>${data.post}</td>
//                 <td>
//                     <button class="edit-button-blogs edit-btn">Edit</button>
//                     <button class="delete-button-blogs del-btn">Delete</button> 
//                 </td>
//             </tr>
//         `;
//     })
//     document.querySelector("#crudTable tbody").innerHTML = html;
//   }
  









// function to show data
function showData() {
  var postList;

  if (localStorage.getItem("postList") == null) {
    postList = [];
  } else {
    postList = JSON.parse(localStorage.getItem("postList"));
  }

  var html = "";

  postList.forEach(function (element, index) {
    html += "<tr>";
    html += "<td>" + element.title + "</td>";
    html += "<td>" + element.category + "</td>";
    html += "<td>" + element.date + "</td>";
    // html += "<td>" +<img src="element.image}" width="50" height="50"></img>  + "</td>";

    html += "<td>" + element.image + "</td>";
    html += "<td>" + element.post + "</td>";

    html +=
      '<td><button onclick="deleteData(' +
      index +
      ')" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i></button><button onclick="updateData(' +
      index +
      ')" class="btn btn-warning m-2"><i class="fa-solid fa-pen-to-square"></i></button></td>';
    html += "</tr>";
  });

  document.querySelector("#crudTable tbody").innerHTML = html;
}

// loads all data when a page is loaded

document.onload = showData();

// function to add data

function AddData() {


    var title = document.getElementById("title").value;
    var category = document.getElementById("category").value;
    var date = document.getElementById("date").value;
    var image = document.getElementById("linkList").files[0].src;
    var post = document.getElementById("post").value;


    var postList;
    if (localStorage.getItem("postList") == null) {
      postList = [];
    } else {
      postList = JSON.parse(localStorage.getItem("postList"));
    }
    postList.push({
      title: title,
      category: category,
      date: date,

      // image: image,
      image:uploadImage.value == "" ? blogImage.src : imgUrl,

      post: post

    });
    localStorage.setItem("postList", JSON.stringify(postList));
    showData();

    document.getElementById("title").value = "";
    document.getElementById("category").value = "";
    document.getElementById("date").value = "";
    document.getElementById("linkList").files[0].src = "";
    document.getElementById("post").value = "";

  
}

// function to delete data from local storage

function deleteData(index) {
  var postList;
  if (localStorage.getItem("postList") == null) {
    postList = [];
  } else {
    postList = JSON.parse(localStorage.getItem("postList"));
  }

  postList.splice(index, 1);
  localStorage.setItem("postList", JSON.stringify(postList));
  showData();
}

//  function to edit local storage data

function updateData(index) {


  var postList;
  if (localStorage.getItem("postList") == null) {
    postList = [];
  } else {
    postList = JSON.parse(localStorage.getItem("postList"));
  }

  document.getElementById("title").value = postList[index].title;
  document.getElementById("category").value = postList[index].category;
  document.getElementById("date").value = postList[index].date;
  document.getElementById("linkList").files[0].name =postList[index].image;
  document.getElementById("post").value = postList[index].post;



  document.querySelector("#update").onclick = function () {
    
      postList[index].title = document.getElementById("title").value;
      postList[index].category = document.getElementById("category").value;
      postList[index].date = document.getElementById("date").value;
      postList[index].image = document.getElementById("linkList").files[0].src;
      postList[index].post = document.getElementById("post").value;

 
      localStorage.setItem("postList", JSON.stringify(postList));
      showData();
   
      document.getElementById("title").value = "";
      document.getElementById("category").value = "";
      document.getElementById("date").value = "";
      document.getElementById("linkList").files[0].src = "";
      document.getElementById("post").value = "";
   
    
  };
}

//Image Accessing and Processing
var uploadImage = document.querySelector("#linkList");
var imgUrl;
var blogImage = document.querySelector("#blog-image");

uploadImage.onchange = function(){
 
      var fReader = new FileReader();
      fReader.onload = function(e){
          imgUrl = e.target.result;
          blogImage.src = imgUrl;
          // console.log(imgUrl);
      }
      fReader.readAsDataURL(uploadImage.files[0]);
  }


