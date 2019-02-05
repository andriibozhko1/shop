export default class ServerRequest {
  constructor() {
    this.xhr = new XMLHttpRequest();    
    
    this.getAllPhones;
    this.findById;
  }
  getAllPhones(callBack) {
    let url = `./api/phones.json`;
    this.sendRequest(url, callBack);
  }
  findById(id,callBack) {
    let url = `./api/phones/${id}.json`;
    this.sendRequest(url, callBack);
  }
  sendRequest(url, callBack) {
    this.xhr.open('GET', url, true);
    this.xhr.send(); 

    this.xhr.onload = () => {
      let allPhones = JSON.parse(this.xhr.responseText);
      callBack(allPhones);
    }
  }
}