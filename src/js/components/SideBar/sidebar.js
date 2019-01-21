export default class SideBar {
  constructor({ element }) {
    this.element = element;

    this.render();
    this.addEvents();
  }

  render() {
    this.element.innerHTML = `
      <div class="hide-side-bar-btn">
        <img src="img/icons/left-arrow.svg" class="hide-side-bar-btn__icon" alt="hide-arrow-icon">
      </div>  
      <div class='drop-down hide-sort'></div>      
    `;
  }
  addEvents() {
    let icon = this.element.querySelector(".hide-side-bar-btn__icon");

    this.element.addEventListener("click", e => {
      if (e.target.closest(".hide-side-bar-btn")) {
        this.element.classList.toggle("side-bar--hide");
        if (this.element.classList.contains("side-bar--hide")) {
          icon.src = "img/icons/right-arrow.svg";
        } else {
          icon.src = "img/icons/left-arrow.svg";
        }
      }
    });
  }
}
