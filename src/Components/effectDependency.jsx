// ```tsx
// functionLogger() {
// const [count,setCount]=React.useState(0);

// React.useEffect(() => {
// constid=setInterval(() => {
// console.log(count);
//     },1000);

// return () =>clearInterval(id);
//   }, []);

// return<buttononClick={() =>setCount(count+1)}>Increment</button>;
// }
// ```

// **Task:**

// - Why does the console always log the same value?
// - Fix it **without causing unnecessary re-renders every second**.

import React from "react";

function Logger() {
const [count,setCount] = React.useState(0);

React.useEffect(() => {
const id = setInterval(() => {
console.log(count);
    },1000);

return ()=> clearInterval(id);
 },[count]
);

return(
<button onClick={() =>setCount(count+1)}>Increment</button>
);
}

export default Logger;

// Comments
//The useEffect Hook is used to perform side effects, usually macrotasks that are not supposed to run during rendering. 
// As it takes a function and a dependency, it runs the function once, it never runs again unless the dependency value changed.