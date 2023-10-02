import {paLoadings} from "../../pa-loading-action"

export function getPicture(state, getPicture) {
  try {
    return Object.assign({}, paLoadings(state, 'getPicture', false), {getPicture});
  } catch (e) {
    console.log('e : ', e);
  }
}

export function getTxtFile(state, getTxtFile) {
  try {
    return Object.assign({}, paLoadings(state, 'getTxtFile', false), {getTxtFile});
  } catch (e) {
    console.log('e : ', e);
  }
}

export function getExcelFile(state, getExcelFile) {
  try {
    return Object.assign({}, paLoadings(state, 'getExcelFile', false), {getExcelFile});
  } catch (e) {
    console.log('e : ', e);
  }
}
