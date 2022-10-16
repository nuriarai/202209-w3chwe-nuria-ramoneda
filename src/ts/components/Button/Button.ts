import Component from "../Component/Component.js";

class Button extends Component {
  constructor(
    parentElement: HTMLElement,
    private readonly className: string,
    private readonly tag: string = "button",
    private readonly text?: string
  ) {
    super(parentElement, `button ${className}`, tag);
  }

  render() {
    super.render();
    if (this.text) {
      this.domElement.textContent = this.text;
    }

    this.domElement.classList.add(this.className);
  }

  addListeners(): void {
    this.domElement.addEventListener("click", () => {});
  }
}

export default Button;
