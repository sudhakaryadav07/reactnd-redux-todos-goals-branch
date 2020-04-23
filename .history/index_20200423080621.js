function createStore() {
  // The store should have four parts
  // 1. The state
  // 2. Get the state.
  // 3. Listen to changes on the state.
  // 4. Update the state

  let state
  let listerners = [];

  const getState = () => state

  const subscribe = () => {

  }

  return {
    getState
  }
}

const store = createStore();
store.subscribe(() => {
  console.log("New staate", store.getState())
})