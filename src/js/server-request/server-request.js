export default class ServerRequest {
  constructor() {
    this.xhr = new XMLHttpRequest();    
    
    this.getAllPhones;
    this.findById;
  }
  getAllPhones() {
    this.xhr.open('GET', './api/phones.json', false);
    this.xhr.send();

    return JSON.parse(this.xhr.responseText);
  }
  findById(id) {
    this.xhr.open('GET', `./api/phones/${id}.json`, false);
    this.xhr.send();

    return JSON.parse(this.xhr.responseText);    
  }
}