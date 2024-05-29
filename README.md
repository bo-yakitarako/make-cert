# れどめ
opensslでオレオレ証明書を作りますわよ

## やりかた
以下のシェルスクリプトを実行
```bash
bash generate.sh
```

実行すると以下のファイルが生成される
- server.crt (CA証明書)
- server.csr (公開鍵)
- server.key (秘密鍵)

### CAを登録
`server.crt`を開く
![image](https://github.com/bo-yakitarako/make-cert/assets/55777096/1bf2cf2d-c272-4ef7-8a88-a9a73f6f6a56)

1|2|3|4
--|--|--|--
![image](https://github.com/bo-yakitarako/make-cert/assets/55777096/71197fc7-9ab9-4313-b25b-692dcd6bcf9e)|![image](https://github.com/bo-yakitarako/make-cert/assets/55777096/e4038f85-1e4b-47cf-8e7f-03af660a6ad2)|![image](https://github.com/bo-yakitarako/make-cert/assets/55777096/cf0673ae-f477-44db-be48-e3293c62c87d)|![image](https://github.com/bo-yakitarako/make-cert/assets/55777096/e8299a6b-245b-4888-98a3-783516355fbd)
証明書のインストールを選択|`ローカルコンピューター`で次へ|`信頼されたルート証明書`を選択|完了してもう1回開くと証明が通っている

### 公開鍵と秘密鍵を利用
`server.csr`と`server.key`をhttpサーバーに利用するとhttpsでの接続ができるようになる

以下の方法でNode.jsのhttpサーバーのサンプルが開くので、それで確認可能
1. `yarn install`
2. `yarn start`でwebサーバーをlisten
3. https://localhost:3000 に接続可能
