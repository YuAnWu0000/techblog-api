const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const fs = require('fs');
const https = require('https');
const SSLKey = fs.readFileSync('./Cert/server.key');
const SSLCert = fs.readFileSync('./Cert/server.pem');

const app = express();
dotenv.config();

app.use(cors({
  origin: [
    'http://localhost:8080',
  ],
  methods: ['GET', 'POST'],
  credentials: true // enable set cookie
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('trust proxy', 1);
app.use(session({
  secret: 'zachary-techblog',
  name: 'csid',
  resave: true,
  saveUninitialized: false,
  cookie: {
    secure: true,
    httpOnly: true,
    sameSite: 'none'
  }
}));

fs.readdirSync('./routes').forEach(fileName => {
  fileName = fileName.replace('.js','');
  app.use('/' +fileName , require('./routes/'+ fileName + '.js'));
});

// 若執行環境為local, 則開啟https連線並使用自簽金鑰
if (process.env.SERVER_ENV === 'local') {
  // https連線預設PORT為443, http為80
  // const port = process.env.SERVER_PORT || 443;
  // const server = https.createServer({
  //   key: SSLKey,
  //   cert: SSLCert
  // }, app);

  // server.listen(port, function() {
  //   const host = server.address().address;
  //   const port = server.address().port;
  //   console.log(`Server start listening https://${host}:${port}/`);
  // });
  const port = process.env.SERVER_PORT || 80;
  const server = app.listen(port, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Server start listening http://${host}:${port}/`);
  });
} else {
  const port = process.env.SERVER_PORT || 80;
  const server = app.listen(port, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Server start listening http://${host}:${port}/`);
  });
}

