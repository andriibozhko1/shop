import ModalWindow from "../Modal Window/modal-window.js"

export default class Cart {
  constructor({ phonesList }) {
    this.phonesList = phonesList;
    this.phones = [];
    this.phonesList.map(phone => (phone.quantity = 1));

    this.modalWindow = new ModalWindow({
      element: document.querySelector(".modal-window"),
      cartBtn: document.querySelector(".header__cart-btn")
    });   

    this.addEvents();
  }

  render() {
    this.phones = this.phones.filter((phones, index) => {
      if (this.phones.indexOf(phones) == index) {
        return true;
      } else {
        phones.quantity++;
      }
    });
  
    this.modalWindow.modalWindowContent.innerHTML = `
      <div class="cart-menu">
        <div class="cart-menu__title">
          Cart
        </div>
        <div class="cart-menu__list">
          ${this.phones
            .map(phone => {
              return `
               <div class="cart-menu__item" data-product-id="${phone.id}">
                  <div class="cart-menu__remove-item">
                    <img src="img/icons/error.svg" alt="cross" class="cart-menu__remove-item-icons">
                  </div>
                  <div class="cart-menu__item-img-block">
                    <img src="${phone.imageUrl}" alt="${
                phone.id
              }" class="cart-menu__item-img">
                  </div>
                  <div class="cart-menu__item-title">
                    ${phone.name}
                  </div>
                  <div class="cart-menu__quantity">
                  ${phone.quantity}
                  </div>
              </div>
            `;
            })
            .join("")}
        </div>
      </div>
    `;
  }

  addEvents() {
    document.body.addEventListener("click", event => {
      if (event.target.dataset.toOrderId) {
        this.phonesList.filter(phone => {
          if (phone.id === event.target.dataset.toOrderId) {
            this.phones.push(phone);
          }
        });

        this.render();
        this.modalWindow.modalWindowContent.closest(".modal-window").classList.remove("hide");
      }
    });

    this.modalWindow.modalWindowContent.addEventListener("click", event => {
      if (event.target.closest(".cart-menu__remove-item")) {
        let item = event.target.closest(".cart-menu__item");

        this.phones.map(phone => {
          if (phone.id === item.dataset.productId) {
            phone.quantity > 1 ? phone.quantity-- : this.phones.splice(this.phones.indexOf(phone), 1);
            this.render();
          }
        });
      }
    });
  }
}
