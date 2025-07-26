import { Suspense, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import { Container } from './Container';
import { Container2 } from './Container2';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const fetchPosts = () => fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json()) as Promise<Post[]>;

function App() {
  const [postsPromise, setPostsPromise] = useState(fetchPosts);

  return (
    <div>
      <h1>Vite + React</h1>
      <ErrorBoundary fallback={<div>Error</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <Container postsPromise={postsPromise} onRefresh={() => setPostsPromise(fetchPosts)} />
        </Suspense>
        <hr />
        <Suspense fallback={<div>Loading...</div>}>
          <Container2 />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
