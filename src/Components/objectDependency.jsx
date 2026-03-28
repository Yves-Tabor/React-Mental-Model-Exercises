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

function Search({ query }) {
const [results, setResults] = React.useState([]);

const options = { query };

React.useEffect(() => {
fetch("https://dummyjson.com/posts", {
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
export default Search;