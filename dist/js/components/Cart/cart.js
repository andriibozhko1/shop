export default class Cart {
  constructor({element, phonesList}) {
    this.element = element;
    this.phonesList = phonesList;
    this.phones = [];    

    this.phonesList.map(e => e.quantity = 1);

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
      
    let phones = this.phones.map((phone) => {
      return `
         <div class="cart-menu__item" data-product-id="${phone.id}">
            <div class="cart-menu__remove-item">
              <img src="img/icons/error.svg" alt="cross" class="cart-menu__remove-item-icons">
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
    this.element.innerHTML = phones;
  }
  addEvents() {
    document.body.addEventListener('click', (e) => {
      if(e.target.dataset.toOrderId) {        
        this.phonesList.map((phone) => {
          if(phone.id === e.target.dataset.toOrderId) {
            this.phones.push(phone);
          }
        })
        this.render();
        this.element.closest('.cart-menu').classList.remove('hide');
      }
    })
    this.element.addEventListener('click', (e) => {
      if(e.target.closest('.cart-menu__remove-item')) {
        let item = e.target.closest('.cart-menu__item');        
        this.phones.map((phone) => {
          if(phone.id === item.dataset.productId) {
            if(phone.quantity > 1) {
              phone.quantity--;                      
              this.render();
            } else {                            
              this.phones.splice(this.phones.indexOf(phone),1);              
              this.render();
            }     
          }
        })
      }
    })
  }
}
