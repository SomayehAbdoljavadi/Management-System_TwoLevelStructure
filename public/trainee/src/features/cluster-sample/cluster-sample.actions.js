import {paLoadings} from "../../pa-loading-action"

export function getTime(state, getTime) {
  try {
    return Object.assign({}, paLoadings(state, 'getTime', false), {getTime});
  } catch (e) {
    console.log('e : ', e);
  }
}

export function setCluster(state, setCluster) {
  try {
    return Object.assign({}, paLoadings(state, 'setCluster', false), {setCluster});
  } catch (e) {
    console.log('e : ', e);
  }
}
