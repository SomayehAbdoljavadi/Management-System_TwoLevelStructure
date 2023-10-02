
export function paLoadings(state, loadingKey, isShowing) {
  try {
    const newState = Object.assign({}, state);
    newState.paLoadings[loadingKey].isShowing = isShowing;
    return newState;
  } catch (error) {
    console.log('خطا در اکشن paLoadings "error": ', error);
  }
}
