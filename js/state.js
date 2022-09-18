const initialState = {
  money: 0,
  backers: 0,
  daysLeft: null,
  products: [],
  listeners: [],
};

export const state = initialState;

export function updateState(property, value, callback) {
  state[property] = value;

  if (callback) {
    callback();
  }
}
