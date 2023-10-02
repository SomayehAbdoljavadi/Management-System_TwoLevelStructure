export const SESSION_CONST = getSessionUrl();

function getSessionUrl() {
  return {
    saveDataInSession: {
      url: 'app/myAppSession/appSessionApi',
      action: {name: 'saveDataInSession'}
    },
    getDataFromSession: {
      url: 'app/myAppSession/appSessionApi',
      action: {name: 'getDataFromSession'}
    },
    removeSession: {
      url: 'app/myAppSession/appSessionApi',
      action: {name: 'removeSession'}
    }
  };
}
