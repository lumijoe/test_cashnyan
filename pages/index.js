import { useState, useEffect } from 'react';
import Head from 'next/head';
import MessageBoard from '../components/MessageBoard';

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
    <div className="container">
      <Head>
        {/* metaタグ、アクセシビリティ、追加すること */}
        <meta charSet="UTF-8" />
        <title>Message Board</title>
      </Head>

      <header>
        <h1 className="display-4">Message Board</h1>
      </header>

      <div role="main">
        <p>※ Messages are stored up to 10.</p>

        <form method="post" action="/">
          <p>ID: {id}</p>
          <input type="hidden" name="id" value={id} />
          <div className="form-group">
            <label htmlFor="msg">Message</label>
            <input type="text" name="msg" id="msg" className="form-control" />
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