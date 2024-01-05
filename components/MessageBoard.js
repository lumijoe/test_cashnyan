// components/MessageBoard.js
import { useState, useEffect } from 'react';

export default function MessageBoard() {
  const [messageData, setMessageData] = useState([]);

  useEffect(() => {
    // メッセージデータを取得する関数を定義
    const fetchMessageData = async () => {
      try {
        // データを取得するエンドポイントのURLを指定
        const response = await fetch('/api/getMessages');
        const data = await response.json();

        // 取得したデータをstateにセット
        setMessageData(data);
      } catch (error) {
        console.error('Error fetching message data:', error);
      }
    };

    // 関数を呼び出してメッセージデータを取得
    fetchMessageData();
  }, []);


  return (
    <table className="table">
      <tbody>
      {messageData.map((val, index) => (
        <tr key={index}>
          <th>{val.id}</th>
          <td>{val.msg}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}