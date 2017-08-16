export const Widget = class Widget {
   constructor() {
      this.service = null;
      this.type = null;
      this.width = null;
      this.height = null;
      this.cssClass = null;
      this.elementId = null;
   }

   /**
    * @param {String} serviceName
    */
   setService(serviceName) {
      this.service = serviceName;
   }

   /**
    * @returns {String}
    */
   getService() {
      return this.service;
   }

   /**
    * @param {String} type
    */
   setType(type) {
      this.type = type;
   }

   /**
    * @returns {String}
    */
   getType() {
      return this.type;
   }

   /**
    * @param {String} id
    */
   setElementId(id) {
         this.elementId = id;
      }
      /**
       * @param {String} cssClass
       */
   setCssClass(cssClass) {
      this.cssClass = cssClass;
   }

   /**
    * @returns {String}
    */
   getCssClass() {
      return this.cssClass;
   }

   /**
    * @param {String} width
    */
   setWidth(width) {
      this.width = width;
   }

   /**
    * @returns {String}
    */
   getWidth() {
      return this.width;
   }

   /**
    * @param {String} height
    */
   setHeight(height) {
      this.height = height;
   }

   /**
    * @returns {String}
    */
   getHeight() {
      return this.height;
   }

   build() {
      throw "getWidget function shall be overwritten";
   }

   getConfig() {
      throw "getConfig function shall be overwritten";
   }
}