console.log("@ershahidnabi");

const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener("click", function (e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id === "gray") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "teal") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "orange") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "purple") {
            body.style.backgroundColor = e.target.id;
        }
    });
});
