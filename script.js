fetch("https://624dc41c77abd9e37c7e0cec.mockapi.io/blog")
  .then((response) => response.json())
  .then((data) => {
    const blog = document.querySelector(".blog");
    let i = 0;
    while (i < data.length) {
      const date = document.createElement("p");
      const text = document.createElement("div");
      const likes = document.createElement("div");
      likes.className = "likes"
      const image = document.createElement("img");
      image.setAttribute("src", data [i].images)
      text.textContent = data[i].text;
      const dateFormatted = new Date(data[i].date);
      const czechDate = dateFormatted.toLocaleDateString("cs-CZ");
      date.textContent = czechDate;
      likes.innerHTML = `
      <div class="likes-thumb"><img src=thumb.png width="30px">${data[i].likes}</div>
      <span class="likes-text">people like this!</span>`
  
      blog.append(date, image, text, likes);
      i++;
    }
  }); 