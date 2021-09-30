let someState = {count: 0}
let readyAction = {type: 'INCREASE_COUNT'}

function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

function dispatch(action) {
  someState = changeState(someState, readyAction)
  return someState
}

function render() {
  document.body.textContent = someState.count
}

dispatch({ type: "INCREASE_COUNT"})

changeState(someState, readyAction)

dispatch({ type: 'INCREASE_COUNT' })
dispatch({ type: 'INCREASE_COUNT' })
dispatch({ type: 'INCREASE_COUNT' })
dispatch({ type: 'INCREASE_COUNT' })
dispatch({ type: 'INCREASE_COUNT' })

render()