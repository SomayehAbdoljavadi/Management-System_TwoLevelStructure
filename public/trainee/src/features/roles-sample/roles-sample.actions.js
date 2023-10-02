import {paLoadings} from "../../pa-loading-action"

export function getRole(state, getRole) {
  try {
    return Object.assign({}, paLoadings(state, 'getRole', false), {getRole});
  } catch (e) {
    console.log('e : ', e);
  }
}

export function selectRole(state, selectRole) {
  try {
    return Object.assign({}, paLoadings(state, 'selectRole', false), {selectRole});
  } catch (e) {
    console.log('e : ', e);
  }
}
