export const state = () => ({
  name: '',
  phone: '',
  counter: 0
});

export const mutations = {
  increment(state) {
    state.counter++ ;
  },
  update(state, data) {
    state.name = data.name;
    state.phone = data.phone;
  },
};
