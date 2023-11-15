// creating an element
const div = document.createElement("div");

// assigning property to an element
div.style.color("red");
div.style.cssText("color: red");
div.setAttribute("style", "color:red");

// extracting property from an element
let color;
color = div.style.color;
color = div.style["color"];

// editing element attibute
div.setAttribute("id", "colorbox");
div.getAttribute("id");
div.removeAttribute("id");

// editing element class
div.classList.add("light");
div.classList.remove("dark");
div.classList.toggle("dark-mode");

// event trigger

// method 2
const btn = document.querySelector("button");
btn.onclick = () => {
  alert("I am clicked");
};

// method 3
btn.addEventListener("click", () => {
  alert("I am clicked");
});
