// Class

class Cookie {
  constructor(color) {
    this.color = color;
  }
  getColor() {
    return this.color;
  }
  setColor(color) {
    this.color = color;
  }
}

let cookieOne = new Cookie('Pink');
let cookieTow = new Cookie('Violete');
console.log(cookieOne);
console.log(cookieOne.color);
console.log(cookieTow.color);

