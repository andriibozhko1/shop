import ServerRequest from "../../server-request/server-request.js";

export default class PhonesList {
  constructor({ element, phones }) {
    this.element = element;
    this.phonesList = phones;

    this.render();
    this.addEvents();
  }

  render(id = 0, phonesArr = this.phonesList) {
    let phones = [... phonesArr];  
    let paginationList = [];

    phones.forEach(() => {
      paginationList.push(phones.splice(0,6));
    })
    
    paginationList.push(phones);
    paginationList = paginationList.filter(arr => arr.length !== 0);
    
    this.element.innerHTML = `
      ${paginationList[id].map(phone => {
        return `
          <div class="product" data-product-id="${phone.id}">
            <div class="product__photo">
                <img src="${phone.imageUrl}" alt="${phone.id}" class="product__img">
            </div>
            <div class="product__title">
              ${phone.name}
            </div>
            <div class="product__snippet">
                  ${phone.snippet}
            </div>
            <button class="product__to-order" data-to-order-id="${
              phone.id
            }">Buy</button>
          </div>
      `;
      }).join('')}
      <div class="phones-navigation">
          ${paginationList.map((paginationTab,index) => {
            return `
            <div class="phones-navigation__page" data-pagination-page-id="${index}">${index + 1}</div>
            `
          }).join('')}
      </div>
    `
  }

  addEvents() {       
    let dropDown = document.querySelector('.drop-down');
    let detailsPhone = document.querySelector('.view-phone');
    let filterField = document.querySelector('.header__search-field');

    filterField.addEventListener('filter-phones', (data) => {
      this.filterPhonesObj(data.detail);
    })

    dropDown.addEventListener('change', (data) => {
      this.dropDownSorting(data.detail);
    })

    this.element.addEventListener("click", (phone) => {
      if (phone.target.closest(".product") && !phone.target.dataset.toOrderId) {        
        let productId = phone.target.closest(".product").dataset.productId;

        let findPhoneById = new ServerRequest();
          findPhoneById.findById(productId, (phone) => {
            this.element.classList.add("hide");

            let showPhoneEvent = new CustomEvent('show-phone', {
              detail: phone,
            })

            detailsPhone.dispatchEvent(showPhoneEvent);
          })
      }
      
      if(phone.target.closest('.phones-navigation__page')) {
        this.render(phone.target.dataset.paginationPageId);
        window.scrollTo(0,0)
      }
    });
  }
  
  dropDownSorting(fieldName) {
    this.phonesList = this.phonesList.sort((a,b) => a[fieldName] < b[fieldName] ? -1 : 1);
    this.render();
  }

  filterPhonesObj(value) {
    let filteredArr = [];

    this.phonesList.filter(phone => {      
      if (phone.name.toLowerCase().includes(value.toLowerCase())) {  
        filteredArr.push(phone);
      }
    });
    this.render(0,filteredArr);
  }
}
