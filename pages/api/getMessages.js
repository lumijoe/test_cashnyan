// pages/api/getMessages.js
import fs from 'fs/promises';

export default async function handler(req, res) {
  try {
    // mydata.txtからデータを読み込む
    const rawData = await fs.readFile('./mydata.txt', 'utf-8');
    const messageData = rawData.trim().split('\n').map(JSON.parse);

    // レスポンスとしてデータを返す
    res.status(200).json(messageData);
  } catch (error) {
    console.error('Error reading message data:', error);
    res.status(500).send('Internal Server Error');
  }
}
