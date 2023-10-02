import {PLATFORM} from 'aurelia-framework';

export default [
  {route: '', redirect: 'samples'},
  {
    route: 'samples',
    name: 'samples',
    moduleId: PLATFORM.moduleName('features/samples/samples', 'samples'),
    nav: true,
    title: 'خانه'
  },
  {
    route: 'services-sample',
    name: 'services-sample',
    moduleId: PLATFORM.moduleName('features/services-sample/services-sample', 'services-sample'),
    nav: true,
    title: ' (service)  نمونه '
  },
  {
    route: 'app-sample',
    name: 'app-sample',
    moduleId: PLATFORM.moduleName('features/app-sample/app-sample', 'app-sample'),
    nav: true,
    title: ' (app) نمونه'
  },
  {
    route: 'session-sample',
    name: 'session-sample',
    moduleId: PLATFORM.moduleName('features/session-sample/session-sample', 'session-sample'),
    nav: true,
    title: ' (session) نمونه'
  },
  {
    route: 'roles-sample',
    name: 'roles-sample',
    moduleId: PLATFORM.moduleName('features/roles-sample/roles-sample', 'roles-sample'),
    nav: true,
    title: ' (access control) نمونه'
  },
 
  {
    route: 'file-sample',
    name: 'file-sample',
    moduleId: PLATFORM.moduleName('features/file-sample/file-sample', 'file-sample'),
    nav: true,
    title: ' ( file) نمونه'
  },
  {
    route: 'config-sample',
    name: 'config-sample',
    moduleId: PLATFORM.moduleName('features/config-sample/config-sample', 'config-sample'),
    nav: true,
    title: ' (config) نمونه'
  },
  {
    route: 'cluster-sample',
    name: 'cluster-sample',
    moduleId: PLATFORM.moduleName('features/cluster-sample/cluster-sample', 'cluster-sample'),
    nav: true,
    title: ' (cluster) نمونه'
  }, 
  {
    route: 'schema',
    name: 'schema',
    moduleId: PLATFORM.moduleName('features/schema/schema', 'schema'),
    nav: true,
    title: ' (schema) نمونه '
  }
];
