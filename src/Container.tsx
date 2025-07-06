import { use } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export function Container({ postsPromise, onRefresh }: { postsPromise: Promise<Post[]>; onRefresh: () => void }) {
  const posts = use(postsPromise);

  return (
    <div>
      <h1>JSONPlaceholder Posts</h1>
      <div style={{ maxHeight: '400px', overflow: 'auto' }}>
        {posts.map((post: Post) => (
          <div
            key={post.id}
            style={{
              border: '1px solid #ddd',
              margin: '10px 0',
              padding: '10px',
              borderRadius: '5px',
            }}
          >
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
      <button onClick={onRefresh} style={{ marginTop: '10px' }}>
        Refresh
      </button>
    </div>
  );
}
