# ローカルに確認用の簡易サーバーを用意

### インストール

- `npm`の場合

```
npm install -g http-server
```

- `brew`の場合
```
brew install http-server
```

### 使い方

- 確認したいファイルがある任意のディレクトリまで移動して起動

```
cd パス

http-server

Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8080
.
.
.
```

127.0.0.1:8080か、localhost:8080でブラウザ確認できる。
