const onMatchStr = "on:",
  vmMatchStr = "vm:",
  elMatchStr = "el:";


export default class AttributesBinding {
  constructor(element){
    this.element = element;
  }
  parse(){
    this.bindingElements = Array.prototype.filter.call(
      this.element.querySelectorAll("*"),
      function(element) {
        return Array.prototype.some.call(
          element.attributes,
          function(attr) {
            return attr.nodeName.startsWith(onMatchStr) || attr.nodeName.startsWith(vmMatchStr) || attr.nodeName.startsWith(elMatchStr);
          }
        );
      });
    return this.bindingElements;
  }
}
