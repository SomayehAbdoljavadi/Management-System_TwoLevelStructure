export const addOptions = {
  callback: function (currentState, originalState, settings, action) {
    currentState.action = action;
    // return Object.assign({}, currentState, {action});
  },
  placement: 'after',
  settings: {},
};
