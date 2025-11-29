let albumsList = document.getElementById("albumsList");


fetch("https://jsonplaceholder.typicode.com/albums")
  .then(response => response.json())
  .then(data => {
   
    data.forEach(album => {
      let li = document.createElement("li");
      li.textContent = album.title;
      albumsList.appendChild(li);
    });
  })
  .catch(error => console.log(error));
