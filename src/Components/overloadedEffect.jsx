import React from 'react';

// Overloaded Effect

// functionDashboard({ postId }) {
// const [post,setPost]=React.useState(null);
// const [theme,setTheme]=React.useState("light");

// React.useEffect(() => {
// fetch(`https://dummyjson.com/posts/${postId}`)
// .then(res =>res.json())
// .then(setPost);

// document.body.style.background=theme==="dark"?"#000":"#fff";
//   }, [postId,theme]);

// return<div>{post?.title}</div>;
// }

// - Why is this effect poorly structured?
// - Refactor into a better design.

export default function OverloadedEffect({ postId }) {
const [post,setPost] = React.useState(null);
const [theme,setTheme] = React.useState("light");

    React.useEffect(() => {
        fetch(`https://dummyjson.com/posts/${postId}`)
        .then(res =>res.json())
        .then(setPost);
    },[postId])
    React.useEffect(()=>{
        document.body.style.background=theme==="dark"?"#000":"#fff";
    },[theme])

return <div>{post?.title}</div>;
}

// Comments
// Two unrelated responsibilities cannot live in the same Effect. 
// Each effect should have a single task so the fetching will depends only on the postid change and the changing theme will not affect it.
// One useEffect = one side effect