import React from 'react'
// ## Race Condition in Effects
// functionPost({ postId }) {
// const [post,setPost]=React.useState(null);

// React.useEffect(() => {
// fetch(`https://dummyjson.com/posts/${postId}`)
// .then(res =>res.json())
// .then(setPost);
//   }, [postId]);

// return<div>{post?.name}</div>;
// }

// - What happens if `postId` changes quickly?
// - Prevent outdated responses from overwriting newer ones.

function Post({ postId }) {
const [post, setPost] = React.useState(null);

React.useEffect(() => {
    fetch(`https://dummyjson.com/posts/${postId}`)
    .then(res => res.json())
    .then(setPost);
    }, [postId]);

return <div>{post?.name}</div>;
}