export default class ImageLoader {
    constructor() {
      return this;
    }
  
    init(loadList) {
      this.loaded = false;
      this.loadedCount = 0;
      this.list = loadList.map((entitie, index) => entitie.img);
      this.listLength = this.list.length;
      return new Promise(function(resolve, reject) {
        this.list.map(src => {
          let img = document.createElement('img');
          img.src = `..${src}`;
          img.onload = () => {
            this.loadedCount += 1;
            if (this.loadedCount === this.listLength) {
              resolve();
            }
          }
          return img;
        });
      }.bind(this));
    }
  }