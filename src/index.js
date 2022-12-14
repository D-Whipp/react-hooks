import ReactDOM from 'react-dom/client';
import './index.css';
import React from 'react';
import { useFetch } from './useFetch';

function App({ login }) {
  const { loading, data, error } = useFetch(
    `https://api.github.com/users/${login}`
  );
  if (loading) return <h1>Loading</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  // return (
  //   <div>
  //     <pre>{JSON.stringify(data, null, 2)}</pre>
  //   </div>
  // );
  return (
    <div>
      <img src={data.avatar_url} alt={data.log} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App login="d-whipp" />);

// Libraries that use Hooks
// React Router, Relay, Apollo...
// https://usehooks.com to help develop hooks
