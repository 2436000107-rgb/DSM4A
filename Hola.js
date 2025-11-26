DOMRectList.prototype = {
  item(index) {
    return this[index] || null;
  }
};
Object.defineProperty(DOMRectList.prototype, 'length', {
    get() { 
        return Object.keys(this).length;
    }
});