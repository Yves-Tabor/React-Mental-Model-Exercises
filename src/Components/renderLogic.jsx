import React from 'react';

// FunctionFilteredList({ items, query }) {
// const [filtered,setFiltered]=React.useState([]);

// React.useEffect(() => {
// setFiltered(items.filter(item =>item.includes(query)));
//   }, [items,query]);

// return (
// <ul>
//       {filtered.map(item =><likey={item}>{item}</li>)}
// </ul>
//   );
// }

// - Why is `useEffect` unnecessary here?
// - Rewrite this in a more idiomatic React way.

export default function FilteredList({ items, query }) {
const filtered = React.useMemo(() => {
    items.filter(item =>item.includes(query));
  }, [items,query]);

return (
<ul>
      {filtered.map(item => <li key={item}> {item} </li>)}
</ul>
  );
}

// Comments
// The useEffect is unnecessary because as the filter is directly derived from props,
// React will re-render automatically when items or query change so the list update without any state or effect.