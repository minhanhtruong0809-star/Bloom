fetch("https://api.nasa.gov/planetary/apod?api_key=YOUR_KEY")
.then(response => {
   if(!response.ok){
      throw new Error("HTTP " + response.status);
   }
   return response.json();
})
.then(data => {
   console.log(data);
   document.getElementById("title").innerText = data.title;
   document.getElementById("photo").src = data.url;
})
.catch(error => {
   console.error(error);
});