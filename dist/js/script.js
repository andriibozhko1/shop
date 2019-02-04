"use strict";
import SideBar from "./components/SideBar/sidebar.js";
import DropDown from "./components/SideBar/drop-down.js";
import PhonesList from "./components/Phones/phones-list.js";
import Header from "./components/Header/header.js";
import FilterField from "./components/Header/filter-field.js";
import Cart from "./components/Cart/cart.js";
import ModalWindow from "./components/Modal Window/modal-window.js";
import ServerRequest from "./server-request/server-request.js";

let getAllPhones = new ServerRequest();

getAllPhones.getAllPhones((phones) => {

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
  });

  let phonesList = new PhonesList({
    element: document.querySelector(".phones"),
    phones: phones,
  });

  let filterField = new FilterField({
    element: document.querySelector(".header__search-field"),
    phones:phones,
  });

  let cart = new Cart({
    element: document.querySelector(".cart-menu__list"),
    phonesList: phones,
  });
})

let header = new Header({
  element: document.querySelector(".header")
});
let sideBar = new SideBar({
  element: document.querySelector(".side-bar")
});

let modalWindow = new ModalWindow({
  element: document.querySelector(".cart-menu"),
  cartBtn: document.querySelector(".header__cart-btn")
});
