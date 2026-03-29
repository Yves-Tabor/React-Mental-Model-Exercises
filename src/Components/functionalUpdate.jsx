import React from 'react';
// ## Batching & Functional Updates

// functionCounter() {
// const [count,setCount]=React.useState(0);

// functionincrement() {
// setCount(count+1);
// setCount(count+1);
//   }

// return<buttononClick={increment}>{count}</button>;
// }

// - Why does count only increase by 1 instead of 2?
// - Fix it and explain why your solution works.

function Counter() {
const [count,setCount] = React.useState(0);

function increment() {
// setCount(prev=> prev + 1);
// setCount(prev=> prev + 1);
setCount(count+1);
setCount(count+1);
console.log(count);
  }

return<button onClick = {increment}> {count} </button>;
}

export default Counter;

// Comments
// When we call count in setCount it captures the initial value, so both calls use the same value
// The functional update approach (prev => prev + 1) ensures each update sees the latest state
// and applies the updates sequentially
