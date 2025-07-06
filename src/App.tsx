import { Suspense, useState } from 'react';
import { Container } from './Container';
import { ErrorBoundary } from 'react-error-boundary';
import './App.css';

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
    <>
      <h1>Vite + React</h1>
      <ErrorBoundary fallback={<div>Error</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <Container postsPromise={postsPromise} onRefresh={() => setPostsPromise(fetchPosts)} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
