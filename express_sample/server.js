//express読み込み
const express = require('express')
//dotenv読み込み
const dotenv = require('dotenv')

//dotenv設定読み込み
dotenv.config()
const HOST = process.env.HOST
const PORT = process.env.PORT

console.log(HOST)
console.log(PORT)

//サーバ作成
const app = express()

//GETリクエスト処理
app.get('/', (req,res) =>{
    //リクエスト処理
    console.log(req.body)
    console.log(req.url)
    console.log(req,query)

    //レスポンス処理
    res.send('Hello!!')
})

//サーバ待機
app.listen(PORT,HOST, () => {
    console.log(HOST)
    console.log(PORT)
    console.log('wait...')
})