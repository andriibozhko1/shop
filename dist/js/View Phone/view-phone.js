export default class ViewPhone {
  constructor({element, phone, phoneList}) {
    this.element = element;
    this.phoneListPage = phoneList;
    this.sideBar = document.querySelector('.side-bar')
    
    this.addEvents();
  }
  render() {
    this.element.classList.remove('hide');
    window.scrollTo(0,0)

    this.sideBar.classList.add('side-bar--hide')   
    let imgBlocks = this.phone.images.map(img => {      
      return `
      <div class="view-photo__side-item" data-img-src="./${img}">
         <img class="view-phone__side-img" src="./${img}" alt="${img}">
      </div>
      `
    });

    this.element.innerHTML = `        
        <div class="view-phone__content">
          <div class="view-phone__side-images">
            ${imgBlocks.join('')}
          </div>
          <div class="view-phone__main-img-block">
              <img class="view-phone__main-img" src="./${this.phone.images[0]}" alt="${this.phone.id}">
          </div>
          <div class="view-phone__description">
              <div class="btn-to-back">Back to Phones</div>
              <div class="view-phone__title">
                  ${this.phone.name}
              </div>
              <div class="view-phone__snippet">
              ${this.phone.description}
              </div>
              <div class="view-phone__to-order" data-to-order-id="${this.phone.id}">
                Buy
              </div>
          </div>
        </div>
        
          <ul class="view-phone__specifications">
          <li class="view-phone__specifications-item">
            <span class="view-phone__specifications-item-title">Availability and Networks</span>
            <dl>
              <dt class="view-phone__specifications-type">Availability:</dt>
              <dd>${this.phone.availability}</dd>
            </dl>
          </li>
          <li class="view-phone__specifications-item">
            <span class="view-phone__specifications-item-title">Battery</span>
            <dl>
              <dt class="view-phone__specifications-type">Type:</dt>
              <dd>${this.phone.battery.type}</dd>
              <dt class="view-phone__specifications-type">Talk Time:</dt>
              <dd>${this.phone.battery.talkTime}</dd>
              <dt class="view-phone__specifications-type">Standby time (max):</dt>
              <dd>${this.phone.battery.standbyTime}</dd>
            </dl>
          </li>
          <li class="view-phone__specifications-item">
            <span class="view-phone__specifications-item-title">Storage and Memory</span>
            <dl>
              <dt class="view-phone__specifications-type">RAM:</dt>
              <dd>${this.phone.storage.ram}</dd>
              <dt class="view-phone__specifications-type">Internal Storage:</dt>
              <dd>${this.phone.storage.flash}</dd>
            </dl>
          </li>
          <li class="view-phone__specifications-item">
            <span class="view-phone__specifications-item-title">Connectivity</span>
            <dl>
              <dt class="view-phone__specifications-type">Network Support:</dt>
              <dd>${this.phone.connectivity.cell}</dd>
              <dt class="view-phone__specifications-type">WiFi:</dt>
              <dd>${this.phone.connectivity.wifi}</dd>
              <dt class="view-phone__specifications-type">Bluetooth:</dt>
              <dd>${this.phone.connectivity.bluetooth}</dd>
              <dt class="view-phone__specifications-type">Infrared:</dt>
              <dd>${this.phone.connectivity.infrared ? '✘' : '✓'}</dd>
              <dt class="view-phone__specifications-type">GPS:</dt>
              <dd>${this.phone.connectivity.gps ? '✘' : '✓'}</dd>
            </dl>
          </li>
          <li class="view-phone__specifications-item">
            <span class="view-phone__specifications-item-title">Android</span>
            <dl>
              <dt class="view-phone__specifications-type">OS Version:</dt>
              <dd>${this.phone.android.os}</dd>
              <dt class="view-phone__specifications-type">UI:</dt>
              <dd>${this.phone.android.ui}</dd>
            </dl>
          </li>
          <li class="view-phone__specifications-item">
            <span class="view-phone__specifications-item-title">Size and Weight</span>
            <dl>
              <dt class="view-phone__specifications-type">Dimensions:</dt>
              <dd>${this.phone.sizeAndWeight.dimensions[0]}</dd>
              <dd>${this.phone.sizeAndWeight.dimensions[1]}</dd>
              <dd>${this.phone.sizeAndWeight.dimensions[2]}</dd>
              <dt class="view-phone__specifications-type">Weight:</dt>
              <dd>${this.phone.sizeAndWeight.weight}</dd>
            </dl>
          </li>
          <li class="view-phone__specifications-item">
            <span class="view-phone__specifications-item-title">Display</span>
            <dl>
              <dt class="view-phone__specifications-type">Screen size:</dt>
              <dd>${this.phone.display.screenSize}</dd>
              <dt class="view-phone__specifications-type">Screen resolution:</dt>
              <dd>${this.phone.display.screenResolution}</dd>
              <dt class="view-phone__specifications-type">Touch screen:</dt>
              <dd>${this.phone.display.touchScreen ? '✓' : '✘'}</dd>
            </dl>
          </li>
          <li class="view-phone__specifications-item">
            <span class="view-phone__specifications-item-title">Hardware</span>
            <dl>
              <dt class="view-phone__specifications-type">CPU:</dt>
              <dd>${this.phone.hardware.cpu}</dd>
              <dt class="view-phone__specifications-type">USB:</dt>
              <dd>${this.phone.hardware.u}</dd>
              <dt class="view-phone__specifications-type">Audio / headphone jack:</dt>
              <dd>${this.phone.hardware.audioJack}</dd>
              <dt class="view-phone__specifications-type">FM Radio:</dt>
              <dd>${this.phone.hardware.fmRadio ? '✓' : '✘'}</dd>
              <dt class="view-phone__specifications-type">Accelerometer:</dt>
              <dd>${this.phone.hardware.accelerometer ? '✓' : '✘'}</dd>
            </dl>
          </li>
          <li class="view-phone__specifications-item">
            <span class="view-phone__specifications-item-title">Camera</span>
            <dl>
              <dt class="view-phone__specifications-type">Primary:</dt>
              <dd>${this.phone.camera.primary}</dd>
              <dt class="view-phone__specifications-type">Features:</dt>
              <dd>${this.phone.camera.features}</dd>
            </dl>
          </li>
          <li class="view-phone__specifications-item">
            <span class="view-phone__specifications-item-title">Additional Features</span>
            <dd>${this.phone.additionalFeatures}</dd>
          </li>
        </ul>    
    `;
  }
  addEvents() {
    let mainImg = this.element.querySelector('.view-phone__main-img');

    this.element.addEventListener('show-phone', (data) => {
      this.phone = data.detail;
      this.render();
    })

    this.element.addEventListener('click', (e) => {
      if(e.target.closest('.btn-to-back')) {
        this.element.classList.add('hide');
        this.phoneListPage.classList.remove('hide');
        this.sideBar.classList.remove('side-bar--hide')   
      }
      if(e.target.closest('.view-photo__side-item')) {
        let img = e.target.closest('.view-photo__side-item');        
        mainImg.src = img.dataset.imgSrc;
      }
    })
  }
}
