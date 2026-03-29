import React from "react";
// Object Dependency Trap

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

// - Why does this refetch on every render?
// - Fix it without removing necessary dependencies.

export default function Search({ query }) {
const [results, setResults] = React.useState([]);

// const options = { query };
const options = React.useMemo(() => 
        {
            console.log("Query changed:", query);
            return { query };
        }, [query])

React.useEffect(() => {
fetch("https://jsonplaceholder.typicode.com/posts", {
     method: "POST",
     body: JSON.stringify(options) 
    })
.then(res => res.json())
.then(setResults);
  }, [options]);

return <div>
        {results.length}
       </div>;
}

// Comments:
// The issue is that the options object is created on every render, causing the dependency array to detect a change and refetch.
// To fix it we use the hook useMemo to memoize the options object, it means the options is recreated only if the query has really changed. 
// Or you can simply fix it by replacing the options object with the query directly in the dependency array to avoi the object reference issue.