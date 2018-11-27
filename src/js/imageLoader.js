export default class ImageLoader {
    constructor() {
      return this;
    }

    loadImage(src, resolve) {
      let img = document.createElement('img');
            img.src = `..${src}`;
            img.onload = function() {
              this.loadedCount += 1;
              if (this.loadedCount === this.listLength) {
                resolve(this.loadList);
              }
            }.bind(this);
            return img;
    }
  
    init(loadList) {
      this.loadList = loadList;
      this.loaded = false;
      this.loadedCount = 0;
      this.list = loadList.entities.map((entitie, index) => entitie.img);
      this.listLength = this.list.length;
      return new Promise(function(resolve, reject) {
        this.list.map((src, index) => {
          let img = this.loadImage(src, resolve);
          img.onerror = function() {
            src = '/img/img_product.png';
            this.loadList.entities[index].img = src;
            this.loadImage(src, resolve);
          }.bind(this);
        });
      }.bind(this));
    }
  }