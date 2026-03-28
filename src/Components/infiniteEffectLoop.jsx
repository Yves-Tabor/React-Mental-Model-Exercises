
// functionSearch({ query }) {
// const [results,setResults]=React.useState([]);

// constoptions= { query };

// React.useEffect(() => {
// fetch("https://dummyjson.com/posts", { method:"POST", body:JSON.stringify(options) })
// .then(res =>res.json())
// .then(setResults);
//   }, [options]);

// return<div>{results.length}</div>;
// }

// **Task:**

// - Why does this refetch on every render?
// - Fix it without removing necessary dependencies.

import React from "react";

function Infinite() {
const [data,setData] = React.useState([]);

React.useEffect(()=>{
fetch("https://dummyjson.com/posts")
.then(res => res.json())
.then(json => setData(json.posts));
  }, []);

return  <div>
            {data.length}
        </div>;
}

export default Infinite;

// Comments
// [data]: Runs every time data changes. If the effect itself changes data, you create a loop.
// []: This is the standard way to fetch initial data for a page. It runs only once.