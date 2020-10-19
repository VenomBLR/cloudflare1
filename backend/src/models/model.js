class Model {
  constructor(obj) {
    if (!obj) return;
    this.name = obj.name;
    this.url = obj.url;
  }
}

export default Model;
