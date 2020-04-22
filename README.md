# techblog-api

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

## Issues
### Issue#1: Postman could not get any response(chrome可以)。
```
Reason: 由於SSL憑證為自簽憑證，postman預設會將其阻擋。
Solution: file->settings->將SSL certificate verification設為關閉。
```
References: [https://blog.csdn.net/linlinxie/article/details/78342749](https://blog.csdn.net/linlinxie/article/details/78342749)