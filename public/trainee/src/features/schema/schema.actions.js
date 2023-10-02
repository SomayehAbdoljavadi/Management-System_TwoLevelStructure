import {paLoadings} from "../../pa-loading-action"

export function schemaEasy(state, schemaEasy) {
  try {
    return Object.assign({}, paLoadings(state, 'schemaEasy', false), {schemaEasy});
  } catch (e) {
    console.log('e : ', e);
  }
}

export function schemaHard(state, schemaHard) {
  try {
    return Object.assign({}, paLoadings(state, 'schemaHard', false), {schemaHard});
  } catch (e) {
    console.log('e : ', e);
  }
}
