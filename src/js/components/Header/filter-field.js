import PhonesList from "../Phones/phones-list.js";
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
    let field = document.querySelector(".header__input");
    let getFieldValue = (value) => {
      this.filter(value);
    };

    getFieldValue = debounce(getFieldValue, 500);
    field.addEventListener("keyup", e => {
      getFieldValue(field.value);
    });
  }
  filter(value) {
    let filteredArr = [];

    this.phones.map(e => {
      if (e.name.toLowerCase().includes(value.toLowerCase())) {
        filteredArr.push(e);
      }
    });
    
    new PhonesList({
      element: document.querySelector(".phones"),
      phones: filteredArr
    });
  }
}
