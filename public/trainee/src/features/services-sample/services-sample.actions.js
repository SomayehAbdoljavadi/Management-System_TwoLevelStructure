import {paLoadings} from "../../pa-loading-action"

export function getSystemTime(state, getSystemTime) {
  try {
    return Object.assign({}, paLoadings(state, 'getSystemTime', false), {getSystemTime});
  } catch (e) {
    console.log('e : ', e);
  }
}

export function setTimeOut(state, setTimeOut) {
  try {
    return Object.assign({}, paLoadings(state, 'setTimeOut', false), {setTimeOut});
  } catch (e) {
    console.log('e : ', e);
  }
}
