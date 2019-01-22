export default class Cart {
  constructor({element, phones, cartMenu}) {
    this.element = element;
    this.phones = phones;
    this.cartMenu = cartMenu;
    this.phones.map(e => e.quantity = 1);     
    
    this.render();
    this.addEvents();    
  }
  render() {
   this.phones = this.phones.filter((a,b) => {
      if(this.phones.indexOf(a) == b) {
        return true;
      } else {
        a.quantity++;
      }
    });
    console.log(this.element)    
    let phones = this.phones.map((phone) => {
      return `
         <div class="cart-menu__item">
            <div class="cart-menu__remove-item">
              <img src="../../img/icons/error.svg" alt="cross" class="cart-menu__remove-item-icons">
            </div>
            <div class="cart-menu__item-img-block">
              <img src="${phone.imageUrl}" alt="${phone.id}" class="cart-menu__item-img">
            </div>
            <div class="cart-menu__item-title">
              ${phone.name}
            </div>
            <div class="cart-menu__quantity">
            ${phone.quantity}
            </div>
        </div>
      `
    }).join("");    
    this.cartMenu.innerHTML = `
        <div class="cart-menu__overflow">
        </div>
        <div class="cart-menu__cart">
          <div class="cart-menu__title">
              Cart
          </div>
          <div class="cart-menu__list">
          ${phones}
          </div>
        </div>
    `
  }
  addEvents() {   
    this.element.addEventListener('click', (e) => {
      this.cartMenu.classList.remove('hide');
    })
    this.cartMenu.addEventListener('click', (e) => {
      if(e.target.classList.contains('cart-menu__overflow')) {
        this.cartMenu.classList.add('hide');
      }
    })
  }
}
