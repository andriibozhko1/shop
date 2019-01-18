"use strict";
import SideBar from './components/sidebar.js'; // Side Bar.
import DropDown from './components/drop-down.js' // Drop Down.
import PhonesList from './components/phones-list.js' // Phones List.


let sideBar = new SideBar({
  element: document.querySelector('.side-bar'),
}); // Create my side bar.

let dropDown = new DropDown({
  element: document.querySelector('.drop-down'),
  typesOfSorting: [{
    type: 'name',
    value: 'Alphabetical',
  },
  {
    type: 'age',
    value: 'Newest',
  }],
}); // Create my drop down.

let phonesList = new PhonesList({
  element: 1,
})