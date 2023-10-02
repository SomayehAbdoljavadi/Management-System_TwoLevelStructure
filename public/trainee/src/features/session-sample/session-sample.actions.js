import {paLoadings} from "../../pa-loading-action"

export function saveDataInSession(state, saveDataInSession) {
  try {
    return Object.assign({}, paLoadings(state, 'saveDataInSession', false), {saveDataInSession});
  } catch (e) {
    console.log('e : ', e);
  }
}

export function getDataFromSession(state, getDataFromSession) {
  try {
    return Object.assign({}, paLoadings(state, 'getDataFromSession', false), {getDataFromSession});
  } catch (e) {
    console.log('e : ', e);
  }
}

export function removeSession(state, removeSession) {
  try {
    return Object.assign({}, paLoadings(state, 'removeSession', false), {removeSession});
  } catch (e) {
    console.log('e : ', e);
  }
}
