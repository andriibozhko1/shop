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
    let fields = [... this.element.querySelectorAll(".header__input")];
    let getFieldValue = (value) => {
      this.filter(value);
    };

    getFieldValue = debounce(getFieldValue, 500);
    fields.map(field => {
      field.addEventListener("keyup", e => {
        getFieldValue(field.value);
      });
    })
  }

  filter(value) {
    let filteredArr = [];
    this.phones.filter(phone => {      
      if (phone.name.toLowerCase().includes(value.toLowerCase())) {        
        filteredArr.push(phone);
      }
    });
    
    new PhonesList({
      element: document.querySelector(".phones"),
      phones: filteredArr
    });
  }
}
