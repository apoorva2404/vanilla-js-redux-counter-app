
 const store = Redux.createStore(counter)

 const displayValue = document.getElementById('display')


document.getElementById("increment").addEventListener('click', function (event) {
  store.dispatch({type: "INCREMENT"})
});

document.getElementById("decrement").addEventListener('click', function (event) {
  store.dispatch({type: "DECREMENT"})
});


function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

function render() {
  displayValue.innerHTML = store.getState().toString()
}

render()
store.subscribe(render)