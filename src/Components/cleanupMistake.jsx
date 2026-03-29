import React from 'react';

// functionWindowSize() {
// const [width,setWidth]=React.useState(window.innerWidth);

// React.useEffect(() => {
// window.addEventListener("resize", () => {
// setWidth(window.innerWidth);
//     });

// return () => {
// window.removeEventListener("resize", () => {
// setWidth(window.innerWidth);
//       });
//     };
//   }, []);

// return<div>{width}</div>;
// }

// - Why doesn’t cleanup work?
// - Fix the issue properly.

function WindowSize() {
const [width, setWidth] = React.useState(window.innerWidth);

React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

window.addEventListener("resize", handleResize)

return () => {
window.removeEventListener("resize", handleResize)
    };
  }, []);

return<div>{width}</div>;
}

// Comments
// The issue is a reference mistake. We are creating two functions identical appearently but they are not the same reference.
// So the cleanup function is not removing the event listener.
// When we create two functions separately, they are created with different references although they do the same thing.
