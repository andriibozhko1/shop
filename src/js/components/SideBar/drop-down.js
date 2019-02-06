export default class DropDown {
  constructor({ element, typesOfSorting }) {
    this.element = element;
    this.typesOfSorting = typesOfSorting;
    this.titleName = 'Newest';

    this.render();
    this.addEvents();
  }

  render() {
    this.element.innerHTML = `    
        <div class="drop-down__title" data-dropdown-show="hide">
          <span>Sort By: ${this.titleName}</span>
        </div>
        <div class="drop-down__items">
          ${this.typesOfSorting.map(e=> `<div class="drop-down__item" data-sort-by="${e.type}">${e.value}</div>`).join('')}
        </div>
      `;
  }
  addEvents() {
    let dropDown = document.querySelector('.drop-down');

    this.element.addEventListener('mousedown',(e) => {
      e.preventDefault();
    })

    this.element.addEventListener('click', (e) => {      
      if(e.target.closest('.drop-down__title')) {
        this.element.classList.toggle('hide-sort');
      }
      if(e.target.dataset.sortBy) {     
        let nameOfSort = e.target.dataset.sortBy;
        this.titleName =e.target.textContent;
        let changeEvent = new CustomEvent('change', {
          detail: nameOfSort,
        })
        
        this.element.dispatchEvent(changeEvent);
        this.render();
      }            
    })

    document.body.addEventListener('click', (e) => {
      if(!e.target.closest('.drop-down__title')) {
        this.element.classList.add('hide-sort');
      }
    });
  }
}
