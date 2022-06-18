class List {
  dataStore = [];
  listSize = 0;
  pos = 0;

  // This works!!!!!

  append(element) {
    this.dataStore[this.listSize++] = element;
  }

  find(element) {
    return this.dataStore.indexOf(element);
  }

  remove(element) {
    let el = this.find(element);
    if (el !== -1) {
      this.dataStore.splice(el, 1);
      this.listSize--;
      return true;
    }
    return false;
  }

  length() {
    return this.listSize;
  }

  toString() {
    return this.dataStore;
  }
  insert(element, after) {
    let el = this.find(after);
    if (el !== -1) {
      this.dataStore.splice(el + 1, 0, element);
      this.listSize++;
      return true;
    }
    return false;
  }

  clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
  }

  contains(element) {
    for (let i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] === element) {
        console.log(`The element "${element}" is in the dataStrore :)`);
        return true;
      }
    }
    console.log(`The element "${element}" isn't in the dataStrore :(`);
    return false;
  }

  front() {
    this.pos = 0;
  }

  end() {
    this.pos = this.listSize - 1;
  }
  prev() {
    if (this.pos > 0) {
      this.pos--;
    }
  }
  next() {
    if (this.pos < this.listSize - 1) {
      this.pos++;
    }
  }

  currentPos() {
    return this.pos;
  }

  moveTo(position) {
    this.pos = position;
  }

  getElement() {
    return this.dataStore[this.pos];
  }

  info() {
    console.log("Data Store content: ", this.toString());
    console.log("Amount elements: ", this.listSize);
    console.log("Elemet's Position: ", this.pos);
    console.log("number of element: ", this.length());
    console.log("Current element: ", this.getElement());
  }
}

let list = new List();
list.append("Edgar");
list.append("Julieta");
list.append("Dido");
list.append("Luciana");

list.moveTo(1);
list.next();
list.next();
list.prev();
list.prev();
list.prev();
list.getElement();

list.info();

// list.clear();
// list.info();
