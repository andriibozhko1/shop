import ViewPhone from "../View Phone/view-phone.js";

export default class PhonesList {
  constructor({ element, phones }) {
    this.element = element;
    this.phonesList = phones;
    this.selectedPhones;
    
    this.render();
    this.addEvents();
  }
  render() {
    let phones = this.phonesList
      .map(e => {
        return `
          <div class="product" data-product-id="${e.id}">
            <div class="product__photo">
                <img src="${e.imageUrl}" alt="${e.id}" class="product__img">
            </div>
            <div class="product__title">
              ${e.name}
            </div>
            <div class="product__snippet">
                  ${e.snippet}
            </div>
            <button class="product__to-order">Buy</button>
          </div>      
      `;
      })
      .join("");
    this.element.innerHTML = phones;
  }
  addEvents() {
    let productId;
    this.element.addEventListener("click", e => {
      if(e.target.classList.contains('product__to-order')) {
        console.log(1);
      } else if(e.target.closest(".product")) {
        productId = e.target.closest(".product").dataset.productId;

        this.phonesList.map(phone => {
          if (phone.id === productId) {
            console.log(phone.id);
            this.element.classList.add("hide");

            let viewPhonePage = new ViewPhone({
              element: document.querySelector(".view-phone"),
              phone: phone,
              phoneList: this.element
            });
          }
        });
      }
    });
  }
}
