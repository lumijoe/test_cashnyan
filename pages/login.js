// pages/login.js
import { useState } from 'react';
import Head from 'next/head';

export default function Login() {
  const [idInput, setIdInput] = useState('');

  const handleSetId = () => {
    localStorage.setItem('id', idInput);
    window.location.href = '/';
  };

  return (
    <div className="container">
      <Head>
        <meta charSet="UTF-8" />
        <title>Login</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          crossOrigin="anonymous"
        />
      </Head>

      <header>
        <h1 className="display-4">Message Board</h1>
      </header>

      <div role="main">
        <p>Enter your login name.</p>
        <div className="form-group">
          <label htmlFor="id_input">Login name:</label>
          <input
            type="text"
            id="id_input"
            className="form-control"
            onChange={(e) => setIdInput(e.target.value)}
          />
        </div>

        <button onClick={handleSetId} className="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
}