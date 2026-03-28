// ## Stale Closure Bug (Event Handler)

// functionCounter() {
// const [count,setCount]=React.useState(0);

// functionhandleClick() {
// setTimeout(() => {
// setCount(count+1);
//     },1000);
//   }

// return<buttononClick={handleClick}>Count: {count}</button>;
// }

// - Click the button multiple times quickly.
// - Explain why the count behaves unexpectedly.
// - Fix the bug so each click increments correctly.

import {useState} from 'react';

function Counter() {

const [count,setCount] = useState(0);

function handleClick() {
setTimeout(() => {
setCount(prev=> prev + 1);
    }, 1000);
  }

return(
<button onClick={handleClick}>Count: {count}</button>
);
}

export default Counter;

//Comments :
// This is a classic closure bug. The issue is that the handleClick function is capturing the count value at the time it was created, 
// not at the time it was executed.
// As the initial value is "0" in this case, when you press the button, you tell React set the count to "0 + 1" after one second.
// In case you press 3 times during that one second for new incrementation instructions, each instruction considers the count as "0" (the value when the function was created).
// In the functional update, "prev" stands here as the latest value in React's memory. 
// When you click you tell React "to check whatever number is there and add it to one" after one second
// After the second, React opens a real-time state that seize the current value even if it changed a millisecond ago.

