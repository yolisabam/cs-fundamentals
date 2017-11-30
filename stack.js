class Stack {
  constructor() {
    this.items = []
  }

  push(element) {
    this.items.push(element);
  }

  pop(element) {
    this.items.pop(element);
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0 ;

  }

  clear () {
    this.items = []

  }


}