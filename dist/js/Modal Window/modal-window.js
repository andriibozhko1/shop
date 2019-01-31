export default class ModalWindow {
  constructor({ element , cartBtn}) {
    this.element = element;
    this.cartBtn = cartBtn;

    this.render();
    this.addEvents();
  }
  render() {
    this.element.innerHTML = `
        <div class="cart-menu__overflow"></div>
        <div class="cart-menu__cart">
          <div class="cart-menu__title">
              Cart
          </div>
          <div class="cart-menu__list">
          
          </div>
        </div>
    `
  }
  addEvents() {    
    this.cartBtn.addEventListener('click', (e) => {
      this.element.classList.remove('hide');
    })
    this.element.addEventListener('click', (e) => {
      if(e.target.classList.contains('cart-menu__overflow')) {
        this.element.classList.add('hide');
      }
    })
  }
}
