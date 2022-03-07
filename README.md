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

### Issue#1: Postman could not get any response(chrome 可以)。

```
Reason: 由於SSL憑證為自簽憑證，postman預設會將其阻擋。
Solution: file->settings->將SSL certificate verification設為關閉。
```

References: [https://blog.csdn.net/linlinxie/article/details/78342749](https://blog.csdn.net/linlinxie/article/details/78342749)

### Issue#2: Could not login github when pushing the code。

```
Reason: github更改政策，廢棄了原先的密碼登入方式。
Solution: 根據官方指引創建access_token for github api。
```

References: [https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
