const messageSection = document.querySelector(".tableRow1");
const messagesDetails = JSON.parse(localStorage.getItem("contactInfo")) || [];
// console.log(messagesDetails);

messagesDetails.forEach((item, index) => {
    messageSection.insertAdjacentHTML('afterbegin',`
    
                <div class="tableCell">
                  <p>${item.name}</p>
                </div>
                <div class="tableCell">
                  <p>${item.message}</p>
                </div>

                <div class="tableCell lastCell">
                  <p><i class="fa-solid fa-trash-can"></i></p>
                </div>
            
        `)
});


