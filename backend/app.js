// backend/app.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// 기본 경로 테스트
app.get('/', (req, res) => {
  res.json({ message: "Node.js 백엔드 API 정상 작동중!" });
});

// 서버 실행
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Backend Server running on port ${PORT}`);
});