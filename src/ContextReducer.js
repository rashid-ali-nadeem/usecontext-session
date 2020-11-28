export const initialState = 0
export const CounterReducer = (state, action) => {
    switch (action) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      case 'RESET':
        return initialState
      default:
        return state
    }
  }
  