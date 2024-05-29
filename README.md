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
