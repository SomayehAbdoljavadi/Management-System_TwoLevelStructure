import {PLATFORM} from 'aurelia-pal';
import './persian';
import './custom';

export function configure(config) {
  config
    .plugin(PLATFORM.moduleName('aurelia-validation'));

}
