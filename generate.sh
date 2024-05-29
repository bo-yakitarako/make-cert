#!/bin/bash

openssl genrsa -out server.key 2048
openssl req -out server.csr -key server.key -new -subj '/C=JP/ST=Tochigi/L=Utsunomiya/O=bo-yakitarako/OU=Server/CN=localhost/emailAddress=hoge@example.com'

openssl x509 -req -days 3650 -signkey server.key -in server.csr -out server.crt -extfile SAN.txt
