import { use } from 'react';

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

const runFn = <ReturnType,>(fn: () => ReturnType) => fn();

const postPromise = runFn(async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  return response.json() as Promise<Post>;
});

export function Container2() {
  // 외부에서 resolve된 promise를 받기
  const post = use(postPromise);

  return (
    <div>
      <h2>Post Details</h2>
      <p>it's using external promise</p>
      <div
        style={{
          border: '1px solid #ddd',
          padding: '15px',
          borderRadius: '8px',
          margin: '10px 0',
          backgroundColor: '#f9f9f9',
        }}
      >
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <small>Post ID: {post.id}</small>
      </div>
    </div>
  );
}
