import {Container} from 'aurelia-dependency-injection';


export function getCaptcha(state, captcha) {
  try{
    return Object.assign({}, paLoadings(state, 'getCaptcha', false), {captcha});
  }
  catch(e){
    console.log('e : ', e);
  }
}

/**
 * Dispach this action when you want to turn on/off a loading.
 * @param {Object} state Current state
 * @param {String} loadingKey Target loading name.
 * @param {Boolean} isShowing Turn on/off loading.
 */
export function paLoadings(state, loadingKey, isShowing) {
  try {
    const newState = Object.assign({}, state);
    newState.paLoadings[loadingKey].isShowing = isShowing;
    return newState;

  } catch (error) {
    console.log('خطا در اکشن paLoadings "error": ', error);
  }
}
