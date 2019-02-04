export default class Cart {
  constructor({element, phonesList}) {
    this.element = element;
    this.phonesList = phonesList;
    this.phones = [];    
    this.phonesList.map(phone => phone.quantity = 1);
    this.addEvents();    
  }
  render() {    
    this.phones = this.phones.filter((phones,index) => {
      if(this.phones.indexOf(phones) == index) {
        return true;
      } else {
        phones.quantity++;
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
    document.body.addEventListener('click', (event) => {
      if(event.target.dataset.toOrderId) {        
        this.phonesList.filter((phone) => {
          if(phone.id === event.target.dataset.toOrderId) {
            this.phones.push(phone);
          }
        })
        this.render();
        this.element.closest('.cart-menu').classList.remove('hide');
      }
    })
    
    this.element.addEventListener('click', (event) => {
      if(event.target.closest('.cart-menu__remove-item')) {
        let item = event.target.closest('.cart-menu__item');

        this.phones.map((phone) => {
          if(phone.id === item.dataset.productId) {
            phone.quantity > 1 ? phone.quantity-- : this.phones.splice(this.phones.indexOf(phone), 1)           
            this.render();
          }
        })
      }
    })
  }
}
