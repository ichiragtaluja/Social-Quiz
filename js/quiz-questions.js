console.log("quiz");

let level = localStorage.getItem("level");
let score = 0;
console.log(level);

function displayQuestions(data) {
  let levelUl = document.querySelector("#questions");
  let levelsection = document.querySelector("#level");
  levelsection.textContent = `Level: ${level}`;
  data.forEach(function (item) {
    console.log(item);
    let listItem = document.createElement("li");
    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    let ul = document.createElement("ul");
    let option1 = document.createElement("li");
    let option2 = document.createElement("li");
    let option3 = document.createElement("li");
    let option4 = document.createElement("li");

    h2.textContent = item.question;
    option1.textContent = item.option1;
    option2.textContent = item.option2;
    option3.textContent = item.option3;
    option4.textContent = item.option4;

    option1.addEventListener("click", (e) => {
      console.log(e.target);
    });

    levelUl.appendChild(listItem);
    listItem.appendChild(div);
    div.appendChild(h2);
    div.appendChild(ul);
    ul.appendChild(option1);
    ul.appendChild(option2);
    ul.appendChild(option3);
    ul.appendChild(option4);
  });
  console.log(levelUl);
}

window.onload = function () {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status == 200) {
        let data = JSON.parse(xhr.responseText);
        displayQuestions(data);
      }
    }
  };

  xhr.open("GET", `php/get-questions.php/?level=${level}`, true);
  xhr.send();
};
