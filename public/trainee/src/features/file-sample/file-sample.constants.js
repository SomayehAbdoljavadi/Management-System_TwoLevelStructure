export const FILE_CONST = getFileUrl();

function getFileUrl() {
  return {
    getPicture: {
      url: 'app/myAppFile/getPictureApi.png',
      action: {name: 'getPicture'}
    },
    getTxtFile: {
      url: 'app/myAppFile/getFileApi.txt',
      action: {name: 'getTxtFile'}
    },
    getExcelFile: {
      url: 'app/myAppFile/getFileApi.xlsx',
      action: {name: 'getExcelFile'}
    }
  };
}
