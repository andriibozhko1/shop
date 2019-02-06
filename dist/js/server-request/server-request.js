export default class ServerRequest {
  constructor() {
    this.getAllPhones;
    this.findById;
  }

  getAllPhones() {
    let url = `./api/phones.json`;
    return this.sendRequest(url);
  }

  findById(id) {
    let url = `./api/phones/${id}.json`;
    return this.sendRequest(url);
  }
  
  sendRequest(url) {
    return new Promise((resolve, reject) => {
      let promise = fetch(url).then((response) => {
        if(response.status !== 200) {
          reject(`${response.status} ${response.statusText}`)
        }
        return response.json();
      }).then((phones) => {
        resolve(phones);
      })
    })
  }
}
