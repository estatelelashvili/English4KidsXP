const basicClassName = "component";
const basicTemplate = "<h1>This is my basic component</h1>";

class MyComponent {
  constructor(template = basicTemplate, className = basicClassName) {
    this.template = template;
    this.className = className;

    this.element = document.createElement("div");
    this.element.className = className;
    this.element.innerHTML = template;
    this.element.onclick = this.onClick.bind(this);
    this.element.style.cursor = "pointer";
  }

  onClick() {
    this.element.classList.toggle("clicked");
  }
}

const component = new MyComponent();
const container = document.querySelector(".container");

container.appendChild(component.element);
