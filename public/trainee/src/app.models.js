export class ModelAbc {
  static fromObject(src) {
    return Object.assign(new ModelAbc(), src);
  }

  propertyA = '';
  propertyB = '';
}
