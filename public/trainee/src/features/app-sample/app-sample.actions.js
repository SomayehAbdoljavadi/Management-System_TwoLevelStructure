import {paLoadings} from "../../pa-loading-action"

export function systemTime(state, systemTime) {
  try {
    return Object.assign({}, paLoadings(state, 'systemTime', false), {systemTime});
  } catch (e) {
    console.log('e : ', e);
  }
}

export function timeOut(state, timeOut) {
  try {
    return Object.assign({}, paLoadings(state, 'timeOut', false), {timeOut});
  } catch (e) {
    console.log('e : ', e);
  }
}
