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
Object.setPrototypeOf(DOMRectList.prototype, Object.prototype);
export { DOMRectList };
function DOMRectList() {
    if (!(this instanceof DOMRectList)) {
        throw new TypeError("DOMRectList constructor cannot be called as a function.");
    }
    for (var i = 0; i < arguments.length; i++) {
        this[i] = arguments[i];
    }           
}