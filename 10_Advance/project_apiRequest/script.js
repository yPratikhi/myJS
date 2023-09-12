const requestUrl = "https://api.github.com/users/hiteshchoudhary";
const xhr = new XMLHttpRequest();
xhr.open("GET", requestUrl);
xhr.onreadystatechange = function () {
  // console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText);
    // console.log(typeof data);
    // console.log(data.followers);

    //Profile
    const img = document.createElement("img");
    img.style.height = "200px";
    img.style.width = "200px";
    img.style.borderRadius = "100px";
    img.style.margin = "20px";
    document.querySelector(".container").appendChild(img);

    //Name
    const h2 = document.createElement("h2");
    h2.style.fontSize = "32px";
    h2.style.fontFamily = "monospace";
    document.querySelector(".container").appendChild(h2);

    //followers
    const p = document.createElement("p");
    p.style.fontSize = "32px";
    p.style.fontFamily = "monospace";
    document.querySelector(".container").appendChild(p);

    document.querySelector("#btn").addEventListener("click", function () {
      img.setAttribute("src", data.avatar_url);
      h2.innerHTML = data.name;
      p.innerHTML = "Followers :" + " " + data.followers;
    });
  }
};

xhr.send();

// font-size: 32px;
//     font-family: monospace;
// }
