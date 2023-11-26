console.log("quiz");

let level = localStorage.getItem("level");
let score = 0;
let serial = 0;

function handleClick(e, item) {
  console.log(e.target);
  if (item.answered) {
  } else {
    item.answered = true;
    if (e.target.textContent == item.answer) {
      e.target.style.backgroundColor = "green";

      score++;
      serial++;
      document.querySelector("#score").textContent = `Score: ${score}/10`;
    } else {
      serial++;
      e.target.style.backgroundColor = "yellow";
    }
  }

  if (serial === 2) {
    if (level !== "Advanced") {
      if (score > 1) {
        document.querySelector("#greet").style.display = "block";
      } else {
        document.querySelector("#try-again").style.display = "block";
      }
    } else {
      if (score > 1) {
        document.querySelector("#winner").style.display = "block";
      } else {
        document.querySelector("#try-again").style.display = "block";
      }
    }
  }
}

function displayQuestions(data) {
  let levelUl = document.querySelector("#questions");

  let levelsection = document.querySelector("#level");
  levelsection.textContent = `Level: ${level}`;

  let scorePara = document.querySelector("#score");
  scorePara.textContent = `Score: ${score}/10`;

  data.forEach(function (item) {
    item.answered = false;
    // console.log(item);
    let listItem = document.createElement("li");
    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    let ul = document.createElement("ul");

    for (let i = 0; i < 4; i++) {
      let option = document.createElement("li");
      option.textContent = item[`option${i + 1}`];

      option.addEventListener("click", (e) => {
        console.log(e.target);
        handleClick(e, item);
      });
      ul.appendChild(option);
    }

    h2.textContent = item.question;

    levelUl.appendChild(listItem);
    listItem.appendChild(div);
    div.appendChild(h2);
    div.appendChild(ul);
  });
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

document.querySelector("#next-level").addEventListener("click", () => {
  if (level == "Beginner") {
    localStorage.setItem("level", "Intermediate");
  } else {
    localStorage.setItem("level", "Advanced");
  }
});

document.querySelector("#play-again").addEventListener("click", () => {
  localStorage.setItem("level", "Beginner");
});
