export const APP_CONST = getAppUrl();

function getAppUrl() {
  return {
    systemTime: {
      url: 'app/myApp/myAppApi',
      action: {name: 'systemTime'}
    },
    timeOut: {
      url: 'app/myApp/myAppApi',
      action: {name: 'timeOut'}
    }
  };
}
