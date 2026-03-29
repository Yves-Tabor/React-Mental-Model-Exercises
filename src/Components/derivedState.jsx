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

export default function Cart({ items }) {

const total = React.useMemo(() => items.reduce((sum, item) => sum+item.price,0), [items]);

return<div>Total: {total}</div>;
}

//Comments
// Error name: Derived state anti-pattern, that occurs when you try to update a state variable based on props
// The principle is that we never use derived data in state, instead we derive it from props or other state (a derived data is data that is calculated from other data)