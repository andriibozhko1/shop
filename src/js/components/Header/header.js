export default class Header {
  constructor({element}) {
    this.element = element;
    this.render();    
  }
  render() {
    this.element.innerHTML = `
      <div class="header__logo">
          <a href="index.html" class="header__logo-link"></a>
      </div>
      <div class="header__search-field">
        <label class="search-icon">
            <img src="img/icons/musica-searcher.png" alt="search-icon"/>
            <input type="text" class="header__input"/>
        </label>
      </div>
      <div class="header__cart-btn"></div>
    `
  }

}