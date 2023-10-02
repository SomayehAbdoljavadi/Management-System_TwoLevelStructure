import * as paLoding from './pa-loading-action';
import * as services from './features/services-sample/services-sample.actions';
import * as app from './features/app-sample/app-sample.actions';
import * as session from './features/session-sample/session-sample.actions';
import * as roles from './features/roles-sample/roles-sample.actions';
import * as file from './features/file-sample/file-sample.actions';
import * as config from './features/config-sample/config-sample.actions';
import * as schema from './features/schema/schema.actions';
import * as cluster from './features/cluster-sample/cluster-sample.actions';

export const Actions = (function () {
  return Object.assign(
    {},
    paLoding,
    services,
    app,
    session,
    roles,
    file,
    config,
    schema,
    cluster,
  );
})();
