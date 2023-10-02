export const Config_CONST = getConfigUrl();

function getConfigUrl() {
  return {
    firstConfig: {
      url: 'app/myFirstAppConfig/serviceConfigApi',
      action: {name: 'firstConfig'}
    },
    secondConfig: {
      url: 'app/mySecondAppConfig/serviceConfigApi',
      action: {name: 'secondConfig'}
    }
  };
}
