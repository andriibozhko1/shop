"use strict";
import SideBar from "./components/SideBar/sidebar.js"; // Side Bar.
import DropDown from "./components/SideBar/drop-down.js"; // Drop Down.
import PhonesList from "./components/Phones/phones-list.js"; // Phones List.
import Header from "./components/Header/header.js"; // Header.
import phones from "./services/phones.js"; // Phones OBJ.
import FilterField from "./components/Header/filter-field.js"; // Filter Field.
import Cart from './components/Cart/cart.js' // Cart.
// Imports.

let header = new Header({
  element: document.querySelector(".header")
});
let sideBar = new SideBar({
  element: document.querySelector(".side-bar"),
}); // Create my side bar.

let dropDown = new DropDown({
  element: document.querySelector(".drop-down"),
  typesOfSorting: [
    {
      type: "name",
      value: "Alphabetical"
    },
    {
      type: "age",
      value: "Newest"
    }
  ],
  phones: phones,
}); // Create my drop down.

let phonesList = new PhonesList({
  element: document.querySelector(".phones"),
  phones: phones
});

let filterField = new FilterField({
  element: document.querySelector(".header__search-field"),
  phones: phones
});
let cart = new Cart({
  element: document.querySelector('.header__cart'),
  cartMenu: document.querySelector('.cart-menu'),
  phones: [],
})
