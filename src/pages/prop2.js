const basicClassName = "component";
const basicTemplate = "<h1>This is Train Mode</h1>";
const basicTemplate2 = "<h1>This is Play Mode</h1>";

class TrainComponent {
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
    this.element.onclick = this.setTrainProp.bind(this);
    // this.element.onclick = this.onClick.bind(this);
    this.element.style.cursor = "pointer";
    this.isTrain = isTrain;
  }

  setTrainProp() {
    if (this.isTrain) {
      this.element.classList.toggle("clicked");
    }
  }

  // onClick() {
  //   this.element.classList.toggle("clicked");
  // }
}
class PlayComponent {
  constructor(
    template = basicTemplate2,
    className = basicClassName,
    isTrain = false
  ) {
    this.template = template;
    this.className = className;

    this.element = document.createElement("div");
    this.element.className = className;
    this.element.innerHTML = template;
    this.element.onclick = this.setTrainProp.bind(this);
    // this.element.onclick = this.onClick.bind(this);
    this.element.style.cursor = "pointer";
    this.isTrain = isTrain;
  }

  setTrainProp() {
    if (this.isTrain) {
      this.element.classList.toggle("clicked");
    }
  }
  // onClick() {
  //   this.element.classList.toggle("clicked");
  // }
}

const container = document.querySelector(".container");
for (let i = 0; i < 6; i++) {
  if (i < 3) {
    const component = new TrainComponent();
    container.appendChild(component.element);
  } else {
    const component = new PlayComponent();
    container.appendChild(component.element);
  }
}
