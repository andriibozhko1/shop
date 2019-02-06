export default class ModalWindow {
  constructor({ element , cartBtn}) {
    this.element = element;
    this.cartBtn = cartBtn;
    
    this.render();
    this.addEvents();
  }
  render() {
    this.element.innerHTML = `
        <div class="modal-window__overflow"></div>
        <div class="modal-window__content">
          
        </div>
    `
    this.modalWindowContent = this.element.querySelector('.modal-window__content');
  }
  addEvents() {    
    this.cartBtn.addEventListener('click', (e) => {
      this.element.classList.remove('hide');
    })
    this.element.addEventListener('click', (e) => {
      if(e.target.closest('.modal-window__overflow')) {
        this.element.classList.add('hide');
      }
    })
  }
}
