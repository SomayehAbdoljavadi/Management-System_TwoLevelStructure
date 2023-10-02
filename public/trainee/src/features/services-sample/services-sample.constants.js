export const SERVICE_CONST = getServiceUrl();

function getServiceUrl() {
  return {
    getSystemTime: {
      url: 'service/myService/myServiceApi',
      action: {name: 'getSystemTime'}
    },
    setTimeOut: {
      url: 'service/myService/myServiceApi',
      action: {name: 'setTimeOut'}
    }
  };
}
