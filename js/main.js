console.log("here");

function displayLevels(data) {
  let levelUl = document.querySelector("#levels");
  data.forEach(function (item) {
    console.log(item);
    let listItem = document.createElement("li");
    let section = document.createElement("section");

    let para = document.createElement("p");
    let anchor = document.createElement("a");
    anchor.href = "quiz.html";
    anchor.textContent = "Start";
    anchor.addEventListener("click", (e) => {
      localStorage.setItem("level", item.level);
    });
    let heading = document.createElement("h4");
    para.textContent = item.text;
    heading.textContent = item.level;

    levelUl.appendChild(listItem);
    listItem.appendChild(section);
    section.appendChild(heading);
    section.appendChild(para);
    section.appendChild(anchor);
  });
  console.log(levelUl);
}

window.onload = function () {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status == 200) {
        let data = JSON.parse(xhr.responseText);
        displayLevels(data);
      }
    }
  };

  xhr.open("GET", "php/get-levels.php", true);
  xhr.send();
};
