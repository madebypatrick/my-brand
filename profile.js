// const title = document.getElementById('title');
// const content = document.getElementById("item-list");

// const allUsers = document.getElementById("all-users");

// const currentUser = JSON.parse(localStorage.getItem('currentUser'));

// users = JSON.parse(localStorage.getItem('users')) || [];

// title.innerHTML = `Welcome ${currentUser.firstName}`;

// const adminMenu = Array.from(document.getElementsByClassName("admin"));
// const userMenu = Array.from(document.getElementsByClassName("user"));
// const vendor = Array.from(document.getElementsByClassName("vendor"));

// if(currentUser.role != "admin") adminMenu.forEach(e => e.style.display = 'none');
// if(currentUser.role != "user") userMenu.forEach(e => e.style.display = 'none');
// if (currentUser.role != "vendor") vendor.forEach(e => e.style.display = 'none');

// function showDetails(user) {
//   title.innerHTML = `${user.firstName} details`;
//   content.innerHTML = `<span>First Name: ${user.firstName}</span><br>Email: ${user.email}<span></span>`
// }

// function showAllUsers() {
//   title.innerHTML = 'All Users';
//   if (content.hasChildNodes()) return content.innerHTML = "";
//   users.forEach(user => {
//     const li = document.createElement('li');
//     li.innerHTML = `user: ${user.firstName}`
//     li.addEventListener('click', () => showDetails(user));
//     content.appendChild(li);
//   })
// }

// allUsers.onclick = showAllUsers;

