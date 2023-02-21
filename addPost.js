
// function to show data
function showData() {
  var peopleList;

  if (localStorage.getItem("peopleList") == null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
  }

  var html = "";

  peopleList.forEach(function (element, index) {
    html += "<tr>";
    html += "<td>" + element.title + "</td>";
    html += "<td>" + element.category + "</td>";
    html += "<td>" + element.date + "</td>";
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
    var image = document.getElementById("linkList").value;
    var post = document.getElementById("post").value;


    var peopleList;
    if (localStorage.getItem("peopleList") == null) {
      peopleList = [];
    } else {
      peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }
    peopleList.push({
      title: title,
      category: category,
      date: date,

      image: image,

      post: post,

    });
    localStorage.setItem("peopleList", JSON.stringify(peopleList));
    showData();

    document.getElementById("title").value = "";
    document.getElementById("category").value = "";
    document.getElementById("date").value = "";
    document.getElementById("linkList").value = "";
    document.getElementById("post").value = "";

  
}

// function to delete data from local storage

function deleteData(index) {
  var peopleList;
  if (localStorage.getItem("peopleList") == null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
  }

  peopleList.splice(index, 1);
  localStorage.setItem("peopleList", JSON.stringify(peopleList));
  showData();
}

//  function to edit local storage data

function updateData(index) {


  var peopleList;
  if (localStorage.getItem("peopleList") == null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
  }

  document.getElementById("title").value = peopleList[index].title;
  document.getElementById("category").value = peopleList[index].category;
  document.getElementById("date").value = peopleList[index].date;
  document.getElementById("linkList").value ="";
  document.getElementById("post").value = peopleList[index].post;



  document.querySelector("#update").onclick = function () {
    
    //   peopleList[index].name = document.getElementById("name").value;
      peopleList[index].title = document.getElementById("title").value;
      peopleList[index].category = document.getElementById("category").value;
      peopleList[index].date = document.getElementById("date").value;
      peopleList[index].image = document.getElementById("linkList").value;
      peopleList[index].post = document.getElementById("post").value;

 
      localStorage.setItem("peopleList", JSON.stringify(peopleList));
      showData();
   
      document.getElementById("title").value = "";
      document.getElementById("category").value = "";
      document.getElementById("date").value = "";
      document.getElementById("linkList").value = "";
      document.getElementById("post").value = "";
   
    
  };
}
