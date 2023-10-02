import {PLATFORM} from 'aurelia-framework';

export function configure(config) {
  config.globalResources([
    PLATFORM.moduleName('./value-converters/shamsi'),
    PLATFORM.moduleName('./value-converters/order-by'),
    PLATFORM.moduleName('./attributes/pa-busy/pa-busy'),
    PLATFORM.moduleName('./elements/pa-accordion/pa-accordion'),
    PLATFORM.moduleName('./elements/pa-sidebar/pa-sidebar'),
  ]);
}
