import { useState, useEffect } from 'react';
import Head from 'next/head';
import MessageBoard from '../components/MessageBoard';
import Header from '../components/Header.js'


export default function Index() {
// const Index = () => {
  const [id, setId] = useState('');

  const [idInput, setIdInput] = useState('');

  const handleSetId = () => {
    localStorage.setItem('id', idInput);
    window.location.href = '/';
  };

  const handleButtonClick = (choice) => {
    // ボタンで選択された値をidInputに設定
    setIdInput(choice);
  }

  const handleRadioChange = (e) => {
    // ボタンで選択された値をidInputに設定
    setIdInput(e.target.value);
  }

  


  useEffect(() => {
    const storedId = localStorage.getItem('id');
    if (storedId) {
      setId(storedId);
    }
  }, []);

  




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
        <h1 className='text-2xl'>支出カテゴリ入力</h1>
        <div className="form-group">
          <label htmlFor="id_input">何に使った？</label>
          <div className='flex'>
            <input
              type="text"
              id="id_input"
              className="form-control bg-slate-200 border rounded w-[230px] text-sm h-[30px]"
              onChange={(e) => setIdInput(e.target.value)}
              placeholder="その他は入力してください"
            />
          </div>
          <div>
            
          
          <input
          type="radio"
          id="水"
          name="options"
          value="水"
          checked={idInput === "水"}
          onChange={handleRadioChange}
        />
        <label htmlFor="水">水</label>

        <input
          type="radio"
          id="お茶"
          name="options"
          value="お茶"
          checked={idInput === "お茶"}
          onChange={handleRadioChange}
        />
        <label htmlFor="お茶">お茶</label>

        <input
          type="radio"
          id="オヤツ"
          name="options"
          value="オヤツ"
          checked={idInput === "オヤツ"}
          onChange={handleRadioChange}
        />
        <label htmlFor="オヤツ">オヤツ</label>
        </div>
        </div>

        <button onClick={handleSetId} className="bg-red-400 w-[280px] rounded-full">
          カテゴリを決定
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