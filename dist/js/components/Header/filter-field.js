import debounce from "../../utils/debounce.js";

export default class FilterField {
  constructor({ element, phones }) {
    this.element = element;
    this.phones = phones;
    this.fieldValue;

    this.render();
    this.addEvents();
  }

  render() {
    this.element.innerHTML = `
        <label class="search-icon">
          <img src="img/icons/musica-searcher.png" alt="search-icon"/>
          <input type="text" class="header__input"/>
        </label>
    `;
  }

  addEvents() {
    let fields = [... this.element.querySelectorAll(".header__input")];

    let getFieldValue = (value) => {
      let filterEvent = new CustomEvent('filter-phones', {
        detail: value,
      })
      this.element.dispatchEvent(filterEvent);
    };

    getFieldValue = debounce(getFieldValue, 500);

    fields.map(field => {
      field.addEventListener("keyup", e => {
        getFieldValue(field.value);
      });
    })
  }
}
