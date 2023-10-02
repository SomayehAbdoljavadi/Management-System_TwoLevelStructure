import {inject} from 'aurelia-dependency-injection';
import {NewInstance} from 'aurelia-framework';
import {Store} from 'aurelia-store';
import {ValidationController, validateTrigger} from 'aurelia-validation';

@inject(Store, NewInstance.of(ValidationController))
export class Samples {
  constructor(store, vController) {
    this.store = store;

    this.vController = vController;
    this.vController.validateTrigger = validateTrigger.changeOrBlur;

  }
}
