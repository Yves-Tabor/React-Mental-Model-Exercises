import React from 'react';

// functionCart({ items }) {
// const [total,setTotal]=React.useState(0);

// React.useEffect(() => {
// setTotal(items.reduce((sum,item) =>sum+item.price,0));
//   }, [items]);

// return<div>Total: {total}</div>;
// }

// - Why is this an anti-pattern?
// - Refactor to a better approach.

functionCart({ items }) {
const [total,setTotal] = React.useState(0);

React.useEffect(() => {
setTotal(items.reduce((sum, item) => sum+item.price,0));
  }, [items]);

return<div>Total: {total}</div>;
}