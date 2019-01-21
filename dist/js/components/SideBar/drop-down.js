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
          <span>Sort By:</span><img class="down-arrow-icon" src="../img/icons/down-arrow.svg">
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
        this.sortBy = e.target.dataset.filterBy;
        console.log(this.sortBy);
      }            
    })
    document.body.addEventListener('click', (e) => {
      if(!e.target.closest('.drop-down__title')) {
        this.element.classList.add('hide-sort');
      }
    });
  }
}
