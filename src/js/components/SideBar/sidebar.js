export default class SideBar {
  constructor({ element }) {
    this.element = element;

    this.render();
    this.addEvents();
  }

  render() {
    this.element.innerHTML = `
      <div class="hide-side-bar-btn">
        <div class="hide-side-bar-btn__icon"></div>
      </div>  
      <div class='drop-down hide-sort'></div>      
    `;
  }
  addEvents() {
    let icon = this.element.querySelector(".hide-side-bar-btn__icon");

    this.element.addEventListener("click", event => {
      if (event.target.closest(".hide-side-bar-btn")) {
        this.element.classList.toggle("side-bar--hide");
      }
    });
  }
}
