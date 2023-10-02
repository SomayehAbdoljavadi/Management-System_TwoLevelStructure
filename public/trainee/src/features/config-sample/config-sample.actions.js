import {paLoadings} from "../../pa-loading-action"

export function firstConfig(state, firstConfig) {
  try {
    return Object.assign({}, paLoadings(state, 'firstConfig', false), {firstConfig});
  } catch (e) {
    console.log('e : ', e);
  }
}

export function secondConfig(state, secondConfig) {
  try {
    return Object.assign({}, paLoadings(state, 'secondConfig', false), {secondConfig});
  } catch (e) {
    console.log('e : ', e);
  }
}
