import ViewPhone from "../View Phone/view-phone.js";
import ServerRequest from "../../server-request/server-request.js";

export default class PhonesList {
  constructor({ element, phones }) {
    this.element = element;
    this.phonesList = phones;

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
            <button class="product__to-order" data-to-order-id="${
              e.id
            }">Buy</button>
          </div>      
      `;
      })
      .join("");
    this.element.innerHTML = phones;
  }
  addEvents() {        
    this.element.addEventListener("click", e => {
      if (e.target.closest(".product") && !e.target.dataset.toOrderId) {        
        let productId = e.target.closest(".product").dataset.productId;

        let findPhoneById = new ServerRequest();
        findPhoneById.findById(productId, (phone) => {
          this.element.classList.add("hide");

          new ViewPhone({
            element: document.querySelector(".view-phone"),
            phone: phone,
            phoneList: this.element
          });
        })
      }
    });
  }
}