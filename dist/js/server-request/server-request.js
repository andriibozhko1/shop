export default class ServerRequest {
  constructor() {
    this.xhr = new XMLHttpRequest();    
    
    this.getAllPhones;
    this.findById;
  }
  getAllPhones(callBack) {
    this.xhr.open('GET', './api/phones.json', true);
    this.xhr.send(); 

    this.xhr.onload = () => {
      let allPhones = JSON.parse(this.xhr.responseText);
      callBack(allPhones);
    }
  }
  findById(id,callBack) {
    this.xhr.open('GET', `./api/phones/${id}.json`, true);
    this.xhr.send();

    this.xhr.onload = () => {
      let currentPhone = JSON.parse(this.xhr.responseText);
      callBack(currentPhone)
    }
  }
}