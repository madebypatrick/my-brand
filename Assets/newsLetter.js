const newsLetterTable = document.getElementById("news-table");
fetch("https://api-mybrand-bnww.onrender.com/api/v1/newsLetter")
  .then((response) => response.json())
  .then((newsLetters) => {
    console.log(newsLetters);
    newsLetters.data.forEach((newsLetter) => {
      // console.log(newsLetter)
      const row = document.createElement("tr");
      const emailCell = document.createElement("td");
    

      // assigning values to the cell
      emailCell.textContent = newsLetter.email;
   
      // append rows 
      row.appendChild(emailCell);

      // append tableBody
      newsLetterTable.querySelector("tbody").appendChild(row)
    });
  })

  .catch((err) => alert(err));
