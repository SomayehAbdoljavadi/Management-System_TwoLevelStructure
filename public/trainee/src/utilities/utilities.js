export class Utilities {
  constructor() {
  }

  static reduceObject(object, neededProperty) {
    let reducedObject = {};
    neededProperty.forEach((key) => {
      if (object[key]) {
        reducedObject[key] = object[key];
      }
    });
    return reducedObject;
  }
}
