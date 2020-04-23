function createStore() {
  // The store should have four parts
  // 1. The state
  // 2. Get the state.
  // 3. Listen to changes on the state.
  // 4. Update the state

  let state
  let listeners = [];

  const getState = () => state

  const subscribe = (listener) => {
    listeners.push(listener)
  }

  return { getState, subscribe }
}

const store = createStore();

store.subscribe(() => {
  console.log("New state", store.getState())
});

store.subscribe(() => {
  console.log("Other New state", store.getState())
})