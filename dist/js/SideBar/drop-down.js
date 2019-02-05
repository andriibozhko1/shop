import PhoneList from "../Phones/phones-list.js"

export default class DropDown {
  constructor({ element, typesOfSorting, phones }) {
    this.element = element;
    this.typesOfSorting = typesOfSorting;
    this.phones = phones;
    
    this.render();
    this.addEvents();
  }

  render() {
    this.element.innerHTML = `    
        <div class="drop-down__title" data-dropdown-show="hide">
          <span>Sort By:</span><img class="down-arrow-icon" src="img/icons/down-arrow.svg">
        </div>
        <div class="drop-down__items">
          ${this.typesOfSorting.map(e=> `<div class="drop-down__item" data-filter-by="${e.type}">${e.value}</div>`).join('')}
        </div>
      `;
  }
  addEvents() {
    this.element.addEventListener('mousedown',(e) => {
      e.preventDefault();
    })
    this.element.addEventListener('click', (e) => {      
      if(e.target.closest('.drop-down__title')) {
        this.element.classList.toggle('hide-sort');
      }
      if(e.target.dataset.filterBy) {           
        this.sorting(e.target.dataset.filterBy);
      }            
    })
    document.body.addEventListener('click', (e) => {
      if(!e.target.closest('.drop-down__title')) {
        this.element.classList.add('hide-sort');
      }
    });
  }
  sorting(phones) {
    let sortedPhonesList = this.phones.sort((a,b) => a[phones] < b[phones] ? -1 : 1);
    let sort = new PhoneList({
      element: document.querySelector('.phones'),
      phones: sortedPhonesList,
    })
  }
}
