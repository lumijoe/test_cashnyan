// components/MessageBoard.js
import { useState, useEffect } from 'react';

export default function MessageBoard() {
  const [messageData, setMessageData] = useState([]);

  useEffect(() => {
    // Fetch message data from the server and set it using setMessageData
  }, []);

  return (
    <table className="table">
      {messageData.map((val, index) => (
        <tr key={index}>
          <th>{val.id}</th>
          <td>{val.msg}</td>
        </tr>
      ))}
    </table>
  );
}