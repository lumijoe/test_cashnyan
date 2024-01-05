// pages/login.js
import { useState } from 'react';
import Head from 'next/head';
import Header from 'components/Header'


import { useEffect } from 'react';
import MessageBoard from '../components/MessageBoard';



export default function Login() {
  const [idInput, setIdInput] = useState('');

  const handleSetId = () => {
    localStorage.setItem('id', idInput);
    window.location.href = '/';
  };




  const [id, setId] = useState('');

  useEffect(() => {
    const storedId = localStorage.getItem('id');
    if (storedId) {
      setId(storedId);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('id');
    window.location.href = '/login';
  };




  return (
    <div className="container">
      <Head>
        <meta charSet="UTF-8" />
        <title>Login</title>
      </Head>

      <Header />

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


      <div role="main">
        <p>支出入力</p>

        <form method="post" action="/" className='bg-gray-400'>
          <p>何に使ったか: {id}</p>
          <input type="hidden" name="id" value={id} />
          <div className="form-group">
            <label htmlFor="msg">支出入力</label>
            <input type="number" name="msg" id="msg" className="form-control" />
            <input type="submit" value="Send" className="btn btn-primary" />
          </div>
        </form>

        <MessageBoard />
      </div>

      <button type="button" onClick={handleLogout} className="btn btn-warning">
        Logout
      </button>

    </div>
  );
}