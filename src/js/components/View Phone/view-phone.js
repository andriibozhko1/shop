export default class ViewPhone {
  constructor({element, phone, phoneList}) {
    this.phone = phone;
    this.element = element;
    this.phoneListPage = phoneList;

    this.render();
    this.addEvents();
  }
  render() {
    this.element.classList.remove('hide');    
    this.element.innerHTML = `        
        <div class="view-phone__side-images">
            <div class="view-photo__side-item"><img class="view-phone__side-img" src="./img/phones/dell-streak-7.1.jpg" alt=""></div>
            <div class="view-photo__side-item"><img class="view-phone__side-img" src="./img/phones/dell-streak-7.1.jpg" alt=""></div>
            <div class="view-photo__side-item"><img class="view-phone__side-img" src="./img/phones/dell-streak-7.1.jpg" alt=""></div>
            <div class="view-photo__side-item"><img class="view-phone__side-img" src="./img/phones/dell-streak-7.1.jpg" alt=""></div>
        </div>
        <div class="view-phone__main-img-block">
            <img class="view-phone__main-img" src="${this.phone.imageUrl}" alt="${this.phone.id}">
        </div>
        <div class="view-phone__description">
            <div class="btn-to-back">Back to Phones</div>
            <div class="view-phone__title">
                ${this.phone.name}
            </div>
            <div class="view-phone__snippet">
            ${this.phone.snippet}
            </div>
            <div class="view-phone__to-order">
              Buy
            </div>
         </div>
    `
  }
  addEvents() {
    this.element.addEventListener('click', (e) => {
      if(e.target.closest('.btn-to-back')) {
        this.element.classList.add('hide');
        this.phoneListPage.classList.remove('hide');
      }
    })
  }
}
