
// ====================Signup form validation===================

// document.querySelector(".button").onclick = function (e) {
//   e.preventDefault();
//   var password = document.querySelector("#passwordUp").value,
//     confirmpassword = document.querySelector("#passwordConf").value;
//   var logEmailUp = document.getElementById("logEmailUp").value;

//   if (password == "") {
//     swal("NOT YET!", "Please fill out every field!", "info");
//   } else if (password != confirmpassword) {
//     swal("OOpS!", "The passwords don't match.", "error");
//     return false;
//   } else if (password == confirmpassword) {
//     swal("WELL DONE!", "You can now login with your credentials.", "success");
//   }
//   return true;
// };



//================ Add post section===========================
var selectedRow=null;
function onFormSubmit(){
  var formData=readFormData();
  if(selectedRow==null)
  insertNewRecord(formData);
  else
    updateRecord(formData);
  
  resetForm();


}
function readFormData(){
  var formData={};
  formData["title"]=document.getElementById("title").value;
  formData["category"]=document.getElementById("category").value;
  formData["date"]=document.getElementById("date").value;
  formData["linkList"]=document.getElementById("linkList").value;
  formData["post"]=document.getElementById("post").value;
  return formData;

}

function insertNewRecord(data){
  var table=document.getElementById("formRecords").getElementsByTagName('tbody')[0];
  var newRow=table.insertRow(table.length);
  cell1=newRow.insertCell(0);
  cell1.innerHTML=data.title;
  cell2=newRow.insertCell(1);
  cell2.innerHTML=data.category;
  cell3=newRow.insertCell(2);
  cell3.innerHTML=data.date;
  cell4=newRow.insertCell(3);
  cell4.innerHTML=data.linkList;
  cell5=newRow.insertCell(4);
  cell5.innerHTML=data.post;
  cell5=newRow.insertCell(5);
  cell5.innerHTML=`<a onClick="onEdit(this)" ><i class="fa-solid fa-pen-to-square"></i></a>
  <a onClick="onDelete(this)" ><i class="fa-solid fa-trash-can"></i></a>`;
}

function resetForm(){
  document.getElementById("title").value="";
  document.getElementById("category").value="";
  document.getElementById("date").value="";
  document.getElementById("linkList").value="";
  document.getElementById("post").value="";
  selectedRow=null;

}

function onEdit(td){
  selectedRow=td.parentElement.parentElement;
  document.getElementById("title").value=selectedRow.cells[0].innerHTML;
  document.getElementById("category").value=selectedRow.cells[1].innerHTML;
  document.getElementById("date").value=selectedRow.cells[2].innerHTML;
  document.getElementById("linkList").value=selectedRow.cells[3].innerHTML;
  document.getElementById("post").value=selectedRow.cells[4].innerHTML;
}

function updateRecord(formData){
  selectedRow.cells[0].innerHTML=formData.title;
  selectedRow.cells[1].innerHTML=formData.category;
  selectedRow.cells[2].innerHTML=formData.data;
  selectedRow.cells[3].innerHTML=formData.Linklist;
  selectedRow.cells[4].innerHTML=formData.post;
}

function onDelete(td){
  if(confirm("Are you sure you want to delete this?")){
  row=td.parentElement.parentElement;
  document.getElementById("formRecords").deleteRow(row.rowIndex);
  resetForm();
  }
}






