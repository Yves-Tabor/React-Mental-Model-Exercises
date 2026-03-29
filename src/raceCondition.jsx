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
    const controller = new AbortController();

    fetch(`https://dummyjson.com/posts/${postId}`, {
      signal: controller.signal,
    })
      .then(res => res.json())
      .then(data => setPost(data))
      .catch(err => {
        if (err.name !== "AbortError") {
          console.error(err);
        }
      });

    return () => {
      controller.abort();
    };
  }, [postId]);

  return <div>{post?.title}</div>;
}

// Comments
// If postId changes quickly, a new fetch is triggerd and finshishes while the old one is yet running and might overwrite the new one in the end.
// To prevent this, we use AbortController to cancel the previous request.
// 