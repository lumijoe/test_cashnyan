import { useState, useEffect } from 'react';
import Head from 'next/head';
import MessageBoard from '../components/MessageBoard';
import Header from '../components/Header.js'

export default function Index() {
// const Index = () => {
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
    <div className="container items-center">
      <Head>
        {/* metaタグ、アクセシビリティ、追加すること */}
        <meta charSet="UTF-8" />
        <title>Test CashNyan</title>
      </Head>
      <Header />
      

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