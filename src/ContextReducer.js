
const counterReducer = (state, action) => {
    switch (action) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      default:
      
    }
  }
  export default counterReducer;