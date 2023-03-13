const messageTable = document.getElementById("message-table");
fetch("https://api-mybrand.cyclic.app/api/v1/message")
  .then((response) => response.json())
  .then((messages) => {
    console.log(messages);
    messages.data.forEach((message) => {
      // console.log(message)
      const row = document.createElement("tr");
      const nameCell = document.createElement("td");
      const emailCell = document.createElement("td");
      const fromCell = document.createElement("td");
      const messageCell = document.createElement("td");

      // assigning values to the cell
      nameCell.textContent = message.fullname;
      emailCell.textContent = message.email;
      fromCell.textContent = message.from;
      messageCell.textContent = message.message;
      // append rows 
      row.appendChild(nameCell);
      row.appendChild(emailCell);
      row.appendChild(fromCell);
      row.appendChild(messageCell);

      // append table body
      // row.appendChild(nameCell);
      // row.appendChild(emailCell);
      // row.appendChild(fromCell);
      // row.appendChild(messageCell);

      // append tableBody
      messageTable.querySelector("tbody").appendChild(row)
    });
  })

  .catch((err) => alert(err));
