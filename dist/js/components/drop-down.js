"use strict";
export default class DropDown {
  constructor({ element, typesOfSorting }) {
    this.element = element;
    this.typesOfSorting = typesOfSorting;
    this.sortBy;

    this.render();
    this.addEvents();
  }

  render() {
    this.element.innerHTML = `    
        <div class="drop-down__title" data-dropdown-show="hide">
          Sort By:
        </div>
        <div class="drop-down__items">
          ${this.typesOfSorting.map(e=> `<div class="drop-down__item" data-filter-by="${e.type}">${e.value}</div>`).join('')}
        </div>
      `;
  }
  addEvents() {
    this.element.addEventListener('click', (e) => {
      if(e.target.closest('.drop-down__title')) {
        this.element.classList.toggle('hide-sort');
      }
      if(e.target.dataset.filterBy) {
        this.sortBy = e.target.dataset.filterBy;
      }      
    })
  }
}
