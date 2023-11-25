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

{
  /* <li>
            <section>
              <h4>Beginner Level</h4>
              <p>
                Start your social studies journey with 30 basic quesions in
                geography, history, economic and civics.
              </p>
              <a id="start" href="quiz.html">Start</a>
            </section>
          </li> */
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
