const basicClassName = "component";
const basicTemplate = "<h1>This is Train Mode</h1>";
const basicTemplate2 = "<h1>This is Play Mode</h1>";

class Component {
  constructor(
    template = basicTemplate,
    className = basicClassName,
    isTrain = true
  ) {
    this.template = template;
    this.className = className;

    this.element = document.createElement("div");
    this.element.className = className;
    this.element.innerHTML = template;
    this.element.style.cursor = "pointer";
    this.isTrain = isTrain;
    if (this.isTrain) {
      this.element.style.backgroundColor = "red";
    }
  }

  setTrainProp() {
    if (this.isTrain) {
      this.element.style.backgroundColor = "red";
    }
  }

  // onClick() {
  //   this.element.classList.toggle("clicked");
  // }
}

function renderCards(last = false) {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  for (let i = 0; i < 6; i++) {
    const component = new Component(basicTemplate, basicClassName, last);
    container.appendChild(component.element);
  }
}

renderCards();

const toggleSwitch = document.getElementById("radio-gaga");
const toggleP = document.getElementById("toggle-p");
toggleSwitch.onchange = () => {
  console.log(toggleSwitch.checked);
  if (toggleSwitch.checked) {
    toggleP.innerText = "Play";
  } else {
    toggleP.innerText = "Train";
  }

  renderCards(toggleSwitch.checked);
};
