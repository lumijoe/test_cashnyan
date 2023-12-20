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
      </Head>

      <header>
        <h1 className="display-4">CashNyan</h1>
      </header>

      <div role="main">
        <p>タイトル、その他テキスト入力エリア</p>
        <div className="form-group">
          <label htmlFor="id_input">Login name:</label>
          <input
            type="text"
            id="id_input"
            className="form-control"
            onChange={(e) => setIdInput(e.target.value)}
          />
        </div>

        <button onClick={handleSetId} className="bg-red-400">
          Submit
        </button>
      </div>
    </div>
  );
}